import { IBook } from '@/interface/IBook';
import { api } from '@/lib/axios';
import { createContext, ReactNode, useState } from 'react';

interface BookWiseContextType {
  displayDetails: boolean;
  onDisplayDetails: (value: boolean, id: string) => void;
  displayAvalation: boolean;
  onDisplayAvalation: (value: boolean) => void;
  bookSelected?: IBook;
}

export const BookWiseContext = createContext({} as BookWiseContextType);

interface BookWiseProviderProps {
  children: ReactNode;
}

export function BookWiseContextProvider({ children }: BookWiseProviderProps) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [displayAvalation, setDisplayAvalation] = useState(false);
  const [bookSelected, setBookSelected] = useState<IBook>();

  async function onDisplayDetails(value: boolean, id: string) {
    if (value) {
      const response = await api.get(`/book/${id}`);

      setBookSelected(response.data);
    }

    setDisplayDetails(value);
  }

  async function onDisplayAvalation(value: boolean) {
    setDisplayAvalation(value);
  }

  return (
    <BookWiseContext.Provider
      value={{ displayDetails, onDisplayDetails, displayAvalation, onDisplayAvalation, bookSelected }}
    >
      {children}
    </BookWiseContext.Provider>
  );
}
