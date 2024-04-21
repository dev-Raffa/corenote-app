import { ReactNode } from 'react';
import { PostItsProvider } from './post-its';

export const Providers = ({ children }: { children: ReactNode }) => {
  return <PostItsProvider>{children}</PostItsProvider>;
};
