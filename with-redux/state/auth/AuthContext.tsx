import { createContext, useState } from 'react'

interface AuthContextProps {
  authenticated: boolean
  logIn: () => void
  logOut: () => void
}

const defaultValue: AuthContextProps = {
  authenticated: false,
  logIn: () => undefined,
  logOut: () => undefined,
}

interface AuthProviderProps {
  children?: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>(defaultValue)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(defaultValue.authenticated)
  const logIn = () => setAuthenticated(true)
  const logOut = () => setAuthenticated(false)

  return (
    <AuthContext.Provider value={{ authenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
