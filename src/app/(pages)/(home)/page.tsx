import './styles.scss';

import { PostIt } from './components/postit';
import { MockApi } from '@/api/mock/db/db.mock';

export default function Home() {
  return (
    <main className="content">
      <section className="section-create">
        <PostIt />
      </section>
      <section className="section-favorite">
        <h4>Favoritas</h4>
        <section className="post-its">
          {MockApi.map((note, index) => {
            if (note.isFavorite) {
              return <PostIt key={`note-favorite-${index}`} note={note} />;
            }
          })}
        </section>
      </section>
      <section className="section-others">
        <h4>Outras</h4>
        <section className="post-its">
          {MockApi.map((note, index) => {
            if (!note.isFavorite) {
              return <PostIt key={`note-not-favorite-${index}`} note={note} />;
            }
          })}
        </section>
      </section>
    </main>
  );
}
