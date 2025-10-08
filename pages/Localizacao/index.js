// screens/LocationScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localização</Text>
      <Text style={styles.address}>Endereço: Rua Exemplo, 123, São Paulo - SP</Text>
      <Image 
        style={styles.image}
        source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=-23.550520,-46.633308&zoom=14&size=400x400&markers=color:red%7Clabel:C%7C-23.550520,-46.633308' }}
      />
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default LocationScreen;
