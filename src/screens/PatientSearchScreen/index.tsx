import {API_URL} from '@env';
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '../../navigation/HomeStack';
import PatientCard from '../../components/PatientCard';
import { AuthContext } from '../../contexts/AuthProvider';
import axios from 'axios';
import { Patient } from '../../types';
import ContainerLoadingIndicator from '../../components/ContainerLoadingIndicator';
import ContainerMessage from '../../components/ContainerMessage';
import findIcon from '../../assets/icons/find.png';


function PatientSearchScreen(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp>();
  const {accessToken} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [patients, setPatients] = useState<Patient[]>([]);


  useEffect(() => {
    async function getPatients() {
      const url = `${API_URL}/patients`;

      try {
        const {data} = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        });
        setPatients(data);
      } catch {
        Alert.alert('Atenção', 'Ocorreu um erro inesperado.');
      } finally {
        setIsLoading(false);
      }      
    }
    getPatients();
  }, []);


  function handlePatientCardPress(id: string) {
    navigation.navigate('CreateProgramScreen', { id });
  }


  return (
    <View style={styles.screenContainer}>

      <View>
        <TextInput
          style={[styles.textInput, styles.text]}
          placeholder='Buscar Paciente'
          placeholderTextColor={'#aaa'}
        />
        <TouchableOpacity style={{position: 'absolute', top: 8, right: 8}}>
          <Image
            source={findIcon}
            style={{height: 24, width: 24, tintColor: '#0aa'}}
          />
          {/* <FontAwesome name="search" size={24} color='#0aa' /> */}
        </TouchableOpacity>
      </View>


      <View style={styles.pacientListContainer}>
        {isLoading ? (
          <ContainerLoadingIndicator />
        ) : (
          <FlatList
            contentContainerStyle={{padding: 10, gap: 10}}
            data={patients}
            renderItem={({item: patient}) => (
              <PatientCard
                patient={patient}
                onPress={() => handlePatientCardPress(patient._id)}
              />
            )}
            ListEmptyComponent={() => (
              <ContainerMessage text='Nenhum paciente encontrado' />
            )}
          />
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  textInput: {
    borderColor: '#666',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  pacientListContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#ddd',
    borderTopLeftRadius: 10,
    borderTopRightRadius:10,
  },
  pacientContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  pacientPhoto: {
    height: 76,
    width: 76,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});

export default PatientSearchScreen;