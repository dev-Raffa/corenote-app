'use client';

import { usePostIts } from '@/app/providers/post-its/context';
import './styles.scss';
import { ReactNode } from 'react';

export function ColorOptions({ noteId }: { noteId: number }) {
  const postIts = usePostIts();

  const btChangeColorOnClickHandler = async (
    idNote: number,
    optionColor: number
  ) => {
    await postIts.updateNote(idNote, { colorOption: optionColor });
  };

  const generateButttons = (): ReactNode => {
    const arr = [];
    for (let index = 0; index < 12; index++) {
      arr.push(
        <button
          className={`color-option${index + 1}`}
          key={`bt-color-option-${index + 1}`}
          onClick={async () =>
            await btChangeColorOnClickHandler(noteId, index + 1)
          }
        ></button>
      );
    }

    return arr;
  };
  return <article className="card-color-options">{generateButttons()}</article>;
}
