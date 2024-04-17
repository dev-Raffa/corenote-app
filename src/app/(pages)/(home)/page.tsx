import { SectionCreate } from './components/sections/create';
import { SectionFavorite } from './components/sections/favorites';
import { SectionOthers } from './components/sections/others';

export default function Home() {
  return (
    <main>
      <SectionCreate />
      <SectionFavorite />
      <SectionOthers />
    </main>
  );
}
