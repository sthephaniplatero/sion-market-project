import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "../../css/welcome.css";

export default function Welcome({ auth }) {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555529669-9334247a6b2f?auto=format&fit=crop&w=1200&q=80",
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

                            <Link href="/categories" className="nav-link">
                                Servicios
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
                                Conecta  y compra <br />  de forma mas rapida por WhatsApp.
                            </h1>

                            <p className="hero-text">
                                Explora productos y servicios de vendedores reales y conéctate
                                al instante vía WhatsApp para una experiencia rápida, directa y moderna.
                            </p>

                            <div className="hero-buttons">
                                <Link href="/shop" className="btn-blue">
                                    Visitar tienda
                                </Link>

                                <Link href="/servicios" className="btn-outline-gold">
                                    Explorar servicios
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

                                <button className="carousel-btn left" onClick={() => slide(-1)}>
                                    ‹
                                </button>

                                <button className="carousel-btn right" onClick={() => slide(1)}>
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* NUEVA SECCIÓN: INFO SOBRE EL MARKETPLACE */}
                <section className="w-full py-16 bg-white/90 backdrop-blur border-t border-gray-200 mt-10">
                    <div className="max-w-7xl mx-auto px-6 text-center">

                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            ¿Qué es Sion Marketplace?
                        </h2>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                            Sion Marketplace es una plataforma creada para conectar a compradores
                            con vendedores y proveedores de servicios de manera directa y sin
                            intermediarios. Aquí puedes explorar productos, contactar por WhatsApp
                            y coordinar compras o servicios de forma rápida y segura.
                        </p>

                        {/* BENEFICIOS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

                            {/* BENEFICIO 1 */}
                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="WhatsApp"
                                />
                                <h3 className="benefit-title">Contacto directo por WhatsApp</h3>
                                <p className="benefit-text">
                                    Conéctate al instante con el vendedor, resuelve dudas
                                    y recibe atención inmediata y personalizada.
                                </p>
                            </div>

                            {/* BENEFICIO 2 */}
                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Sin intermediarios"
                                />
                                <h3 className="benefit-title">Sin intermediarios</h3>
                                <p className="benefit-text">
                                    Comunicación directa sin procesos complicados ni comisiones añadidas.
                                </p>
                            </div>

                            {/* BENEFICIO 3 */}
                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Seguridad"
                                />
                                <h3 className="benefit-title">Rápido y seguro</h3>
                                <p className="benefit-text">
                                    Coordina disponibilidad, precios y entregas con total confianza.
                                </p>
                            </div>

                            {/* BENEFICIO 4 */}
                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Categorías"
                                />
                                <h3 className="benefit-title">Variedad de categorías</h3>
                                <p className="benefit-text">
                                    Encuentra servicios, accesorios, tecnología, moda y mucho más.
                                </p>
                            </div>

                            {/* BENEFICIO 5 */}
                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Entregas"
                                />
                                <h3 className="benefit-title">Entregas rápidas</h3>
                                <p className="benefit-text">
                                    Coordina puntos de entrega o envíos directamente con el proveedor.
                                </p>
                            </div>

                            {/* BENEFICIO 6 */}
                            <div className="benefit-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1670/1670611.png"
                                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4"
                                    alt="Confianza"
                                />
                                <h3 className="benefit-title">Confianza y transparencia</h3>
                                <p className="benefit-text">
                                    Comunicación clara y directa para compras más seguras.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}