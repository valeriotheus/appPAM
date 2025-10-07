import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Localizacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nosso Endereço</Text>
      <Text style={styles.address}>Rua Exemplo, 123 - Centro, Cidade/UF</Text>
      <Image
        source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=Av+Paulista,SP&zoom=15&size=400x300&key=SUA_API_KEY' }}
        style={styles.map}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  address: { fontSize: 16, marginBottom: 20 },
  map: { width: 350, height: 250, borderRadius: 10 },
});
