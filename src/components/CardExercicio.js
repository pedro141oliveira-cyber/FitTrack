
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardExercicio({
  exercicio,
  onPress,
  concluido,
  onConcluir,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.informacoes}>
        <Text style={styles.nome}>{exercicio.nome}</Text>

        <Text style={styles.detalhes}>
          {exercicio.series} séries • {exercicio.repeticoes} repetições
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botaoDetalhes}
        onPress={onPress}
      >
        <Text style={styles.textoBotao}>Ver detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.botaoConcluir,
          concluido && styles.botaoConcluido,
        ]}
        onPress={onConcluir}
      >
        <Text style={styles.textoBotao}>
          {concluido ? 'Concluído ✓' : 'Marcar como concluído'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#252525',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
  },
  informacoes: {
    marginBottom: 14,
  },
  nome: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  detalhes: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  botaoDetalhes: {
    backgroundColor: '#F97316',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  botaoConcluir: {
    backgroundColor: '#444444',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoConcluido: {
    backgroundColor: '#247A4B',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
