import './styles.scss';
import { GoSearch } from 'react-icons/go';
import { fontFamily } from '@/app/styles/fonts/inter';

export function InputSearch() {
  return (
    <label htmlFor="search-note" className="search-notes">
      <input
        className={fontFamily.className}
        type="text"
        name="serch-note"
        placeholder="Pesquisar notas"
      />
      <GoSearch />
    </label>
  );
}
