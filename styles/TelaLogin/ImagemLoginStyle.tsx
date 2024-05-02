import React from 'react';
import { Image, Text } from 'react-native';

import { styles } from './LoginStyles';
import { loginLogo } from '../../assets/images/security-gif.gif';

export function ImagemTelaLogin() {
  return (
    <>
        <Text style={[styles.titulo]}>
            LOGIN ID
        </Text>
        <Image source={loginLogo} style={[styles.imagemLogin]}/>
    </>
  );
}
