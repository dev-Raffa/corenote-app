import '../styles.scss';

import { Button } from '@/app/components/buttons';
import { CheckBox } from '@/app/components/checkBox';
import { useNotes } from '@/app/providers/post-its/context';
import { coreNoteApi } from '@/app/services/corenoteApi';
import { useState } from 'react';
import { IStatePostIt } from '../interface';

export const CreatePostIt = () => {
  const { notes, setNotes } = useNotes();
  const [statePostIt, setStatePostIt] = useState<IStatePostIt>({
    isEditing: false,
    buttonClicked: '',
    noteChanges: {
      title: '',
      colorOption: 0,
      isFavorite: false
    }
  });
  const optionsColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const onChangeTitle = (value: string) => {
    setStatePostIt((prev) => ({
      ...prev,
      isEditing: true,
      noteChanges: { ...prev.noteChanges, title: value }
    }));
  };

  const onClickHanlde = () => {
    setStatePostIt((prev) => ({ ...prev, isEditing: true }));
  };

  const onChangeIsFavorite = (value: boolean) => {
    setStatePostIt((prev) => ({
      ...prev,
      isEditing: true,
      noteChanges: { ...prev.noteChanges, isFavorite: value }
    }));
  };

  const btChangeColorOnClickHandler = () => {
    setStatePostIt((prev) => ({
      ...prev,
      isEditing: true,
      buttonClicked: 'change_color'
    }));
  };

  const btOptionColorOnClick = (option: number) => {
    setStatePostIt((prev) => ({
      ...prev,
      isEditing: true,
      noteChanges: { ...prev.noteChanges, colorOption: option }
    }));
  };

  const btSaveOnClick = async () => {
    await coreNoteApi.notes.save(statePostIt.noteChanges).then((response) => {
      setNotes((prev) => ({ ...prev, response }));
      setStatePostIt({
        buttonClicked: '',
        isEditing: false,
        noteChanges: response
      });
    });
  };

  const btCancelOnClick = () => {
    setStatePostIt({
      buttonClicked: '',
      isEditing: false,
      noteChanges: { colorOption: 0, isFavorite: false, title: '', content: '' }
    });
  };

  return (
    <article
      className="post-it"
      onClick={onClickHanlde}
      color={`option${statePostIt.noteChanges.colorOption}`}
    >
      <header>
        <label>
          <input
            type="text"
            placeholder={'Titulo'}
            disabled={statePostIt.isEditing ? false : true}
            value={statePostIt.noteChanges.title}
            onChange={(e) => onChangeTitle(e.currentTarget.value)}
          />
        </label>
        <CheckBox.IsFavorite
          checked={statePostIt.noteChanges.isFavorite}
          onChange={async () =>
            onChangeIsFavorite(
              statePostIt.noteChanges.isFavorite ? false : true
            )
          }
        />
      </header>
      <section>
        <p> Criar nota...</p>
      </section>
      {statePostIt.isEditing && (
        <footer>
          <Button.Save onClick={async () => await btSaveOnClick()} />
          <Button.Change_Color
            onClick={btChangeColorOnClickHandler}
            clicked={
              statePostIt.buttonClicked == 'change_color' ? 'true' : 'false'
            }
          />
          {statePostIt.buttonClicked === 'change_color' && (
            <article className="card-color-options">
              {optionsColor.map((value) => {
                return (
                  <button
                    className={`color-option${value}`}
                    key={`bt-color-option-${value}`}
                    onClick={() => btOptionColorOnClick(value)}
                  />
                );
              })}
            </article>
          )}
          <Button.Cancel onClick={btCancelOnClick} />
        </footer>
      )}
    </article>
  );
};
