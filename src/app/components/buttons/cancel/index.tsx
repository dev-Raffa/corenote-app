import '../styles.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { buttonType } from '../type';

export function ButtonCancel({ ...args }: buttonType) {
  return (
    <button className="bt cancel" {...args}>
      <AiOutlineClose />
    </button>
  );
}
