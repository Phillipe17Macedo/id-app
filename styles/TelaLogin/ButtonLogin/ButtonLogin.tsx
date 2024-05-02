import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { InputLogin } from '../InputLogin/InputLogin';

export function ButtonLogin() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  function handlePressEntrar(){
    console.log('Email: ', email);
    console.log('Senha: ', senha);
  }

  return (
    <>
      <InputLogin 
        senha={senha} 
        email={email}
      />

      <TouchableOpacity style={[styles.containerTexto]}>
        <Text style={[styles.textoBotao]} onPress={handlePressEntrar}>
          ENTRAR
        </Text>
      </TouchableOpacity>
    </>
  );
}