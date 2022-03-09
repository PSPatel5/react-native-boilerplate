export type IAppThemes = 'System' | 'Day-Night' | 'Light' | 'Dark';

export interface IState {
  theme: { theme: IAppThemes };
}
