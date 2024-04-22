'use client';

import '../styles.scss';
import { useState } from 'react';
import { Button } from '@/app/components/buttons';
import { CheckBox } from '@/app/components/checkBox';
import { type note } from '@/utils/interfaces/note';
import { coreNoteApi } from '@/app/services/corenoteApi';
import { useNotes } from '@/app/providers/post-its/context';
import { IStatePostIt } from '../interface';

export const BuildPostIts = ({ note }: { note: note }) => {
  const { notes, setNotes } = useNotes();
  const optionsColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [statePostIt, setStatePostIt]= useState<IStatePostIt>({
    isEditing: false,
    buttonClicked: '',
    noteChanges: note
  })
  const btChangeColorOnClickHandler = () => {
    if(!statePostIt.isEditing || statePostIt.buttonClicked != 'change_color'){
      setStatePostIt((prev)=>({...prev, isEditing: true, buttonClicked: 'change_color'}))
    }
  };

  const btEditNoteOnClickHandler = () => {
    if(!statePostIt.isEditing || statePostIt.buttonClicked != 'edit'){
      setStatePostIt((prev)=>({...prev, isEditing: true, buttonClicked: 'edit'}))
    }
  };

  const btOptionColorOnClick = (option: number) => {
   setStatePostIt((prev)=>({...prev, noteChanges:{...prev.noteChanges, colorOption: option}}))
  };

  const onChangeTitle = (value: string) => {
    setStatePostIt((prev)=>({...prev, isEditing: true , noteChanges:{...prev.noteChanges, title: value}}))
  };

  const onChangeIsFavorite = (value: boolean) => {
    setStatePostIt((prev)=>({isEditing: true, buttonClicked: '', noteChanges: {...prev.noteChanges, isFavorite: value}}))
  };

  const btSaveOnClick = async()=>{
   const response = await coreNoteApi.notes.edit(note.id,{
        title: statePostIt.noteChanges.title,
        content: statePostIt.noteChanges.content,
        isFavorite: statePostIt.noteChanges.isFavorite,
        colorOption: statePostIt.noteChanges.colorOption
    }).then( (response)=>response)

    notes.push(response)
      setNotes(notes)
      console.log(notes)
      setStatePostIt({
        buttonClicked: '',
        isEditing: false,
        noteChanges: response
      })
  }

  const btCancelOnClick = () =>{
    setStatePostIt({
      buttonClicked: '',
      isEditing: false,
      noteChanges: note
    })
  }

  return (
    <article
      className="post-it build"
      color={`option${statePostIt.noteChanges.colorOption}`}

    >
      <header>
        <label>
          <input
            type="text"
            placeholder={statePostIt.noteChanges.title ? '' : 'Titulo'}
            disabled={statePostIt.isEditing ? false : true}
            value={statePostIt.noteChanges.title}
            onChange={(e)=>onChangeTitle(e.target.value)}
          />
        </label>
        <CheckBox.IsFavorite
          value={String(statePostIt.noteChanges.isFavorite)}
          onChange={() =>
            onChangeIsFavorite(statePostIt.noteChanges.isFavorite? false : true)
          }
        />
      </header>
      <section>
        {statePostIt.noteChanges.content ? (
          statePostIt.noteChanges.content
        ) : (
          <p>Clique ou arraste o arquivo para esta área para fazer upload</p>
        )}
      </section>
      <footer>
        <Button.Edit
          onClick={btEditNoteOnClickHandler}
          clicked={statePostIt.buttonClicked == 'edit' ? 'true' : 'false'}
        />
        <Button.Change_Color
          onClick={btChangeColorOnClickHandler}
          clicked={statePostIt.buttonClicked == 'change_color' ? 'true' : 'false'}
        />
        {statePostIt.buttonClicked === 'change_color' && (
          <article className="card-color-options">
            {optionsColor.map((value) => {
              return (
                <button
                  className={`color-option${value}`}
                  key={`bt-color-option-${value}`}
                  onClick={() =>
                    btOptionColorOnClick(value)
                  }
                />
              );
            })}
          </article>
        )}
        {statePostIt.isEditing ? (
          <>
            <Button.Save onClick={async()=> btSaveOnClick()} />
            <Button.Cancel onClick={btCancelOnClick} />
          </>
        ) : (
          <Button.Close />
        )}
      </footer>
    </article>
  );
};
