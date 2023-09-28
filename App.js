import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Tabs from './src/Tabs';
import * as Font from 'expo-font';

export default function App() {
  useEffect(() => {
    async function loadCustomFonts() {
      await Font.loadAsync({
        'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf')
      });
    }

    loadCustomFonts();
  }, []);

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

