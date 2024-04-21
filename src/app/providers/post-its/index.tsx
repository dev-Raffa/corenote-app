'use client';

import { coreNoteApi } from '@/app/services/corenoteApi';
import { note } from '@/utils/interfaces/note';
import { ReactNode, useEffect, useState } from 'react';
import { PostItsContext } from './context';
import { postIts } from '@/app/types/post-it';

export const PostItsProvider = ({ children }: { children: ReactNode }) => {
  const [postIts, setPostIts] = useState<postIts>({} as postIts);
  const [notes, setNotes] = useState<note[]>([]);

  useEffect(() => {
    async function req() {
      await coreNoteApi.notes.getAll().then((response) => {
        setNotes(response);
      });
    }

    req();
  }, []);

  useEffect(() => {
    console.log('favorites antes de atualizar');
    setPostIts({
      favorites: notes.filter((note) => note.isFavorite === true),
      others: notes.filter((note) => note.isFavorite === false)
    });
  }, [notes]);

  const updatePostIts = (updatedNotes: note[]) => {
    //console.log(updatedNotes)
    setPostIts({
      favorites: updatedNotes.filter((note) => note.isFavorite === true),
      others: updatedNotes.filter((note) => note.isFavorite === false)
    });
    console.log(postIts);
  };

  const atualizar = (anotes: note[]) => {
    console.log('updateNotes');
    console.log(anotes);
    setNotes(anotes);
  };

  const filterByColor = (option: number) => {
    updatePostIts(notes.filter((note) => note.colorOption === option));
  };

  const createNote = (args: Omit<note, 'id'>) => {
    coreNoteApi.notes.save(args).then((response) => {
      updatePostIts(response);
    });
  };

  const updateNote = async (id: number, args: Partial<note>) => {
    const response = await coreNoteApi.notes.edit(id, args);

    const updatedNotes = notes.map((note) =>
      note.id === id ? response : note
    );
    console.log('updateNotes');
    console.log(updatedNotes);

    updatePostIts(updatedNotes);
  };

  const deleteNote = (id: number) => {
    coreNoteApi.notes.delete(id).then((response) => {
      setNotes(response);
    });
  };

  return (
    <PostItsContext.Provider
      value={{ postIts, filterByColor, createNote, updateNote, deleteNote }}
    >
      {children}
    </PostItsContext.Provider>
  );
};
