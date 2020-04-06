/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NetworkInfo} from 'react-native-network-info';
import React from 'react';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {MainScreen} from './view/mainScreen';

const App: () => React$Node = () => {
  return <MainScreen />;
};

export default App;
