import { useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';
import { MenuCard } from './MenuCard';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number] | 'All'>('All');

    const filteredItems = activeCategory === 'All'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Our Delicious Menu</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Explore our wide range of authentic dishes, freshly prepared to satisfy your cravings.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    <button
                        onClick={() => setActiveCategory('All')}
                        className={clsx(
                            "px-6 py-2 rounded-full font-medium transition-all duration-300",
                            activeCategory === 'All'
                                ? "bg-primary text-black font-bold shadow-lg shadow-amber-500/20 scale-105"
                                : "bg-card text-gray-400 hover:bg-white/10 hover:text-white"
                        )}
                    >
                        All
                    </button>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={clsx(
                                "px-6 py-2 rounded-full font-medium transition-all duration-300",
                                activeCategory === cat
                                    ? "bg-primary text-black font-bold shadow-lg shadow-amber-500/20 scale-105"
                                    : "bg-card text-gray-400 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MenuCard item={item} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-muted">
                        No items found in this category yet.
                    </div>
                )}
            </div>
        </section>
    );
}
