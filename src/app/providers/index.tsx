import { ReactNode } from 'react';
import { NotesProvider } from './post-its';

export const Providers = ({ children }: { children: ReactNode }) => {
  return <NotesProvider>{children}</NotesProvider>;
};
