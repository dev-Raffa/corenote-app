import { Button } from '@/app/components/buttons';
import { IPostIt } from '@/app/interfaces/postit';

export function PostIt(): React.ReactElement;
export function PostIt(args: IPostIt): React.ReactElement;

export function PostIt(args?: IPostIt) {
  if (args) {
    return (
      <article>
        <header>
          <h3>{args.title}</h3>
          <Button.Close />
        </header>
        <section>{args.content}</section>
        <footer></footer>
      </article>
    );
  }
}
