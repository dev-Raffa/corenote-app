'use client';

import './styles.scss';
import { ChangeEvent, useState } from 'react';
import { Button } from '@/app/components/buttons';
import { CheckBox } from '@/app/components/checkBox';
import { type note } from '@/utils/interfaces/note';

export const PostIt = ({ note }: { note?: note }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<string>('');
  const [postItData, setPostData] = useState<Partial<note> | undefined>(note);

  const btChangeColorOnClickHandler = () => {
    setButtonClicked('change_color');
    !isEditing && setIsEditing(true);
  };

  const btEditNoteOnClickHandler = () => {
    !isEditing && setIsEditing(true);
    setButtonClicked('edit');
  };

  const onSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeTitle = (value: string) => {
    setPostData((prevData) => ({ ...prevData, title: value }));
    !isEditing && setIsEditing(true);
  };

  const onChangeIsFavorite = (e: ChangeEvent<HTMLInputElement>) => {
    setPostData((prevData) => ({ ...prevData, isFavorite: e.target.checked }));
    setButtonClicked('');
    !isEditing && setIsEditing(true);
  };

  return (
    <form
      onSubmit={onSubmitHandle}
      className="post-it"
      id={postItData ? `post-it-${postItData.id}` : undefined}
      color={postItData ? `option${postItData.colorOption}` : 'option0'}
    >
      <header>
        <label>
          <input
            type="text"
            placeholder={postItData?.title ? '' : 'Titulo'}
            disabled={postItData?.title ? (!isEditing ? true : false) : false}
            value={postItData?.title || ''}
            onChange={(e) => onChangeTitle(e.currentTarget.value)}
          />
        </label>
        <CheckBox.IsFavorite
          checked={postItData?.isFavorite || false}
          onChange={onChangeIsFavorite}
        />
      </header>
      {postItData || isEditing ? (
        <>
          <section>
            {postItData?.content ? (
              postItData.content
            ) : (
              <p>
                Clique ou arraste o arquivo para esta área para fazer upload
              </p>
            )}
          </section>
          <footer>
            <Button.Edit
              id={`button-edit-postit-${postItData?.id}`}
              onClick={btEditNoteOnClickHandler}
              itemType="button"
              clicked={buttonClicked == 'edit' ? 'true' : 'false'}
            />
            <Button.Change_Color
              id={`button-change-color-postit-${postItData?.id}`}
              itemType="button"
              onClick={btChangeColorOnClickHandler}
              clicked={buttonClicked == 'change_color' ? 'true' : 'false'}
              noteId={note ? note.id : 0}
            />
            {isEditing ? (
              <>
                <Button.Save itemType="button" />
                <Button.Cancel itemType="button" />
              </>
            ) : (
              <Button.Close
                itemType="button"
                id={`button-exclud-postit-${postItData?.id}`}
              />
            )}
          </footer>
        </>
      ) : (
        <section>
          <p> Criar nota...</p>
        </section>
      )}
    </form>
  );
};
