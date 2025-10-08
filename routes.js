// routes.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Corrigido para importar do index.js de cada pasta dentro de pages
import Home from './pages/Home';
import Fotos from './pages/Fotos';
import Cadastro from './pages/Cadastro';
import Localizacao from './pages/Localizacao';

const Stack = createStackNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Fotos" component={Fotos} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Localizacao" component={Localizacao} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }  

export default Routes;
// Note: Ensure you have installed the necessary packages:
// npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context                                                     
// Also, make sure to wrap your app with NavigationContainer as shown above.
// Additionally, ensure that your project is set up to handle React Navigation as per the official documentation.
// For more details, refer to: https://reactnavigation.org/docs/getting-started