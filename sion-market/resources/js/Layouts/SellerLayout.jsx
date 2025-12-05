import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function SellerLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <>
            {/* NAVBAR */}
            <nav className="w-full bg-white shadow-sm fixed top-0 z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/sion_marketplace_logo.png"
                            alt="Sion Marketplace Logo"
                            className="w-36 h-auto object-contain"
                        />
                    </Link>

                    {/* MENÚ */}
                    <div className="flex items-center gap-6 text-[16px]">
                        
                        <Link
                            href="/seller/dashboard"
                            className="relative font-medium text-gray-700 hover:text-[#1A237E] transition"
                        >
                            Dashboard
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1A237E] transition-all duration-300 hover:w-full"></span>
                        </Link>

                        <Link
                            href="/seller/products"
                            className="relative font-medium text-gray-700 hover:text-[#1A237E] transition"
                        >
                            Agregar Productos
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1A237E] transition-all duration-300 hover:w-full"></span>
                        </Link>

                        {/* LOGOUT */}
                        {auth?.user && (
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="px-4 py-2 rounded-md border text-[#1A237E] border-[#1A237E] hover:bg-[#1A237E] hover:text-white transition font-medium"
                            >
                                Cerrar sesión
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* CONTENIDO */}
            <div className="pt-28 px-6 max-w-7xl mx-auto">
                {children}
            </div>

            {/* FOOTER */}
            <footer className="w-full bg-white border-t mt-16">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Sion Marketplace — Todos los derechos reservados.
                    </p>

                </div>
            </footer>
        </>
    );
}
