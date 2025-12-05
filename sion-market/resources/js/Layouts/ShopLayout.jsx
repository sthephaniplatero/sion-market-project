import { Link } from "@inertiajs/react";
import "../../css/welcome.css";

export default function ShopLayout({ children, auth }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* ---------------- NAVBAR ---------------- */}
            <nav className="w-full bg-blue-900 shadow-sm fixed top-0 z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/">
                            <img
                                src="/sion_marketplace_logo.png"
                                alt="Sion Marketplace Logo"
                                className="w-32 mx-auto md:mx-0 hover:scale-105 transition-transform"
                            />
                        </Link>

                    {/* Links */}
                    <div className="flex items-center space-x-6">

                        {auth?.user ? (
                            <Link
                                href={route('dashboard')}
                                className="text-gray-700 hover:text-[#1A237E] font-medium transition"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 border rounded-md font-medium transition hover:bg-gray-50"
                                    style={{ color: "white", borderColor: "white" }}
                                >
                                    Iniciar sesión
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="px-4 py-2 rounded-md text-white font-medium shadow-md hover:opacity-90 transition"
                                    style={{ backgroundColor: "#D4AF37" }}
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* ---------------- CONTENIDO ---------------- */}
            <main className="pt-24 flex-grow">
                {children}
            </main>

            {/* ---------------- FOOTER ---------------- */}
            <footer className="w-full bg-gray-100 border-t border-gray-300 mt-20">
                <div className="max-w-7xl mx-auto px-6 py-12 text-center">

                    <h3 className="text-2xl font-bold text-[#1A237E]">
                        Sion Marketplace
                    </h3>

                    <p className="text-gray-600 mt-2">
                        Compra y conecta directamente con vendedores reales vía WhatsApp.
                    </p>

                    {/* Links */}
                    <div className="flex justify-center gap-8 mt-6 text-gray-700 font-medium">
                        <Link href="/shop" className="hover:text-[#1A237E] transition">
                            Tienda
                        </Link>
                        <Link href="/login" className="hover:text-[#1A237E] transition">
                            Iniciar sesión
                        </Link>
                        <Link href="/register" className="hover:text-[#1A237E] transition">
                            Registrarse
                        </Link>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-center gap-6 mt-6">
                        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition cursor-pointer">
                            🛒
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition cursor-pointer">
                            📱
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition cursor-pointer">
                            ⭐
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm mt-8">
                        © {new Date().getFullYear()} Sion Marketplace — Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}