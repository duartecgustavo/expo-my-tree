import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaCultivo from './pages/TelaCultivo';
import TelaPrincipal from './pages/TelaPrincipal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="myTree" component={TelaPrincipal} />
        <Stack.Screen name="Tela Principal" component={TelaCultivo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}