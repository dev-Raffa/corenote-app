import { note } from '@/utils/interfaces/note';
import { Dispatch, SetStateAction } from 'react';

export interface INotesContext {
  notes: note[];
  setNotes: Dispatch<SetStateAction<note[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  filtered?: note[];
  setFiltered: Dispatch<SetStateAction<note[] | undefined>>;
}
