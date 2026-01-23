import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export function Cart() {
    const { items, isCartOpen, toggleCart, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-white/10 shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/20">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-primary" />
                                <h2 className="text-xl font-bold text-white">Your Cart</h2>
                                <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">
                                    {items.length} items
                                </span>
                            </div>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                                        <ShoppingBag size={40} className="text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-medium text-white mb-2">Your cart is empty</p>
                                        <p className="text-gray-400 text-sm">Looks like you haven't added anything yet.</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            toggleCart();
                                            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors"
                                    >
                                        Start Ordering
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-medium text-white line-clamp-1">{item.name}</h3>
                                                <p className="text-primary text-sm font-bold">Rs. {item.price.toLocaleString()}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-3 bg-black/40 rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm font-bold text-white w-4 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-black/40 space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-gray-400">
                                        <span>Subtotal</span>
                                        <span>Rs. {cartTotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-white/10">
                                        <span>Total</span>
                                        <span className="text-primary">Rs. {cartTotal.toLocaleString()}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        const message = items.map(item =>
                                            `- ${item.name} x ${item.quantity} (Rs. ${item.price.toLocaleString()})`
                                        ).join('\n');
                                        const total = `\n\nTotal: Rs. ${cartTotal.toLocaleString()}`;
                                        const finalMessage = `Hi, I would like to place an order:\n\n${message}${total}`;
                                        const encodedMessage = encodeURIComponent(finalMessage);
                                        window.open(`https://wa.me/94779224653?text=${encodedMessage}`, '_blank');
                                        clearCart();
                                    }}
                                    className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:bg-secondary hover:text-white transition-all active:scale-95 shadow-lg shadow-amber-500/20"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
