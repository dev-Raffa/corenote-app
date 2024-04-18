import Image from 'next/image';
import '../styles.scss';
import { ColorOptions } from '../../offCanvas/colorOptions';

export function ButtonChangeCollor() {
  return (
    <>
      <button className="bt change-color">
        <Image
          src="/paint-bucket.svg"
          alt="icone alterar cor: imagem de um balde de tinta levemente curvado para a direita"
          width={19}
          height={19}
        />
      </button>
      <ColorOptions />
    </>
  );
}
