import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import Routes from './src/navigation/Routes';

const App = props => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'black'} translucent />
      <Routes />
    </View>
  );
};

export default App;
