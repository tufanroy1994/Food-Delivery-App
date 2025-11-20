import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import { AppColors } from './src/utils';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={AppColors.TRANSPARENT}
      />
      <AppNavigation />
    </>
  );
};

export default App;
