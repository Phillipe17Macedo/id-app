import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

interface LoginInputProps {
  email: string
  senha: string
}

export function InputLogin(props: LoginInputProps) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <>
        <TextInput
            style={[styles.inputLogin, {marginTop: 5}]}
            placeholder='Email'
            keyboardType='email-address'
        />
        <TextInput
            style={[styles.inputLogin]}
            placeholder='Senha'
            keyboardType='default'
            secureTextEntry
        />
    </>
  );
}