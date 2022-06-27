import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  taskProvidersReducer,
  taskProviderDetailsReducer,
} from './reducers/taskproviderReducer';

// combine all reducers into one root reducer
const reducer = combineReducers({
  taskProviders: taskProvidersReducer,
  taskProviderDetails: taskProviderDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
