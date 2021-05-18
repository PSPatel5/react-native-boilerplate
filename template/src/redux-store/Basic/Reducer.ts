import { ReduxTypes } from '../ReduxTypes';

const initialState = {
  count: 0,
};

export const exampleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ReduxTypes.EXAMPLE:
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
};
