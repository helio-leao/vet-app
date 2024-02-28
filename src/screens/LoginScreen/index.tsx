import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import googleIcon from '../../assets/icons/google-icon.png';
import { AuthContext } from '../../contexts/AuthProvider';


function LoginScreen(): React.JSX.Element {
  const { login, user } = useContext(AuthContext);
  const [loginText, setLoginText] = useState('');
  const [password, setPassword] = useState('');


  function handleEnterPressed() {
    // todo: implement login
    login({ id: '1', email: loginText });
  }


  return (
    <View style={styles.screenContainer}>

      <Text style={styles.title}>
        Acompanhamento DCVet
      </Text>

      <View style={styles.inputListContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Login
          </Text>
          <TextInput style={styles.textInput} onChangeText={setLoginText} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Senha
          </Text>
          <TextInput style={styles.textInput} secureTextEntry onChangeText={setPassword} />
        </View>
      </View>

      <View style={styles.loginButtonsContainer}>
        <TouchableOpacity>
          <Text style={[styles.text, {color: '#000'}]}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEnterPressed}>
          <Text style={[styles.text, {color: '#fff'}]}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.centralizedContainer, {marginBottom: 30}]}>
        <Text style={styles.text}>
          Logar com
        </Text>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={googleIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.centralizedContainer}>
        <Text style={styles.text}>
          Ainda não tem uma conta?
        </Text>
        <TouchableOpacity>
          <Text style={[styles.text, {color: '#000', fontWeight: '800'}]}>
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 40,
    color: '#666',
  },
  title: {
    fontSize: 36,
    marginBottom: 100,
    color: '#0aa',
  },
  inputListContainer: {
    gap: 16,
    marginBottom: 24,
  },
  inputContainer: {
    gap: 6,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  textInput: {
    borderColor: '#666',
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  loginButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 70,
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 26,
    paddingVertical: 10,
    borderRadius: 4,
  },
  centralizedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 40,
    height: 40,
  }
});

export default LoginScreen;