import { ReduxTypes } from '../ReduxTypes';

const updateCount = (count: number) => ({
  type: ReduxTypes.EXAMPLE,
  count,
});

export const exampleActions = {
  updateCount,
};
