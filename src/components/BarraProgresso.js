
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BarraProgresso({ concluidos, total }) {
  const porcentagem = total > 0
    ? (concluidos / total) * 100
    : 0;

  return (
    <View style={styles.container}>
      <View style={styles.informacoes}>
        <Text style={styles.titulo}>Progresso do treino</Text>

        <Text style={styles.valor}>
          {concluidos}/{total}
        </Text>
      </View>

      <View style={styles.fundo}>
        <View
          style={[
            styles.preenchimento,
            { width: `${porcentagem}%` },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  informacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  valor: {
    color: '#F97316',
    fontWeight: 'bold',
  },
  fundo: {
    height: 10,
    backgroundColor: '#333333',
    borderRadius: 10,
    overflow: 'hidden',
  },
  preenchimento: {
    height: '100%',
    backgroundColor: '#F97316',
    borderRadius: 10,
  },
});
