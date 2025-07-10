import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Box Hitam */}
      <View style={styles.blackBox}>
        <Text style={styles.name}>Rezki Asriani</Text>
        <Text style={styles.id}>105841111522</Text>
      </View>

        {/* Persegi Panjang berisi gambar apel */}
      <View style={styles.rectangle}>
        <Image
          source={{ uri: "https://tse2.mm.bing.net/th/id/OIP.51kHRYwt0TE1fkW0NMn3eAHaFO?pid=Api&P=0&h=180" }}
          style={styles.image}
        />
      </View>

      {/* Segitiga */}
      <View style={styles.triangle}></View>

      {/* Pill berisi icon dan teks di tengah */}
      <View style={styles.pill}>
        <Text style={styles.pillText}>🎓</Text>
        <Text style={styles.pillText}>105841112122</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#F5F5F5",
  },
  blackBox: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  name: {
    color: "red",
    fontSize: 25,
  },
  id: {
    fontWeight: "bold",
    color: "white",
  },
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 60,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "yellow",
  },
  pill: {
    backgroundColor: "purple",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  pillText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});