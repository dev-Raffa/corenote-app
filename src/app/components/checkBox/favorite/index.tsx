import { VscStarFull } from 'react-icons/vsc';
import './styles.scss';

export function CheckBoxIsFavorite({ value }: { value: boolean }) {
  return (
    <label htmlFor="favorite" className="isFavorite">
      <input type="checkbox" name="favorite" value={`${value}`}></input>
      <VscStarFull />
    </label>
  );
}
