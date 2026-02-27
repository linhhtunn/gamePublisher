import { Header } from './components/Header';
import { About } from './components/About';
import { Hero } from './components/Hero';
import { Numbers } from './components/Numbers';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DevelopersSection } from './components/DevelopersSection';
import { InvestorsSection } from './components/InvestorsSection';
import { PlayersSection } from './components/PlayersSection';
import { StarBackground } from './components/StarBackground';
function App() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* 1. Lớp nền lấp lánh cố định */}
      <StarBackground />

      {/* 2. Nội dung các Section */}
      <div className="relative z-10">
        <Header/>
        <Hero />
        <About/>
        <InvestorsSection/>
        <DevelopersSection/>
        <PlayersSection/>
        <Numbers />
        <Portfolio />
        <Contact/>
        <Footer />
      </div>
    </main>
  );
}

export default App;