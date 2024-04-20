import { VscStarFull } from 'react-icons/vsc';
import './styles.scss';
import { InputHTMLAttributes } from 'react';

type checkBox = React.DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function CheckBoxIsFavorite({ ...args }: checkBox) {
  return (
    <label className="isFavorite">
      <input type="checkbox" {...args} />
      <VscStarFull />
    </label>
  );
}
