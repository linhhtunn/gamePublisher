import { Header } from './components/Header';
import { About } from './components/About';
import { Hero } from './components/Hero';
import { Numbers } from './components/Numbers';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
    <main className="min-h-screen
      bg-[radial-gradient(circle_at_center,#6A3FB3_0%,#4A2D8F_40%,#0E1A3A_100%)]">
      <Header/>
      <Hero />
      <Numbers />
      <About/>
      <Portfolio />
      <Contact/>
      <Footer />
    </main>
  );
}

export default App;