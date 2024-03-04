import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import patientsMocks from '../../mocks/patients.json';
import { Patient } from '../../types';
import PatientCard from '../../components/PatientCard';
import graphPlaceholder from '../../assets/images/graph-placeholder.png';
import { PatientMonitoringScreenProp } from '../../navigation/HomeStack';
import { useRoute } from '@react-navigation/native';


function PatientMonitoringScreen(): React.JSX.Element {
  const route = useRoute<PatientMonitoringScreenProp>();
  const [patient, setPatient] = useState<Patient>();


  useEffect(() => {
    const { id } = route.params;
    setPatient(patientsMocks.find(patient => patient.id === id));
  }, []);


  if(!patient) {
    return (
      <View style={[
        styles.screenContainer,
        {justifyContent: 'center', alignItems: 'center'}
      ]}>
        <Text>Not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <View style={{paddingHorizontal: 10, paddingVertical: 20}}>

          <PatientCard patient={patient} />

          {/* GRAPHS */}
          <View style={{marginTop: 20, gap: 20, paddingHorizontal: 20}}>
            <View style={styles.graphCard}>
              <Text style={[styles.text, {marginBottom: 10}]}>
                Fósforo
              </Text>
              <Image
                source={graphPlaceholder}
                style={{height: 100, aspectRatio: 1, alignSelf: 'center', opacity: 0.3}}
              />
            </View>
            <View style={styles.graphCard}>
              <Text style={[styles.text, {marginBottom: 10}]}>
                Fósforo
              </Text>
              <Image
                source={graphPlaceholder}
                style={{height: 100, aspectRatio: 1, alignSelf: 'center', opacity: 0.3}}
              />
            </View>
          </View>
          {/* END GRAPHS */}

          {/* BUTTONS */}
          <View style={{alignSelf: 'center', marginTop: 10, gap: 10}}>
            <TouchableOpacity style={{backgroundColor: '#0ab', paddingVertical: 20, paddingHorizontal: 40, borderRadius: 6}}>
              <Text style={[styles.text, {color: '#fff', fontWeight: '600', alignSelf: 'center'}]}>
                Anexar Exames
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 2, borderColor: '#0ab', paddingVertical: 20, paddingHorizontal: 40, borderRadius: 8}}>
              <Text style={[styles.text, {color: '#0ab', fontWeight: '600', alignSelf: 'center'}]}>
                Digitar Resultados
              </Text>
            </TouchableOpacity>
          </View>
          {/* END BUTTONS */}

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#999',
  },
  graphCard: {
    paddingHorizontal: 10,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderLeftColor: '#999',
    borderBottomColor: '#999',
    borderRightColor: '#999',
  },
});

export default PatientMonitoringScreen;