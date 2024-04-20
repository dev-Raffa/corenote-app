import './styles.scss';
import { ReactNode } from 'react';

export function ColorOptions(noteId: { noteId: number }) {
  const btChangeColorOnClickHandler = () => {};
  const generateButttons = (): ReactNode => {
    const arr = [];
    for (let index = 0; index < 12; index++) {
      arr.push(
        <button
          className={`color-option${index + 1}`}
          key={`bt-color-option-${index + 1}`}
        ></button>
      );
    }

    return arr;
  };
  return <article className="card-color-options">{generateButttons()}</article>;
}
