import React from 'react';
import { AppNavigator } from 'navigation/AppNavigator';
import { Provider } from 'react-redux';
import { ReduxStore } from './src/redux-store/index';

const App = () => {
  return (
    <Provider store={ReduxStore}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
