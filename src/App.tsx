
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="bg-background min-h-screen">
        <Navbar />
        <Cart />
        <Hero />
        <MenuSection />
        <ContactSection />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
