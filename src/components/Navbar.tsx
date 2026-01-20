import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Menu', href: '#menu' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={twMerge(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-black/80 backdrop-blur-md shadow-md py-3 border-b border-white/10'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <img
                        src="/logo.jpg"
                        alt="Kumanayaka Logo"
                        className="h-12 w-12 rounded-full border-2 border-primary group-hover:scale-105 transition-transform"
                    />
                    <span className={clsx("text-2xl font-bold", "text-primary")}>Kumanayaka Food Center</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "font-medium transition-colors hover:text-primary",
                                isScrolled ? "text-gray-200" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:0779224653"
                        className="flex items-center gap-2 bg-primary text-black px-5 py-2.5 rounded-full font-bold hover:bg-secondary hover:text-white transition-all active:scale-95 shadow-lg shadow-amber-500/20"
                    >
                        <Phone size={18} />
                        <span>077 922 4653</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-white"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-xl border-t border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-200 font-medium py-2 px-4 rounded-md hover:bg-white/5 hover:text-primary"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:0779224653"
                        className="flex items-center justify-center gap-2 bg-primary text-black px-5 py-3 rounded-xl font-bold active:bg-secondary"
                    >
                        <Phone size={20} />
                        <span>Call Now</span>
                    </a>
                </div>
            )}
        </nav>
    );
}
