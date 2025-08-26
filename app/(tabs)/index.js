import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image
        source={{ uri: 'https://www.unismuh.ac.id/wp-content/uploads/2021/03/logo-unismuh-300x300.png' }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Universitas Muhammadiyah Makassar (Unismuh) adalah salah satu perguruan tinggi
        swasta terkemuka di Makassar, Sulawesi Selatan. Terletak di Jalan Sultan Alauddin No. 259,
        kampus ini memiliki berbagai fakultas dan program studi unggulan.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  image: { width: '100%', height: 200, resizeMode: 'contain', marginBottom: 16 },
  description: { fontSize: 16, textAlign: 'justify', lineHeight: 24 },
});
