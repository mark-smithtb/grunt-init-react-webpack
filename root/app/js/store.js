import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import { fromJS } from "immutable";

function configureStore(initialState = fromJS({})) {
  const store = createStore(reducers, applyMiddleware(ReduxThunk));
  return store;
}

export default configureStore;
