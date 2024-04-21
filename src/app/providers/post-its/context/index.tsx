import { createContext, use, useContext } from 'react';
import { IPostItsContext } from '../interface';

export const PostItsContext = createContext({} as IPostItsContext);

export const usePostIts = () => use(PostItsContext);
