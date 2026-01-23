import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Parallax Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Authentic Sri Lankan cuisine"
                    className="h-full w-full object-cover brightness-[0.6] contrast-[1.1] blur-[2px]"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >


                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-8">
                        <span className="block text-white">Hungry?</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                            Order now!
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                        📞 Hot & delicious food, just a call or click away!
                        <span className="hidden sm:block mt-2 text-white/60 text-base">
                            Fried Rice · Kottu · Devilled Dishes · Short Eats
                        </span>
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a
                            href="#menu"
                            className="group relative flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 hover:-translate-y-1"
                        >
                            Explore Menu
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>

                        <motion.a
                            href="https://wa.me/94779224653"
                            target="_blank"
                            rel="noopener noreferrer"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
                        >
                            <Phone className="w-5 h-5" />
                            Order via WhatsApp
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Overlay Elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
}