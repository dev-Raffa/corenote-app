import Image from 'next/image';
import '../styles.scss';

export function ButtonEdit() {
  return (
    <button className="bt edit">
      <Image
        src="/pencil.svg"
        alt="icone editar: imagem de um lápis levemente curvado para a direita"
        width={19}
        height={19}
      />
    </button>
  );
}
