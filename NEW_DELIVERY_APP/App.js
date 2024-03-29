import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './src/navigation/Routes';

const App = (props) => {
  const [switchToTabs, setSwitchToTabs] = useState(false);

  const switchToTabsHandler = () => {
    setSwitchToTabs(true);
  };

  return (
   
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'black'} translucent />
      
      <Routes switchToTabs={switchToTabs} />
    </View>
    
  );
};

export default App;