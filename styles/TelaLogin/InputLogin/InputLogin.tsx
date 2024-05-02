import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

export function InputLogin() {
  return (
    <>
        <TextInput
            style={[styles.inputLogin, {marginTop: 50}]}
            placeholder='Email'
            keyboardType='email-address'
        />
        <TextInput
            style={[styles.inputLogin]}
            placeholder='Senha'
            keyboardType='email-address'
        />
    </>
  );
}