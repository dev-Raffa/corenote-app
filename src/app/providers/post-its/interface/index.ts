import { postIts } from '@/app/types/post-it';
import { note } from '@/utils/interfaces/note';

export interface IPostItsContext {
  postIts: postIts;
  filterByColor: (option: number) => void;
  createNote: (args: Omit<note, 'id'>) => void;
  updateNote: (id: number, args: Partial<note>) => Promise<void>;
  deleteNote: (id: number) => void;
}
