import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Sion Marketplace" />

            <div className="bg-gray-50 min-h-screen">

                {/* NAVBAR */}
                <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold" style={{ color: "#1A237E" }}>
                            Sion Marketplace
                        </Link>

                        {/* Links */}
                        <div className="flex items-center space-x-6">
                            <Link
                                href="/products"
                                className="text-gray-700 hover:text-[#1A237E] transition"
                            >
                                Productos
                            </Link>

                            <Link
                                href="/categories"
                                className="text-gray-700 hover:text-[#1A237E] transition"
                            >
                                Categorías
                            </Link>

                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-gray-700 hover:text-[#1A237E] transition"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-4 py-2 border rounded-md transition"
                                        style={{
                                            color: "#1A237E",
                                            borderColor: "#1A237E",
                                        }}
                                    >
                                        Iniciar sesión
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="px-4 py-2 rounded-md text-white transition"
                                        style={{
                                            backgroundColor: "#D4AF37",
                                        }}
                                    >
                                        Registrarse
                                    </Link>
                                </>
                            )}
                        </div>

                    </div>
                </nav>

                {/* HERO */}
                <header
                    className="pt-32 pb-20"
                    style={{
                        background: "linear-gradient(to right, #E8EAF6, white)" // azul muy suave
                    }}
                >
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* Texto */}
                        <div>
                            <h1 className="text-5xl font-bold leading-tight" style={{ color: "#1A237E" }}>
                                Encuentra los mejores productos <br />
                                en un solo lugar
                            </h1>

                            <p className="mt-6 text-gray-700 text-lg">
                                Compra fácil, rápido y seguro. Descubre ofertas únicas y artículos
                                de vendedores confiables.
                            </p>

                            <div className="mt-8 flex space-x-4">
                                <Link
                                    href="/products"
                                    className="px-6 py-3 rounded-lg text-white transition"
                                    style={{ backgroundColor: "#1A237E" }}
                                >
                                    Ver productos
                                </Link>

                                <Link
                                    href="/categories"
                                    className="px-6 py-3 border rounded-lg transition"
                                    style={{
                                        borderColor: "#D4AF37",
                                        color: "#D4AF37",
                                    }}
                                >
                                    Explorar categorías
                                </Link>
                            </div>
                        </div>

                        {/* Imagen */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=900&q=80"
                                className="rounded-xl shadow-lg"
                                alt="Marketplace hero"
                            />
                        </div>

                    </div>
                </header>

                {/* CONTENIDO INICIAL */}
                <main className="max-w-7xl mx-auto px-6 py-16 text-center text-gray-500">
                    <p>Aquí podrás agregar productos destacados, categorías y más.</p>
                </main>

            </div>
        </>
    );
}
