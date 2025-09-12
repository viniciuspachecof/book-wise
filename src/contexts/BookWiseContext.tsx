import { createContext, ReactNode, useState } from 'react';

interface BookWiseContextType {
  displayDetails: boolean;
  onDisplayDetails: (value: boolean) => void;
}

export const BookWiseContext = createContext({} as BookWiseContextType);

interface BookWiseProviderProps {
  children: ReactNode;
}

export function BookWiseContextProvider({ children }: BookWiseProviderProps) {
  const [displayDetails, setDisplayDetails] = useState(false);

  function onDisplayDetails(value: boolean) {
    setDisplayDetails(value);
  }

  return <BookWiseContext.Provider value={{ displayDetails, onDisplayDetails }}>{children}</BookWiseContext.Provider>;
}
