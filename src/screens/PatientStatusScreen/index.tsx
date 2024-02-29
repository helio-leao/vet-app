import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { PatientStatusScreenProp } from '../../navigation/GenericStack';
import patientsMocks from '../../mocks/patients.json';


type Patient = {
  id: string;
  name: string;
  latestAppointment: string;
  picture: string;
  healthDescription: string;
  tutor: {
    name: string;
  };
}


function PatientStatusScreen(): React.JSX.Element {
  const route = useRoute<PatientStatusScreenProp>();
  const [patient, setPatient] = useState<Patient>();


  useEffect(() => {
    const { id } = route.params;
    setPatient(patientsMocks.find(patient => patient.id === id));
  }, []);


  return (
    <View style={styles.screenContainer}>
      <Text>{patient?.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default PatientStatusScreen;