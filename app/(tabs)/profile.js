import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.jpg')}
        style={styles.image}
      />
      <Text style={styles.name}>Nama Lengkap: Ahmad Fauzi</Text>
      <Text style={styles.text}>NIM: 20241010001</Text>
      <Text style={styles.text}>Kelas: 4A</Text>
      <Text style={styles.text}>Jurusan: Teknik Informatika</Text>
      <Text style={styles.text}>Fakultas: Teknik</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 6 },
});
