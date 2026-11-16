
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicioScreen from './src/screens/InicioScreen';
import ExerciciosScreen from './src/screens/ExerciciosScreen';
import DetalhesExercicioScreen from './src/screens/DetalhesExercicioScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#171717',
          },
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{ title: 'FitTrack' }}
        />

        <Stack.Screen
          name="Exercicios"
          component={ExerciciosScreen}
          options={{ title: 'Exercícios' }}
        />

        <Stack.Screen
          name="Detalhes"
          component={DetalhesExercicioScreen}
          options={{ title: 'Detalhes do exercício' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
