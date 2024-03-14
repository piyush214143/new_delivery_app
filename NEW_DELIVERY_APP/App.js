import React from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './src/navigation/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return (
    // <SafeAreaView style={{flex:1,}}>
    <View style={{flex:1}}>
      <StatusBar backgroundColor={'black'} translucent />
    <Routes/>
    </View>
    // </SafeAreaView>
  );
};

export default App;