import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi ini dibuat untuk keperluan tugas pemrograman mobile menggunakan Expo Router.
      </Text>
      <Text style={styles.description}>
        Fungsi setiap halaman:
        {"\n"}• <Text style={styles.bold}>Home</Text>: Menampilkan informasi singkat tentang Universitas Muhammadiyah Makassar.
        {"\n"}• <Text style={styles.bold}>About</Text>: Menjelaskan tujuan pembuatan aplikasi ini.
        {"\n"}• <Text style={styles.bold}>Profil</Text>: Menampilkan data diri mahasiswa pembuat aplikasi.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  description: { fontSize: 16, textAlign: 'justify', lineHeight: 24, marginBottom: 10 },
  bold: { fontWeight: 'bold' },
});
