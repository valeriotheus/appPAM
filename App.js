import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importa o NavigationContainer
import AppNavigator from './src/routes'; // Importa o AppNavigator

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator /> {/* Carrega o AppNavigator para gerenciar a navegação */}
    </NavigationContainer>
  );
}