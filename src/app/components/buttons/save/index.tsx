import '../styles.scss';

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { buttonType } from '../type';

export function ButtonSave(args: buttonType) {
  return (
    <button className="bt save" {...args}>
      <IoIosCheckmarkCircleOutline />
    </button>
  );
}
