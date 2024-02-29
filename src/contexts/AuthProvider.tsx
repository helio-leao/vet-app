import { ReactNode, createContext, useState } from "react";


type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

type User = {
  id: string;
  email: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

const initialAuthContext: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {}
};


export const AuthContext = createContext<AuthContextType>(initialAuthContext);


export function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User|null>(null);

  function login(userData: User) {
    setUser(userData);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}