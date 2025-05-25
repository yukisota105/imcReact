import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet,Text,TextInput,View, TouchableOpacity } from 'react-native';
import { calcularImc } from './imc/calculoImc';


export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  
  function CalcularImc()
  {
    const resultado = calcularImc(peso, altura);

     if (!resultado.imc) {
      Alert.alert("Erro", resultado.mensagem);
    } else {
      Alert.alert("Resultado do IMC", `Seu IMC é ${resultado.imc}\n${resultado.mensagem}`);
    }
  }

  
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> IMC </Text>

      <View tyle={styles.bloco}>
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
          
            value={peso}
            onChangeText={setPeso}

          />
      </View>

      <View tyle={styles.bloco}>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            
            value={altura}
            onChangeText={setAltura}
          />
      </View>

      <View style={styles.bloco}>
          <TouchableOpacity style={styles.btn} onPress={CalcularImc}>
            <Text style={styles.btnTxt}>
              Calcular
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ccc',
  },

  titulo:{
    textAlign:'center',
    fontSize:30,
    marginTop:80
    },

    bloco:{
      width:'100%',
      marginTop:20
    },
    label:{
      width:'80%',
      fontSize:20,
      marginLeft:'10%'
    },

    input:{
      width:'80%',
      fontSize:20,
      marginLeft:'10%',
      borderWidth:1,
      borderRadius:10
    },
    btn:{
      width:'80%',
      marginLeft:'10%',
      backgroundColor:'#000'
    },
    btnTxt:{
      fontSize:30,
      color:'#FFF',
      textAlign:'center'
    }
});
