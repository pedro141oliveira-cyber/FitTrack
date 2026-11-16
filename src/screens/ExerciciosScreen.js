
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import exercicios from '../data/exercicios';
import CardExercicio from '../components/CardExercicio';
import BarraProgresso from '../components/BarraProgresso';

export default function ExerciciosScreen({ navigation }) {
  const [concluidos, setConcluidos] = useState([]);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((tempoAtual) => tempoAtual + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const alternarConclusao = (id) => {
    setConcluidos((estadoAtual) =>
      estadoAtual.includes(id)
        ? estadoAtual.filter((item) => item !== id)
        : [...estadoAtual, id]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        Lista de exercícios
      </Text>

      <Text style={styles.resumo}>
        {exercicios.length - concluidos.length} exercícios restantes
      </Text>

      <Text style={styles.cronometro}>
        Tempo de treino: {Math.floor(segundos / 60)} min {segundos % 60} seg
      </Text>

      <BarraProgresso
        concluidos={concluidos.length}
        total={exercicios.length}
      />

      {exercicios.map((exercicio) => (
        <CardExercicio
          key={exercicio.id}
          exercicio={exercicio}
          concluido={concluidos.includes(exercicio.id)}
          onConcluir={() => alternarConclusao(exercicio.id)}
          onPress={() =>
            navigation.navigate('Detalhes', {
              exercicio: exercicio,
            })
          }
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 20,
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resumo: {
    color: '#AAAAAA',
    fontSize: 15,
    marginBottom: 12,
  },
  cronometro: {
    color: '#F97316',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});