'use client';

import './styles.scss';
import { useNotes } from '@/app/providers/post-its/context';
import { BuildPostIts } from './components/postit/build';
import { CreatePostIt } from './components/postit/create';

export default function Home() {
  const { notes } = useNotes();

  return (
    <main className="content">
      <section className="section-create">
        <CreatePostIt />
      </section>
      <section className="section-favorite">
        <h4>Favoritas</h4>
        <section className="post-its">
          {notes.map((note) => {
            if (note.isFavorite) {
              return (
                <BuildPostIts key={`post-it-favorite-${note.id}`} note={note} />
              );
            }
          })}
        </section>
      </section>
      <section className="section-others">
        <h4>Outras</h4>
        <section className="post-its">
          {notes.length > 0 &&
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
