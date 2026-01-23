import { motion } from 'framer-motion';
import { Film } from 'lucide-react';

const PHOTOS = [
    { id: 1, src: '/images/chicken-fried-rice.png', alt: 'Signature Fried Rice' },
    { id: 2, src: '/images/cheese-kottu.png', alt: 'Cheesy Kottu' },
    { id: 3, src: '/images/devilled-chicken.png', alt: 'Spicy Devilled Chicken' },
    { id: 4, src: '/images/nasi-goreng.png', alt: 'Nasi Goreng Special' },
    { id: 5, src: '/images/seafood-rice.png', alt: 'Seafood Rice' },
    { id: 6, src: '/images/chop-suey.png', alt: 'Mixed Chop Suey' },
];

export function GallerySection() {
    return (
        <section id="gallery" className="pt-32 pb-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-2"
                    >
                        <span className="text-primary">Our</span> Gallery
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg"
                    >
                        A glimpse into our delicious world.
                    </motion.p>
                </div>

                {/* Photos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {PHOTOS.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-medium">{photo.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Video Section */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {/* Video Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-8 text-center group"
                    >
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Film className="text-primary" size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Kitchen Tour Video</h3>
                        <p className="text-gray-400">Watch our chefs in action! (Video Coming Soon)</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
