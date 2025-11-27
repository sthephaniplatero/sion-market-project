import { Link } from "@inertiajs/react";

export default function ShopLayout({ children, auth }) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-[#1A237E]">
                        Sion Marketplace
                    </Link>

                    {/* Links */}
                    <div className="flex items-center space-x-6">
                        <Link href="/shop" className="text-gray-700 hover:text-[#1A237E] transition">
                            Tienda
                        </Link>

                        <Link href="/categories" className="text-gray-700 hover:text-[#1A237E] transition">
                            Categorías
                        </Link>

                        {auth?.user ? (
                            <Link href={route('dashboard')} className="text-gray-700 hover:text-[#1A237E] transition">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 border rounded-md transition"
                                    style={{ color: "#1A237E", borderColor: "#1A237E" }}
                                >
                                    Iniciar sesión
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="px-4 py-2 rounded-md text-white transition"
                                    style={{ backgroundColor: "#D4AF37" }}
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Contenido */}
            <main className="pt-24">{children}</main>
        </div>
    );
}
