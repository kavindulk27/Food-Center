
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Info */}
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Visit Us</h2>
                        <p className="text-muted mb-8 text-lg">
                            We are conveniently located on Matara Road, Palolpitiya. Come dine with us or order takeaway!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-card text-primary rounded-full border border-white/5">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">Address</h3>
                                    <p className="text-gray-400">Matara Road, Palolpitiya</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-card text-primary rounded-full border border-white/5">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">Call Us</h3>
                                    <a href="tel:0779224653" className="text-gray-400 hover:text-primary transition-colors">077 922 4653</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-card text-green-500 rounded-full border border-white/5">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">WhatsApp</h3>
                                    <a href="https://wa.me/94779224653" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">077 922 4653</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-card text-blue-400 rounded-full border border-white/5">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">Opening Hours</h3>
                                    <p className="text-gray-400">Daily: 10:00 AM - 10:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg relative">
                        <iframe
                            src="https://maps.google.com/maps?q=6.0345639,80.5582404&z=18&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Google Maps"
                            className="w-full h-full border-0"
                        ></iframe>
                        {/* Note: Coordinates are approximate based on "Matara Road, Palolpitiya". User might need exact coords. */}
                    </div>
                </div>
            </div>
        </section>
    );
}
