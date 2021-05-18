import { combineReducers, Reducer } from 'redux';
import { exampleReducer } from './Basic/Reducer';
import { ReduxTypes } from './ReduxTypes';
export const reducers: Reducer<any> = combineReducers({
  example: exampleReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === ReduxTypes.LOG_OUT) {
    state = undefined;
  }
  return reducers(state, action);
};

export { rootReducer };
