import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import googleLogo from '../../assets/images/google-logo.png';
import { AuthContext } from '../../contexts/AuthProvider';


function LoginScreen(): React.JSX.Element {
  const { login, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleEnterPressed() {
    // todo: implement login
    login({ id: '1', email });
  }


  return (
    <View style={styles.screenContainer}>

      <Text style={styles.title}>
        Acompanhamento DCVet
      </Text>

      {/* MID SECTION */}
      <View style={styles.inputListContainer}>        
        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Login
          </Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>
            Senha
          </Text>
          <TextInput
            secureTextEntry
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
          />
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
      </View>
      {/* END MID SECTION */}

      {/* LOWER SECTION */}
      <View>
        <View style={[styles.centralizedContainer, {marginBottom: 30}]}>
          <Text style={styles.text}>
            Logar com
          </Text>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={googleLogo}
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
      {/* END LOWER SECTION */}

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 36,
    color: '#0aa',
  },
  inputListContainer: {
    gap: 16,
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
  },
});

export default LoginScreen;