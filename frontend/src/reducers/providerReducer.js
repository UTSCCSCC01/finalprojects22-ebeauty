import {
  PROVIDERS_REQUEST,
  PROVIDERS_SUCCESS,
  PROVIDERS_FAILURE,
  PROVIDER_DETAILS_REQUEST,
  PROVIDER_DETAILS_SUCCESS,
  PROVIDER_DETAILS_FAILURE,
} from '../constants/providerConstant';

// Request reducer for all task providers
export const taskProvidersReducer = (state = { taskProviders: [] }, action) => {
  switch (action.type) {
    case PROVIDERS_REQUEST:
      return { loading: true, taskProviders: [] };
    case PROVIDERS_SUCCESS:
      return {
        loading: false,
        taskProviders: action.payload.taskProviders,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PROVIDERS_FAILURE:
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
    case PROVIDER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PROVIDER_DETAILS_SUCCESS:
      return { loading: false, taskProvider: action.payload };
    case PROVIDER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
