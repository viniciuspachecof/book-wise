import { IBook } from '@/interface/IBook';
import { api } from '@/lib/axios';
import { createContext, ReactNode, useState } from 'react';

interface BookWiseContextType {
  displayDetails: boolean;
  onDisplayDetails: (value: boolean, id: string) => void;
  bookSelected?: IBook;
}

export const BookWiseContext = createContext({} as BookWiseContextType);

interface BookWiseProviderProps {
  children: ReactNode;
}

export function BookWiseContextProvider({ children }: BookWiseProviderProps) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [bookSelected, setBookSelected] = useState<IBook>();

  async function onDisplayDetails(value: boolean, id: string) {
    if (value) {
      const response = await api.get(`/book/${id}`);

      setBookSelected(response.data);
    }

    setDisplayDetails(value);
  }

  return (
    <BookWiseContext.Provider value={{ displayDetails, onDisplayDetails, bookSelected }}>
      {children}
    </BookWiseContext.Provider>
  );
}
