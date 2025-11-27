import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Sion Marketplace" />

            <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

                       {/* NAVBAR */}
                       <nav className="w-full fixed top-0 z-50 shadow-md border-b border-gray-200/30 bg-[#1A237E]">
                       <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

                       {/* Logo */}
                        <Link href="/">
                                <img
                                    src="/sion_marketplace_logo.png"
                                    alt="Sion Marketplace Logo"
                                    className="h-20 w-auto object-contain"
                                />
                        </Link>


                        {/* Links */}
                        <div className="flex items-center space-x-6 text-sm font-medium">

                            <Link
                                href={route('shop.index')}
                                className="hover:text-[#1A237E] text-gray-700 transition-colors"
                            >
                                Tienda
                            </Link>

                            <Link
                                href="/categories"
                                className="hover:text-[#1A237E] text-gray-700 transition-colors"
                            >
                                Categorías
                            </Link>

                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="hover:text-[#1A237E] text-gray-700 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-4 py-2 border rounded-md transition shadow-sm hover:shadow-md"
                                        style={{
                                            color: "#1A237E",
                                            borderColor: "#1A237E",
                                        }}
                                    >
                                        Iniciar sesión
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="px-4 py-2 rounded-md text-white transition shadow-sm hover:shadow-md"
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
                    className="pt-40 pb-24 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E] to-[#3949AB] opacity-10"></div>

                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">

                        {/* Texto */}
                        <div className="animate-fade-in">
                            <h1 className="text-6xl font-extrabold leading-tight drop-shadow-sm"
                                style={{ color: "#1A237E" }}
                            >
                                Todo lo que necesitas, <br />
                                en un solo lugar
                            </h1>

                            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                                Descubre productos de calidad, nuevas ofertas y una experiencia
                                de compra rápida y segura.
                            </p>

                            <div className="mt-8 flex space-x-4">

                                <Link
                                    href="/shop"
                                    className="px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-105"
                                    style={{ backgroundColor: "#1A237E" }}
                                >
                                    Ver tienda
                                </Link>

                                <Link
                                    href="/categories"
                                    className="px-6 py-3 border rounded-lg font-semibold shadow-sm hover:shadow-md transition-transform hover:scale-105"
                                    style={{
                                        borderColor: "#D4AF37",
                                        color: "#D4AF37",
                                    }}
                                >
                                    Explorar categorías
                                </Link>

                            </div>
                        </div>

                        {/* Carrusel */}
<div className="flex justify-center animate-slide-up">
    <div className="relative w-full max-w-lg p-2 bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">

        {/* Slides */}
        <div className="carousel relative">
            
            {/* Slide 1 */}
            <div className="carousel-item block">
                <img
                    src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80"
                    className="rounded-xl w-full h-80 object-cover"
                    alt="Slide 1"
                />
            </div>

            {/* Slide 2 */}
            <div className="carousel-item hidden">
                <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
                    className="rounded-xl w-full h-80 object-cover"
                    alt="Slide 2"
                />
            </div>

            {/* Slide 3 */}
            <div className="carousel-item hidden">
                <img
                    src="https://images.unsplash.com/photo-1555529669-9334247a6b2f?auto=format&fit=crop&w=1200&q=80"
                    className="rounded-xl w-full h-80 object-cover"
                    alt="Slide 3"
                />
            </div>

        </div>

        {/* Controles */}
        <button
            onClick={() => slide(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 px-3 py-2 rounded-full shadow"
        >
            ‹
        </button>

        <button
            onClick={() => slide(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 px-3 py-2 rounded-full shadow"
        >
            ›
        </button>

    </div>
</div>

                    </div>
                </header>

                {/* SECCIÓN DESTACADA */}
                <main className="max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        ¿Qué encontrarás aquí?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* Tarjeta 1 */}
                        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition border border-gray-200">
                            <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">
                                Productos destacados
                            </h3>
                            <p className="text-gray-600">
                                Encuentra productos seleccionados especialmente para ti.
                            </p>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition border border-gray-200">
                            <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">
                                Categorías organizadas
                            </h3>
                            <p className="text-gray-600">
                                Explora cientos de artículos según tus intereses.
                            </p>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition border border-gray-200">
                            <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">
                                Compras seguras
                            </h3>
                            <p className="text-gray-600">
                                Tu experiencia está protegida en todo momento.
                            </p>
                        </div>

                    </div>
                </main>

            </div>
        </>
    );
}
