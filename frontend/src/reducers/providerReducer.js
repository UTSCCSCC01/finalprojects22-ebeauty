import {
  TASK_PROVIDERS_REQUEST,
  TASK_PROVIDERS_SUCCESS,
  TASK_PROVIDERS_FAILURE,
  TASK_PROVIDER_DETAILS_REQUEST,
  TASK_PROVIDER_DETAILS_SUCCESS,
  TASK_PROVIDER_DETAILS_FAILURE,
} from '../constants/providerConstant';

// Request reducer for all task providers
export const taskProvidersReducer = (state = { taskProviders: [] }, action) => {
  switch (action.type) {
    case TASK_PROVIDERS_REQUEST:
      return { loading: true, taskProviders: [] };
    case TASK_PROVIDERS_SUCCESS:
      return {
        loading: false,
        taskProviders: action.payload.taskProviders,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case TASK_PROVIDERS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Request reducer for a signle task provider
export const taskProviderDetailsReducer = (
  state = { taskProvider: {} },
  action
) => {
  switch (action.type) {
    case TASK_PROVIDER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case TASK_PROVIDER_DETAILS_SUCCESS:
      return { loading: false, taskProvider: action.payload };
    case TASK_PROVIDER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
