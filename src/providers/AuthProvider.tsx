import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

import NotFound from '@/pages/404';

import { User } from '@/types/user';
import { ComponentAuth } from '@/types/page';

type TypeAuthContext = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const AuthContext = createContext<TypeAuthContext>({
  user: null,
  setUser: () => {},
});

const AuthProvider: FC<PropsWithChildren<ComponentAuth>> = ({
  children,
  Component: { isOnlyUser },
}) => {
  const [user, setUser] = useState<User>(null);

  if (isOnlyUser && !user) return <NotFound />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
