import '../styles.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { buttonType } from '../type';

export function ButtonClosed({ ...args }: buttonType) {
  return (
    <button className="bt closed" {...args}>
      <AiOutlineClose />
    </button>
  );
}
