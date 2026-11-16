import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Cabecalho from '../components/Cabecalho';

export default function DetalhesExercicioScreen({ route }) {
  const { exercicio } = route.params;

  return (
    <View style={styles.container}>
      <Cabecalho
        titulo={exercicio.nome}
        subtitulo="Confira as informações deste exercício."
      />

      <View style={styles.card}>
        <Text style={styles.texto}>
          Séries: {exercicio.series}
        </Text>

        <Text style={styles.texto}>
          Repetições: {exercicio.repeticoes}
        </Text>

        <Text style={styles.texto}>
          Duração estimada: {exercicio.series * 2} minutos
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 20,
  },
  card: {
    backgroundColor: '#252525',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 17,
    marginBottom: 12,
  },
});