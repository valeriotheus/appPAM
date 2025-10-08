// screens/PhotosScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PhotosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria de Fotos</Text>
      <Image style={styles.image} source={{ uri: 'https://example.com/foto1.jpg' }} />
      <Image style={styles.image} source={{ uri: 'https://example.com/foto2.jpg' }} />
      <Image style={styles.image} source={{ uri: 'https://example.com/foto3.jpg' }} />
      <Image style={styles.image} source={{ uri: 'https://example.com/foto4.jpg' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
});

export default PhotosScreen;
