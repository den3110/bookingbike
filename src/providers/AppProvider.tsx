import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AppContextProps {
  deviceId: string | undefined;
  setDeviceId: Dispatch<SetStateAction<string | undefined>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);

  
  return (
    <AppContext.Provider value={{ deviceId, setDeviceId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
