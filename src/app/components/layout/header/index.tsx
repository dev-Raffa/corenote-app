import './styles.scss';
import { InputSearch } from '../../inputs/search/search';
import { Logo } from '../logo';
import { Button } from '../../buttons';

export function Header() {
  return (
    <header className="layout-header">
      <Logo />
      <InputSearch />
      <Button.Close />
    </header>
  );
}
