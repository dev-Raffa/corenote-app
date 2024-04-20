'use client';

import Image from 'next/image';
import '../styles.scss';
import { buttonType } from '../type';

type buttonEdit = buttonType & {
  clicked: string;
};

export function ButtonEdit({ clicked, ...args }: buttonEdit) {
  return (
    <button
      className="bt edit"
      //@ts-expect-error
      clicked={clicked}
      {...args}
    >
      <Image
        src="/pencil.svg"
        alt="icone editar: imagem de um lápis levemente curvado para a direita"
        width={19}
        height={19}
      />
    </button>
  );
}
