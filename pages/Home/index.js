// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao nosso App!</Text>
      <Image 
        style={styles.image}
        source={{ uri: 'https://example.com/sua-imagem.jpg' }} // Coloque o link da sua imagem aqui
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default HomeScreen;
