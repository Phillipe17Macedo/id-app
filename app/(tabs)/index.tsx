import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import styles from '../../styles/TelaLogin/LoginStyles';
import { ImagemTelaLogin } from '../../styles/TelaLogin/ImagemLoginStyle/ImagemLoginStyle';
import { InputLogin } from '../../styles/TelaLogin/InputLogin/InputLogin'

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImagemTelaLogin/>
      <InputLogin/>
    </View>
  );
}

