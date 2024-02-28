import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import patientsMocks from '../../mocks/patients.json';


function DRCMonitorScreen(): React.JSX.Element {
  return (
    <View style={styles.screenContainer}>

      <View>
        <TextInput style={styles.textInput} placeholder='Buscar Paciente' />
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
            <TouchableOpacity style={styles.pacientContainer}>
              <Image
                style={styles.pacientPhoto}
                source={{uri: patient.picture}}
              />
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={[styles.text, {fontSize: 24, fontWeight: '800'}]}>
                    {patient.name}
                  </Text>
                  <Text style={{fontSize: 12, color: '#0aa'}}>
                    Última consulta: {patient.latestAppointment}
                  </Text>
                </View>


                <Text style={styles.text}>
                  {patient.healthDescription}
                </Text>
                <Text style={styles.text}>
                  Tutor(a): {patient.tutor.name}
                </Text>
              </View>
            </TouchableOpacity>
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

export default DRCMonitorScreen;