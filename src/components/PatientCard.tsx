import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Patient } from '../types';


type PatientCardProps = {
  patient: Patient,
  onPress?: () => void,
}


function PatientCard({patient, onPress}: PatientCardProps): React.JSX.Element {
  if(!onPress) {
    return(
      <View style={styles.cardContainer}>
        <CardContent patient={patient} />
      </View>
    )
  }

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <CardContent patient={patient} />
    </TouchableOpacity>
  );
}

function CardContent({patient}: {patient: Patient}) {
  return(
    <>
      <Image
        style={styles.photo}
        source={{uri: patient.picture}}
      />
      <View style={{flex: 1}}>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>          
          <Text style={[styles.text, {fontSize: 24, fontWeight: '800'}]}>
            {patient.name}
          </Text>
          {/* <Text style={{fontSize: 12, color: '#0aa'}}>
            Última consulta: {patient.latestAppointment}
          </Text> */}
        </View>

        <Text style={styles.text}>
          {patient.healthDescription}
        </Text>
        <Text style={styles.text}>
          Tutor(a): {patient.tutor.name}
        </Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  photo: {
    height: 76,
    width: 76,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});

export default PatientCard;