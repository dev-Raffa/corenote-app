'use client';

import { createContext, useContext } from 'react';
import { INotesContext } from '../interface';

export const NotesContext = createContext({} as INotesContext);

export const useNotes = () => useContext(NotesContext);
