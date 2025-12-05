import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "../../css/welcome.css";

export default function Welcome({ auth }) {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        "/imagen1.png",
        "/imagen2.png",
        "/imagen3.png",
    ];

    // Carrusel automático cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const slide = (dir) => {
        setActiveSlide((prev) => (prev + dir + slides.length) % slides.length);
    };

    return (
        <>
            <Head title="Sion Marketplace" />

            <div className="page-bg">

                {/* NAVBAR */}
                <nav className="navbar">
                    <div className="navbar-content">

                        <Link href="/">
                            <img
                                src="/sion_marketplace_logo.png"
                                alt="Sion Marketplace Logo"
                                className="logo"
                            />
                        </Link>

                        <div className="nav-links">
                            <Link href={route("shop.index")} className="nav-link">
                                Tienda
                            </Link>

                            {auth?.user ? (
                                <Link href={route("dashboard")} className="nav-link">
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={route("login")} className="btn-outline">
                                        Iniciar sesión
                                    </Link>

                                    <Link href={route("register")} className="btn-gold">
                                        Registrarse
                                    </Link>
                                </>
                            )}
                        </div>

                    </div>
                </nav>

                {/* HERO */}
                <header className="hero">
                    <div className="hero-grid">

                        {/* Texto */}
                        <div>
                            <h1 className="hero-title">
                                Conecta y compra <br /> de forma más rápida por WhatsApp.
                            </h1>

                            <p className="hero-text">
                                Explora productos y servicios de vendedores reales y conéctate
                                al instante vía WhatsApp para una experiencia rápida, directa y moderna.
                            </p>

                            <div className="hero-buttons">
                                <Link href="/shop" className="btn-blue">
                                    Visitar tienda
                                </Link>
                            </div>
                        </div>

                        {/* Carrusel */}
                        <div className="carousel-container">
                            <div className="carousel">
                                <img
                                    src={slides[activeSlide]}
                                    className="carousel-img"
                                    alt="Slide actual"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* SECCIÓN INFO */}
                <section className="w-full py-16 bg-white/90 backdrop-blur border-t border-gray-200 mt-10">
                    <div className="max-w-7xl mx-auto px-6 text-center">

                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            ¿Qué es Sion Marketplace?
                        </h2>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                            Sion Marketplace es una plataforma creada para conectar a compradores
                            con vendedores y proveedores de servicios de manera directa y sin
                            intermediarios. Explora productos, contacta por WhatsApp y coordina
                            compras o servicios de forma rápida y segura.
                        </p>

                        {/* BENEFICIOS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="WhatsApp"
                                />
                                <h3 className="benefit-title">Contacto directo por WhatsApp</h3>
                                <p className="benefit-text">
                                    Atención inmediata y personalizada sin complicaciones.
                                </p>
                            </div>

                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Sin intermediarios"
                                />
                                <h3 className="benefit-title">Sin intermediarios</h3>
                                <p className="benefit-text">
                                    Comunícate directamente con el vendedor sin comisiones extra.
                                </p>
                            </div>

                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Seguridad"
                                />
                                <h3 className="benefit-title">Rápido y seguro</h3>
                                <p className="benefit-text">
                                    Coordina precios, disponibilidad y entregas con confianza.
                                </p>
                            </div>

                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Categorías"
                                />
                                <h3 className="benefit-title">Variedad de categorías</h3>
                                <p className="benefit-text">
                                    Servicios, accesorios, tecnología, moda y mucho más.
                                </p>
                            </div>

                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Entregas"
                                />
                                <h3 className="benefit-title">Entregas rápidas</h3>
                                <p className="benefit-text">
                                    Coordina envíos o puntos de entrega directamente.
                                </p>
                            </div>

                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1670/1670611.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Confianza"
                                />
                                <h3 className="benefit-title">Confianza y transparencia</h3>
                                <p className="benefit-text">
                                    Comunicación clara y directa para compras seguras.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================================= */}
                {/*             FOOTER               */}
                {/* ================================= */}
                <footer className="w-full bg-gray-50 dark:bg-gray-900 mt-20 border-t border-gray-300 dark:border-gray-700 relative overflow-hidden">
            
                {/* Línea decorativa superior */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800  to-yellow-600"></div>
            
                <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            
                    {/*  - Logo + descripción */}
                    <div className="text-center md:text-left">
                        <Link href="/">
                            <img
                                src="/sion_marketplace_logo.png"
                                alt="Sion Marketplace Logo"
                                className="w-32 mx-auto md:mx-0 hover:scale-105 transition-transform"
                            />
                        </Link>
            
                        <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                            Marketplace moderno que conecta compradores con vendedores reales.
                            Compra rápido por WhatsApp y accede a productos verificados.
                        </p>
                    </div>
            
                    {/* - Navegación */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            Navegación
                        </h4>
            
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/shop"
                                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition"
                                >
                                    Tienda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/login"
                                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition"
                                >
                                    Iniciar sesión
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/register"
                                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition"
                                >
                                    Registrarse
                                </Link>
                            </li>
                        </ul>
                    </div>
            
                    {/* Redes Sociales */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            Síguenos
                        </h4>
            
                        <div className="flex justify-center md:justify-start gap-6">
                            
                            {/* Facebook */}
                            <a href="#" className="hover:scale-110 transition-transform">
                                <svg
                                    className="h-7 w-7 text-gray-600 dark:text-gray-300 hover:text-indigo-600"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12"/>
                                </svg>
                            </a>
            
                            {/* Instagram */}
                            <a href="#" className="hover:scale-110 transition-transform">
                                <svg
                                    className="h-7 w-7 text-gray-600 dark:text-gray-300 hover:text-pink-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zM17 6.3a1.3 1.3 0 1 0 1.3 1.3A1.3 1.3 0 0 0 17 6.3z"/>
                                </svg>
                            </a>
            
                            {/* WhatsApp */}
                            <a href="#" className="hover:scale-110 transition-transform">
                                <svg
                                    className="h-7 w-7 text-gray-600 dark:text-gray-300 hover:text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2a9.9 9.9 0 0 0-8.5 15.3L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20z"/>
                                    <path d="M17 14.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.1-.3.2-.6.1s-1.2-.4-2.3-1.4c-.8-.7-1.4-1.6-1.6-1.9s0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5s0-.3 0-.5 0-.5-.1-.7-.7-1.7-1-2.3-.6-.5-.8-.5h-.7c-.2 0-.5.1-.7.3s-.9.9-.9 2.2 1 2.6 1.1 2.8c.2.3 2 3.1 5 4.3.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4s.2-1.3.1-1.4-.2-.1-.4-.2z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
            
                </div>
            
                {/* COPYRIGHT */}
                <div className="text-center py-6 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500 dark:text-gray-400 text-sm tracking-wide">
                        © {new Date().getFullYear()} Sion Marketplace — Todos los derechos reservados.
                    </p>
                </div>
            </footer>
            
            
        </div>
        </>
    );
}
            