import './MainPage.scss';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';

export const MainPage = () => (
  <>
    <header className='container'>
      <Header />
    </header>
    <main>
      <HeroSection />
    </main>
  </>
);