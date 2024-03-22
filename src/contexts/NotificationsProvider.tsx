import {API_URL} from '@env';
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Exam } from "../types";
import { Alert } from "react-native";
import axios from 'axios';
import { AuthContext } from './AuthProvider';


type NotificationsContextType = {
  notifications: Exam[];
}

type NotificationsProviderProps = {
  children: ReactNode;
}

const initialNotificationsContext: NotificationsContextType = {
  notifications: [],
};


export const NotificationsContext = createContext<NotificationsContextType>(initialNotificationsContext);


export function NotificationsProvider({children}: NotificationsProviderProps) {
  const {accessToken} = useContext(AuthContext);
  const [notifications, setNotifications] = useState<Exam[]>([]);


  useEffect(() => {
    async function startNotifications() {
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

    if(accessToken) {
      startNotifications();
    }
  }, [accessToken]);


  return (
    <NotificationsContext.Provider
      value={{ notifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}