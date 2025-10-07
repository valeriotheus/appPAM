import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function FotosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Página Fotos</Text>
      <Image
        source={{ uri: "https://placekitten.com/300/200" }}
        style={{ width: 300, height: 200, marginBottom: 20 }}
      />
      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
});