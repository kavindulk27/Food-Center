
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
