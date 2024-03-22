import {API_URL} from '@env';
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Notification } from "../types";
import { Alert } from "react-native";
import axios from 'axios';
import { AuthContext } from './AuthProvider';


type NotificationsContextType = {
  notifications: Notification[];
  updateNotifications: () => Promise<void>,
}

type NotificationsProviderProps = {
  children: ReactNode;
}

const initialNotificationsContext: NotificationsContextType = {
  notifications: [],
  updateNotifications: () => Promise.resolve(),
};


export const NotificationsContext = createContext<NotificationsContextType>(initialNotificationsContext);


export function NotificationsProvider({children}: NotificationsProviderProps) {
  const {accessToken} = useContext(AuthContext);
  const [notifications, setNotifications] = useState<Notification[]>([]);


  async function updateNotifications() {
    const url = `${API_URL}/notifications`;

    try {
      const {data} = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      });
      setNotifications(data);
    } catch (error) {
      Alert.alert('Atenção', 'Não foi possível obter as notificações');
    }
  }


  useEffect(() => {
    if(accessToken) {
      updateNotifications();
    }
  }, [accessToken]);


  return (
    <NotificationsContext.Provider
      value={{ notifications, updateNotifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}