import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Patient } from '../types';
import moment from 'moment';


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

  function getAge() {
    const date1 = moment(patient.birthdate);
    const date2 = moment(new Date());
    
    const diffYears = date2.diff(date1, 'years');
    date1.add(diffYears, 'years');
    const diffMonths = date2.diff(date1, 'months');

    let age = '';

    if(diffYears) {
      age = `${diffYears} ano${diffYears > 1 ? 's' : ''}`;
    }
    if(diffMonths) {
      age += `${diffYears > 1 ? ' e ' : ''}${diffMonths} ${diffMonths > 1 ? 'meses' : 'mês'}`;
    }

    return age;
  }

  return(
    <>
      <Image
        style={styles.photo}
        source={{uri: patient.pictureUrl}}
      />

      <View style={{flex: 1}}>

        <Text style={{fontSize: 20, fontWeight: '700', textTransform: 'capitalize', color: '#0aa'}}>
          {patient.name}
        </Text>
        <Text style={{fontSize: 12, color: '#0aa'}}>
          {getAge()}
        </Text>
        <Text style={styles.text}>
          {patient.healthDescription}
        </Text>
        <Text style={[styles.text, {textTransform: 'capitalize'}]}>
          Tutor(a): {patient.tutorName}
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
    fontSize: 14,
    color: '#666',
  },
});

export default PatientCard;