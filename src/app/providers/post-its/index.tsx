'use client';

import { coreNoteApi } from '@/app/services/corenoteApi';
import { note } from '@/utils/interfaces/note';
import { ReactNode, useEffect, useState } from 'react';
import { NotesContext } from './context';

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<note[]>([]);

  useEffect(() => {
    async function req() {
      await coreNoteApi.notes.getAll().then((response) => {
        setNotes(response);
      });
    }

    req();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
