import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import patientsMocks from '../../mocks/patients.json';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '../../navigation/HomeStack';
import PatientCard from '../../components/PatientCard';


function PatientSearchScreen(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp>();


  function handlePatientCardPress(id: string) {
    navigation.navigate('CreateProgramScreen', { id });
  }


  return (
    <View style={styles.screenContainer}>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder='Buscar Paciente'
          placeholderTextColor={'#666'}
        />
        <TouchableOpacity style={{position: 'absolute', top: 8, right: 8}}>
          <FontAwesome
            name="search"
            size={24}
            color='#0aa'
          />
        </TouchableOpacity>
      </View>


      <View style={styles.pacientListContainer}>
        <FlatList
          contentContainerStyle={{padding: 10, gap: 10}}
          data={patientsMocks}
          renderItem={({item: patient}) => (
            <PatientCard
              patient={patient}
              onPress={() => handlePatientCardPress(patient.id)}
            />
          )}
        />        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
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
    marginTop: 130,
    flex: 1,
    backgroundColor: '#ddd',
    borderRadius: 10,
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