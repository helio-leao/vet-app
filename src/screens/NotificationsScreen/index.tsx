import {API_URL} from '@env';
import { useContext, useEffect, useState } from "react";
import { Alert, Image, StyleSheet, View, Text, FlatList } from "react-native"
import { AuthContext } from "../../contexts/AuthProvider";
import axios from 'axios';
import ContainerMessage from '../../components/ContainerMessage';
import moment from 'moment';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NotificationsContext } from '../../contexts/NotificationsProvider';
import { Notification } from '../../types';
import ContainerLoadingIndicator from '../../components/ContainerLoadingIndicator';
import exclamationIcon from '../../assets/icons/exclamation.png';


function NotificationsScreen() {
  const {accessToken} = useContext(AuthContext);
  const {notifications, updateNotifications} = useContext(NotificationsContext);
  const [initialNotifications, setInitialNotifications] = useState<Notification[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setInitialNotifications(notifications);
  }, []);

  useEffect(() => {
    async function markNotificationsAsRead() {
      const url = `${API_URL}/notifications/update-many-notification-status`
      const headers = {
        'Authorization': `Bearer ${accessToken}`
      }

      const unreadNotificationsIds = notifications
        .filter(notification => notification.status === 'UNREAD')
        .map(notification => notification._id);

      if(unreadNotificationsIds.length > 0) {
        try {
          await axios.put(url, { ids: unreadNotificationsIds }, { headers });
          await updateNotifications();
        } catch {
          Alert.alert('Atenção', 'Ocorreu um erro inesperado');
        }
      }
    }
    if(initialNotifications) {
      setIsLoading(false);
      markNotificationsAsRead();
    }
  }, [initialNotifications]);


  if(isLoading) {
    return (
      <ContainerLoadingIndicator />
    );
  }

  if(!initialNotifications || initialNotifications.length === 0) {
    return (
      <ContainerMessage text='Não há notificações' />
    );
  }

  return(
    <View style={styles.screenContainer}>

      <FlatList
        contentContainerStyle={{gap: 10, padding: 16}}
        data={initialNotifications}
        renderItem={({item: notification}) => (
          <View style={styles.cardContainer}>

            <Image
              style={styles.photo}
              source={{uri: notification.exam.patient.pictureUrl}}
            />

            <View style={{flex: 1}}>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: '700', textTransform: 'capitalize', color: '#0aa'}}>
                  {notification.exam.patient.name}
                </Text>
                <Text style={{fontSize: 12, color: '#666'}}>
                  {moment(notification.exam.date).utc().format('DD.MM.YYYY')}
                </Text>
              </View>

              <Text style={styles.text}>
                {notification.exam.patient.healthDescription}
              </Text>

              <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image
                  source={exclamationIcon}
                  style={{height: 22, width: 22, tintColor: notification.status === 'READ' ? '#666' : 'red'}}
                />
                {/* <FontAwesome name="exclamation-circle" size={24} color={notification.status === 'READ' ? '#666' : 'red'} /> */}
                <Text style={[styles.text, {flex: 1}]}>
                  {notification.message}
                </Text>
              </View>
              
            </View>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  photo: {
    height: 66,
    width: 66,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificationsScreen;