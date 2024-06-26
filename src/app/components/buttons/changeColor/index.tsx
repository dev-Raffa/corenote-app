import Image from 'next/image';
import '../styles.scss';
import { buttonType } from '../type';

type buttonChangeColor = buttonType & {
  clicked: string;
};

export function ButtonChangeColor({ clicked, ...args }: buttonChangeColor) {
  return (
    <>
      <button
        className="bt change-color"
        //@ts-expect-error Property 'clicked' does not exist on type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
        clicked={`${clicked}`}
        {...args}
      >
        <Image
          src="/paint-bucket.svg"
          alt="icone alterar cor: imagem de um balde de tinta levemente curvado para a direita"
          width={19}
          height={19}
        />
      </button>
    </>
  );
}
