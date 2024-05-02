import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import styles from '../../styles/TelaLogin/LoginStyles';
import { ImagemTelaLogin } from '../../styles/TelaLogin/ImagemLoginStyle';

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImagemTelaLogin/>
    </View>
  );
}

