import React from "react";
import { Head, Link } from "@inertiajs/react";
import ShopLayout from "@/Layouts/ShopLayout";

export default function ShopIndex({ products, auth }) {
    return (
        <ShopLayout auth={auth}>
            <Head title="Tienda" />

            {/* HERO */}
            <div className="w-full bg-gradient-to-r from-[#1A237E] to-[#3949ab] py-20 px-6">
                <div className="max-w-7xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Bienvenido a la Tienda</h1>
                    <p className="text-lg opacity-90">
                        Encuentra los mejores productos al mejor precio
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* FILTROS */}
                <div className="mb-12 flex flex-col md:flex-row md:justify-between gap-6">
                    <div className="flex gap-4">
                        <select className="border rounded-lg px-4 py-2">
                            <option>Ordenar por</option>
                            <option>Precio: menor a mayor</option>
                            <option>Precio: mayor a menor</option>
                            <option>Más recientes</option>
                        </select>

                        <select className="border rounded-lg px-4 py-2">
                            <option>Categorías</option>
                            <option>Electrónica</option>
                            <option>Hogar</option>
                            <option>Ropa</option>
                            <option>Accesorios</option>
                        </select>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Buscar producto..."
                            className="border rounded-lg px-4 py-2 w-full md:w-72"
                        />
                    </div>
                </div>

                {/* PRODUCT GRID */}
                {products && products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white shadow-lg rounded-xl p-4 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Imagen */}
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-56 object-cover rounded-lg"
                                    />

                                    {/* Badge de stock */}
                                    <span
                                        className={`absolute top-2 left-2 text-xs px-3 py-1 rounded-full ${
                                            product.stock > 0
                                                ? "bg-green-600 text-white"
                                                : "bg-red-600 text-white"
                                        }`}
                                    >
                                        {product.stock > 0 ? "Disponible" : "Agotado"}
                                    </span>
                                </div>

                                {/* Nombre */}
                                <h2 className="text-xl font-semibold mt-4 line-clamp-1">
                                    {product.name}
                                </h2>

                                {/* Seller */}
                                <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
                                    Vendido por:
                                    <span className="font-medium">
                                        {product.seller?.name}
                                    </span>
                                </p>

                                {/* Rating decorativo */}
                                <div className="flex items-center mt-2 text-yellow-500 text-sm">
                                    ★★★★☆
                                    <span className="text-gray-500 ml-1">(120)</span>
                                </div>

                                {/* Precio */}
                                <p className="text-2xl font-bold text-[#1A237E] mt-3">
                                    ${product.price}
                                </p>

                                {/* Botones */}
                                <div className="mt-auto flex flex-col gap-3 pt-4">

                                    {/* Ver detalles */}
                                    <Link
                                        href={`/shop/${product.id}`}
                                        className="text-center bg-[#1A237E] text-white py-2 rounded-lg transition hover:bg-[#283593]"
                                    >
                                        Ver detalles
                                    </Link>

                                    {/* WhatsApp */}
                                   <a
                                       href={`https://wa.me/${product.seller?.whatsapp_number}?text=Hola!%20Estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(
                                           product.name
                                       )}%20de%20${encodeURIComponent(
                                           product.seller?.name
                                       )}.%20Precio:%20$${product.price}.%20¿Está%20disponible?`}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center justify-center gap-2 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                                   >
                                       <img src="/whatsapp.png" className="w-5 h-5" />
                                       Contactar por WhatsApp
                                   </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-10">
                        No hay productos disponibles en este momento.
                    </p>
                )}
            </div>
        </ShopLayout>
    );
}
