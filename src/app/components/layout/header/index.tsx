import './styles.scss';
import { InputSearch } from '../../inputs/texts/variants/search';
import { Logo } from '../logo';
import { Button } from '../../buttons';

export function Header() {
  return (
    <header>
      <Logo />
      <InputSearch />
      <Button.Close />
    </header>
  );
}
