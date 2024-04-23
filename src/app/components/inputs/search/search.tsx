'use client';

import './styles.scss';
import { GoSearch } from 'react-icons/go';
import { fontFamily } from '@/app/styles/fonts/inter';
import { useNotes } from '@/app/providers/post-its/context';

export function InputSearch() {
  const { notes, filtered, setFiltered } = useNotes();

  const onChangeHandled = (value: string) => {
    if (!value) {
      setFiltered(undefined);
      return;
    }
    if (filtered) {
      setFiltered(
        (prev) =>
          prev &&
          prev.filter((item) =>
            item.title.toString().toLowerCase().includes(value.toLowerCase())
          )
      );
      return;
    }

    setFiltered(
      notes.filter((item) =>
        item.title.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <label htmlFor="search-note" className="search-notes">
      <input
        className={fontFamily.className}
        type="text"
        name="serch-note"
        placeholder="Pesquisar notas"
        onChange={(e) => onChangeHandled(e.target.value)}
      />
      <GoSearch />
    </label>
  );
}
