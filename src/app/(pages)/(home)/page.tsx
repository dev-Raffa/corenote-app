'use client';

import './styles.scss';
import { useNotes } from '@/app/providers/post-its/context';
import { BuildPostIts } from './components/postit/build';
import { CreatePostIt } from './components/postit/create';
import { Loader } from '@/app/components/load';

export default function Home() {
  const { notes, filtered, isLoading } = useNotes();

  return (
    <main className="content">
      <section className="section-create">
        <CreatePostIt />
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
