import { IAppThemes } from '@/utils/Interfaces';
import { ReduxTypes } from '../types';

const initialState: { theme: IAppThemes } = {
  theme: 'System',
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ReduxTypes.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};
