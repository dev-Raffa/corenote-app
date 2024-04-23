'use client';

import './styles.scss';
import { useNotes } from '@/app/providers/post-its/context';
import { BuildPostIts } from './components/postit/build';
import { CreatePostIt } from './components/postit/create';
import { Loader } from '@/app/components/load';
import { useState } from 'react';

export default function Home() {
  const { notes, filtered, isLoading, setFiltered } = useNotes();
  const colorOption = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const onChangeColorOption = (value: number) => {
    if (value < 1 && filtered) {
      setFiltered(undefined);
      return;
    }
    setFiltered(notes.filter((note) => note.colorOption === value));
  };

  return (
    <main className="content">
      <section className="section-create">
        <CreatePostIt />
      </section>
      <section className="section-filters">
        <button
          className="filter-color"
          onClick={() => setShowFilters(!showFilters)}
        ></button>
        <article className={`card-filter-color ${showFilters ? 'show' : ''}`}>
          {colorOption.map((option) => {
            return (
              <button
                className={`color-option-${option}`}
                key={`select-color-option-${option}`}
                onClick={() => onChangeColorOption(option)}
              ></button>
            );
          })}
        </article>
      </section>
      <section className="section-favorite">
        <h4>Favoritas</h4>
        <section className="loading">
          {isLoading && (
            <>
              <Loader />
              <Loader />
              <Loader />
            </>
          )}
        </section>
        <section className="post-its">
          {filtered
            ? filtered.map((note) => {
                if (note.isFavorite) {
                  return (
                    <BuildPostIts
                      key={`post-it-favorite-${note.id}`}
                      note={note}
                    />
                  );
                }
              })
            : notes.length > 0 &&
              notes.map((note) => {
                if (note.isFavorite) {
                  return (
                    <BuildPostIts
                      key={`post-it-favorite-${note.id}`}
                      note={note}
                    />
                  );
                }
              })}
        </section>
      </section>
      <section className="section-others">
        <h4>Outras</h4>
        <section className="loading">
          {isLoading && (
            <>
              <Loader />
              <Loader />
              <Loader />
            </>
          )}
        </section>
        <section className="post-its">
          {filtered
            ? filtered.map((note) => {
                if (!note.isFavorite) {
                  return (
                    <BuildPostIts
                      key={`post-it-favorite-${note.id}`}
                      note={note}
                    />
                  );
                }
              })
            : notes.length > 0 &&
              notes.map((note) => {
                if (!note.isFavorite) {
                  return (
                    <BuildPostIts
                      key={`postIt-not-favorite-${note.id}`}
                      note={note}
                    />
                  );
                }
              })}
        </section>
      </section>
    </main>
  );
}
