

export function Footer() {
    return (
        <footer className="bg-black text-white py-8 border-t border-white/10">
            <div className="container mx-auto px-4 text-center flex flex-col items-center">
                <img src="/Untitled design (4).png" alt="Logo" className="h-20 w-20 rounded-full border-2 border-primary mb-6 shadow-lg shadow-primary/20" />
                <h3 className="text-3xl font-bold mb-4 text-primary">Kumanayaka Food Center</h3>
                <p className="text-muted mb-6">Delicious food, warm service.</p>

                <div className="border-t border-white/10 pt-6">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Kumanayaka Food Center. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
