import {
  TASK_PROVIDERS_REQUEST,
  TASK_PROVIDERS_SUCCESS,
  TASK_PROVIDERS_FAILURE,
  TASK_PROVIDER_DETAILS_REQUEST,
  TASK_PROVIDER_DETAILS_SUCCESS,
  TASK_PROVIDER_DETAILS_FAILURE,
} from '../constants/taskproviderConstant';
import axios from 'axios';

// Get all task providers
export const listTaskProviders =
  (keyword = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: TASK_PROVIDERS_REQUEST });
      const { data } = await axios.get(`/api/taskproviders?keyword=${keyword}`);
      dispatch({ type: TASK_PROVIDERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: TASK_PROVIDERS_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// Get a task provider
export const listTaskProviderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TASK_PROVIDER_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/taskproviders/${id}`);
    dispatch({ type: TASK_PROVIDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TASK_PROVIDER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
