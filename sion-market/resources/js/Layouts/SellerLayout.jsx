import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function SellerLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <>
            {/* NAVBAR */}
            <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold" style={{ color: "#1A237E" }}>
                        Sion Marketplace
                    </Link>

                    <div className="flex items-center space-x-6">
                        <Link
                            href="/seller/dashboard"
                            className="text-gray-700 hover:text-[#1A237E]"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/seller/products"
                            className="text-gray-700 hover:text-[#1A237E]"
                        >
                            Administracion de Productos
                        </Link>

                        {auth?.user && (
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="px-4 py-2 border rounded-md"
                                style={{ color: "#1A237E", borderColor: "#1A237E" }}
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
        </>
    );
}
