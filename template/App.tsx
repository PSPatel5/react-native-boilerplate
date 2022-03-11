import React from 'react';
import { AppNavigator } from '@/navigation/app.navigation';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
