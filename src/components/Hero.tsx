import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/75" />
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Authentic Sri Lankan cuisine"
                    className="h-full w-full object-cover brightness-[0.65] contrast-[1.05]"
                    loading="eager"
                    fetchPriority="high"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 md:mb-8 drop-shadow-2xl">
                        Freshly cooked,served with
                        <br className="sm:hidden" />
                        <span className="text-amber-400 inline-block mt-1 md:mt-3">_Love</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        Experience the soul of Sri Lanka through every bite
                        <br className="hidden sm:inline" />
                        <span className="text-amber-300/90 font-medium">
                            Fried Rice · Kottu · Devilled Dishes · and more
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-7">
                        <a
                            href="#menu"
                            className="group relative inline-flex items-center gap-3 bg-amber-500 text-black px-9 py-5 rounded-full font-semibold text-lg shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Explore Our Menu
                            <ArrowRight
                                size={22}
                                className="transition-transform duration-300 group-hover:translate-x-1.5"
                            />
                        </a>

                        <a
                            href="https://wa.me/94779224653"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-9 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30 active:scale-95"
                        >
                            Order via WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Optional subtle scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
                <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}