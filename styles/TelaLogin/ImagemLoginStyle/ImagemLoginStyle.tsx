import React from 'react';
import { Image, Text } from 'react-native';

import { styles } from './style';
import loginLogo from '../../../assets/images/security-gif.gif';

export function ImagemTelaLogin() {
  return (
    <>
        <Text style={[styles.titulo]}>
            LOGIN APP
        </Text>
        <Image source={loginLogo} style={[styles.imagemLogin]}/>
    </>
  );
}
