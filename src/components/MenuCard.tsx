import type { MenuItem } from '../data/menu';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface MenuCardProps {
    item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
    const { addToCart } = useCart();
    const [portion, setPortion] = useState<'normal' | 'full'>('full');

    // Helper to get current price
    const currentPrice = portion === 'normal' && item.priceNormal ? item.priceNormal : item.price;

    return (
        <div className="group bg-card rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden border border-white/5 hover:-translate-y-1 h-full flex flex-col">
            <div className="relative h-48 overflow-hidden shrink-0">
                <img
                    src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    {/* Additional quick actions could go here */}
                </div>
                {item.popular && (
                    <span className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                        Popular
                    </span>
                )}
            </div>
            <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-col mb-3">
                    <h3 className="text-xl font-bold text-white line-clamp-1 group-hover:text-primary transition-colors mb-2">{item.name}</h3>

                    {/* Portion Selector */}
                    {item.priceNormal ? (
                        <div className="flex bg-white/5 rounded-lg p-1 mb-3">
                            <button
                                onClick={() => setPortion('normal')}
                                className={`flex-1 py-1 text-sm font-medium rounded-md transition-all ${portion === 'normal'
                                        ? 'bg-primary text-black shadow-sm'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Normal
                            </button>
                            <button
                                onClick={() => setPortion('full')}
                                className={`flex-1 py-1 text-sm font-medium rounded-md transition-all ${portion === 'full'
                                        ? 'bg-primary text-black shadow-sm'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                Full
                            </button>
                        </div>
                    ) : (
                        <div className="h-[2px] w-full bg-white/5 mb-3"></div>
                    )}

                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-gray-400 text-sm">
                            {item.priceNormal ? (portion === 'normal' ? 'Normal Portion' : 'Full Portion') : 'Price'}
                        </span>
                        <span className="text-lg font-bold text-primary">Rs. {currentPrice}</span>
                    </div>

                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.description}</p>
                <button
                    className="w-full bg-white/5 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-black transition-all active:scale-95 mt-auto"
                    onClick={() => {
                        addToCart({
                            id: portion === 'normal' && item.priceNormal ? `${item.id}-normal` : item.id,
                            name: portion === 'normal' && item.priceNormal ? `${item.name} (Normal)` : item.name,
                            price: currentPrice,
                            image: item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
                            category: item.category
                        });
                    }}
                >
                    <ShoppingBag size={18} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
