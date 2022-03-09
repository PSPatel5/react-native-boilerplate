import { ReduxTypes } from '../types';
import { IAppThemes } from '@/utils/Interfaces';

const updateTheme = (theme: IAppThemes) => ({
  type: ReduxTypes.SET_THEME,
  theme,
});

export const themeAction = {
  updateTheme,
};
