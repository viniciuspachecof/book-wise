import { IBook } from '@/interface/IBook';
import { api } from '@/lib/axios';
import { createContext, ReactNode, useState } from 'react';

interface BookWiseContextType {
  displayDetails: boolean;
  onDisplayDetails: (value: boolean, id: string) => void;
  displayRating: boolean;
  onDisplayRating: (value: boolean) => void;
  bookSelected?: IBook;
}

export const BookWiseContext = createContext({} as BookWiseContextType);

interface BookWiseProviderProps {
  children: ReactNode;
}

export function BookWiseContextProvider({ children }: BookWiseProviderProps) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [displayRating, setDisplayRating] = useState(false);
  const [bookSelected, setBookSelected] = useState<IBook>();

  async function onDisplayDetails(value: boolean, id: string) {
    if (value) {
      const responseBook = await api.get(`/book/${id}`);

      setBookSelected(responseBook.data);
    }

    setDisplayDetails(value);
  }

  async function onDisplayRating(value: boolean) {
    setDisplayRating(value);
  }

  return (
    <BookWiseContext.Provider
      value={{ displayDetails, onDisplayDetails, displayRating, onDisplayRating, bookSelected }}
    >
      {children}
    </BookWiseContext.Provider>
  );
}
