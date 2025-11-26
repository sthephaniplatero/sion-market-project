import { Link } from "@inertiajs/react";

export default function DashboardLayout({ children, title }) {
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* SIDEBAR */}
            <aside className="w-64 bg-[#0A3D62] text-white p-6 space-y-6">
                <h1 className="text-2xl font-bold tracking-wide">
                    Sion Market
                </h1>

                <nav className="space-y-3">
                    <Link
                        href="/dashboard"
                        className="block px-3 py-2 rounded hover:bg-[#052235]"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/profile"
                        className="block px-3 py-2 rounded hover:bg-[#052235]"
                    >
                        Perfil
                    </Link>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="block w-full text-left px-3 py-2 rounded hover:bg-[#052235]"
                    >
                        Cerrar Sesión
                    </Link>
                </nav>
            </aside>

            {/* CONTENIDO */}
            <main className="flex-1 p-10">
                <h2 className="text-3xl font-semibold text-[#0A3D62] mb-6">
                    {title}
                </h2>

                <div className="bg-white p-6 rounded-xl shadow-md border border-[#0A3D62]/20">
                    {children}
                </div>
            </main>
        </div>
    );
}
