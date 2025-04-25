import { AuthContext } from '@/hooks/useAuth';
import { useState } from 'react';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext>
  );
};

export default AuthContext;
