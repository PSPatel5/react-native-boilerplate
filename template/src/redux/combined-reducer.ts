import { IState } from '@/utils/Interfaces';
import { combineReducers, Reducer } from 'redux';
import { themeReducer } from './theme/reducer';
import { ReduxTypes } from './types';

export const reducers: Reducer<any> = combineReducers({
  theme: themeReducer,
});

const rootReducer = (state: IState | undefined, action: any) => {
  if (action.type === ReduxTypes.LOG_OUT) {
    state = undefined;
  }
  return reducers(state, action);
};

export { rootReducer };
