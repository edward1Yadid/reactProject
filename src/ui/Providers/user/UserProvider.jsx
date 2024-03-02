import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getTokenFromLockStorage, defindUser } from "../../../core/helpers/userLoggedInLocalStorage";
import { node } from "prop-types";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() =>{ const tokenfomlocak=getTokenFromLockStorage()
if(tokenfomlocak){
    const userFromLS = defindUser();
    setUser(userFromLS);
}
return tokenfomlocak;
  })
  useEffect(() => {
    if (!user) {
        const userFromLS = defindUser();
        setUser(userFromLS);
    }
}, [user])

  const value = useMemo(() => ({ user, setUser, token, setToken }), [user, token]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

UserProvider.propTypes = {
  children: node.isRequired,
};
