/* AdminLayout.jsx */
import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function AdminLayout({ children, notifications }) {
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
                        <Link href="/admin/dashboard" className="text-gray-700 hover:text-[#1A237E]">
                            Dashboard
                        </Link>

                        {auth?.user && (
                            <Link
                                href={route("logout")}
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

                {/* Notificaciones */}
                {notifications?.length > 0 && (
                    <div className="bg-yellow-100 p-4 rounded shadow mt-4">
                        <h3 className="font-semibold mb-2">Notificaciones</h3>
                        <ul className="list-disc list-inside">
                            {notifications.map((note, index) => (
                                <li key={index}>{note}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* FOOTER */}
            <footer className="w-full bg-white border-t mt-16">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Sion Marketplace — Todos los derechos reservados.
                    </p>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/admin/dashboard" className="text-gray-600 hover:text-[#1A237E] text-sm">
                            Dashboard
                        </Link>
                        <Link href="/" className="text-gray-600 hover:text-[#1A237E] text-sm">
                            Inicio
                        </Link>
                        <Link href="/contacto" className="text-gray-600 hover:text-[#1A237E] text-sm">
                            Contacto
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
