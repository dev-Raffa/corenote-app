'use client';

import { coreNoteApi } from '@/app/services/corenoteApi';
import { note } from '@/utils/interfaces/note';
import { ReactNode, useEffect, useState } from 'react';
import { NotesContext } from './context';

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<note[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filtered, setFiltered] = useState<note[] | undefined>();

  useEffect(() => {
    async function req() {
      await coreNoteApi.notes.getAll().then((response) => {
        setNotes(response);
      });
      setIsLoading(false);
    }

    req();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        isLoading,
        setIsLoading,
        filtered,
        setFiltered
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
