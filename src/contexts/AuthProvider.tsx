import { ReactNode, createContext, useState } from "react";


type AuthContextType = {
  accessToken: string | null;
  login: (accessToken: string) => void;
  logout: () => void;
}

type AuthProviderProps = {
  children: ReactNode;
}

const initialAuthContext: AuthContextType = {
  accessToken: null,
  login: () => {},
  logout: () => {}
};


export const AuthContext = createContext<AuthContextType>(initialAuthContext);


export function AuthProvider({children}: AuthProviderProps) {
  const [accessToken, setAccessToken] = useState<string|null>(null);

  function login(accessToken: string) {
    setAccessToken(accessToken);
  }

  function logout() {
    setAccessToken(null);
  }

  return (
    <AuthContext.Provider
      value={{ accessToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}