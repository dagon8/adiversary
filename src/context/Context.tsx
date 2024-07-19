import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context state
interface AppContextState {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
}

// Create the context with a default value
const AppContext = createContext<AppContextState | undefined>(undefined);

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ date, setDate, isLogged, setIsLogged }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = (): AppContextState => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
