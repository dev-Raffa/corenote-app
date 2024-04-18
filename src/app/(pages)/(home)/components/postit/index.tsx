import './styles.scss';
import { Button } from '@/app/components/buttons';
import { CheckBox } from '@/app/components/checkBox';
import { type postIt } from '@/utils/interfaces/postit';

export const PostIt = ({ note }: { note?: postIt }) => {
  if (!note) {
    return (
      <article className="post-it">
        <header>
          <h3>Título</h3>
          <CheckBox.IsFavorite value={false} />
        </header>
        <section>
          <p> Criar nota...</p>
        </section>
      </article>
    );
  } else {
    return (
      <article
        className="post-it"
        id={`${note.id}`}
        color={`option${note.colorOption}`}
      >
        <header>
          <h3>{note.title}</h3>
          <CheckBox.IsFavorite value={note.isFavorite} />
        </header>
        <section>
          <p>{note.content}</p>
        </section>
        <footer>
          <Button.Edit />
          <Button.Change_Color />
          <Button.Close />
        </footer>
      </article>
    );
  }
};
