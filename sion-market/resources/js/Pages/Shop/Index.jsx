import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import ShopLayout from "@/Layouts/ShopLayout";

// Función auxiliar: Capitaliza solo la primera letra de una cadena
const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    // Pone en mayúscula el primer carácter y mantiene el resto de la cadena
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function ShopIndex({ products: initialProducts, auth }) {
const [products, setProducts] = useState(initialProducts);
const [sort, setSort] = useState("");
const [search, setSearch] = useState("");

// Función para actualizar productos desde el backend
const fetchProducts = (sortValue, searchValue) => {
    router.get(
        "/shop",
        { sort: sortValue, search: searchValue },
        {
            preserveState: true,
            onSuccess: (page) => setProducts(page.props.products),
        }
    );
};

// Manejar cambio de orden
const handleSortChange = (e) => {
    const value = e.target.value;
    setSort(value);
    fetchProducts(value, search);
};

// Manejar cambio de búsqueda
const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchProducts(sort, value);
};

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
                    <select
                        className="border rounded-lg px-4 py-2"
                        value={sort}
                        onChange={handleSortChange}
                    >
                        <option value="">Ordenar por</option>
                        <option value="price_asc">Precio: menor a mayor</option>
                        <option value="price_desc">Precio: mayor a menor</option>
                        <option value="latest">Más recientes</option>
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        className="border rounded-lg px-4 py-2 w-full md:w-72"
                        value={search}
                        onChange={handleSearchChange}
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
                                {capitalizeFirstLetter(product.name)} {/* <-- MODIFICADO AQUÍ */}
                            </h2>

                            {/* Seller */}
                            <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
                                Vendido por:
                                <span className="font-medium">
                                    {capitalizeFirstLetter(product.seller?.name)} {/* <-- MODIFICADO AQUÍ */}
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
                                <Link
                                    href={`/shop/${product.id}`}
                                    className="text-center bg-[#1A237E] text-white py-2 rounded-lg transition hover:bg-[#283593]"
                                >
                                    Ver detalles
                                </Link>

                                {product.seller?.whatsapp_number && (
                                    <a
                                        href={`https://wa.me/${product.seller?.whatsapp_number}?text=${encodeURIComponent(
                                            `Hola! Estoy interesado en el producto: ${product.name} de ${product.seller?.name}. Precio: $${product.price}. ¿Está disponible?`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                                    >
                                        <img src="/whatsapp.png" className="w-5 h-5" />
                                        Contactar por WhatsApp
                                    </a>
                                )}
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