import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import antFill from './assets/fonts/antfill.ttf';
import antOutline from './assets/fonts/antoutline.ttf';
import rootStackConfig from './navigators/navigatorRootStack';


const Stack = createStackNavigator();
const cacheFonts = (fonts) => fonts.map(font => Font.loadAsync(font));

const App = () => {
  const [configs, setConfigs] = useState({ isReady: false });

  const loadFontsAsync = async () => {
    const fontAssets = cacheFonts([{ 'antoutline': antOutline }, { 'antfill': antFill }]);
    await Promise.all[fontAssets];
    setConfigs({ ...configs, isReady: true });
  }

  useEffect(() => {
    loadFontsAsync();
  }, [])

  return !configs.isReady ? <AppLoading /> : (
    <NavigationContainer>
      <Stack.Navigator>
        {
          Object.keys(rootStackConfig).map(path =>
            <Stack.Screen key={path} name={path} options={{ headerShown: false }} component={rootStackConfig[path].component} />)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;