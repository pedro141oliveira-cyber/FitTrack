
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Cabecalho from '../components/Cabecalho';
import BotaoPrincipal from '../components/BotaoPrincipal';

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Cabecalho
        titulo="Bem-vindo ao FitTrack!"
        subtitulo="Organize seus exercícios e acompanhe seu progresso."
      />

      <BotaoPrincipal
        titulo="Ver exercícios"
        onPress={() => navigation.navigate('Exercicios')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
