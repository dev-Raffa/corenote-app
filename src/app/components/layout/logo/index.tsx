import Image from 'next/image';
import './styles.scss';
import PostIts from '../../../../../public/images/post-its.png';

export function Logo() {
  return (
    <figure className="logo">
      <Image
        src={PostIts}
        alt="Imagem do logo: dois post-its presos por um grampo do tipo pino, de cor vermelho"
      ></Image>

      <figcaption>CoreNotes</figcaption>
    </figure>
  );
}
