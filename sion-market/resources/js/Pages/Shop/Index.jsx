import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { motion } from "framer-motion";
import ShopLayout from "@/Layouts/ShopLayout";

const capitalizeFirstLetter = (string) => {
if (!string) return "";
return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function ShopIndex({ products: initialProducts, auth }) {
const [products, setProducts] = useState(initialProducts);
const [sort, setSort] = useState("");
const [search, setSearch] = useState("");

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

const handleSortChange = (e) => {
    const value = e.target.value;
    setSort(value);
    fetchProducts(value, search);
};

const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchProducts(sort, value);
};

return (
    <ShopLayout auth={auth}>
        <Head title="Tienda" />

        {/* HERO SUPER MODERNO */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full bg-gradient-to-r from-[#1A237E] to-[#3949AB] py-24 px-6 text-white shadow-xl"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold drop-shadow-lg">
                    Bienvenido a la Tienda
                </h1>
                <p className="text-lg mt-3 opacity-90">
                    Descubre productos increíbles al mejor precio
                </p>
            </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 py-16">
            {/* FILTROS MODERNOS */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 flex flex-col md:flex-row md:justify-between gap-6"
            >
                <select
                    className="border rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition cursor-pointer bg-white"
                    value={sort}
                    onChange={handleSortChange}
                >
                    <option value="">Ordenar por</option>
                    <option value="price_asc">Precio: menor a mayor</option>
                    <option value="price_desc">Precio: mayor a menor</option>
                    <option value="latest">Más recientes</option>
                </select>

                <input
                    type="text"
                    placeholder="Buscar producto..."
                    className="border rounded-lg px-4 py-2 w-full md:w-72 shadow-sm hover:shadow-md transition"
                    value={search}
                    onChange={handleSearchChange}
                />
            </motion.div>

            {/* GRID DE PRODUCTOS ANIMADO */}
            {products && products.length > 0 ? (
                <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white shadow-lg rounded-xl p-4 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-200"
                        >
                            {/* Imagen */}
                            <div className="relative overflow-hidden rounded-lg">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-56 object-cover rounded-lg"
                                />

                                <span
                                    className={`absolute top-2 left-2 text-xs px-3 py-1 rounded-full ${
                                        product.stock > 0
                                            ? "bg-green-600 text-white"
                                            : "bg-red-600 text-white"
                                    }`}
                                >
                                    {product.stock > 0
                                        ? "Disponible"
                                        : "Agotado"}
                                </span>
                            </div>

                            {/* Nombre */}
                            <h2 className="text-xl font-semibold mt-4 line-clamp-1">
                                {capitalizeFirstLetter(product.name)}
                            </h2>

                            <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
                                Vendido por:{" "}
                                <span className="font-medium">
                                    {capitalizeFirstLetter(
                                        product.seller?.name
                                    )}
                                </span>
                            </p>

                            {/* Rating animado */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center mt-2 text-yellow-500 text-sm"
                            >
                                ★★★★☆ <span className="text-gray-500 ml-1">(120)</span>
                            </motion.div>

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
                                        href={`https://wa.me/${
                                            product.seller?.whatsapp_number
                                        }?text=${encodeURIComponent(
                                            `Hola! Estoy interesado en el producto: ${product.name} de ${product.seller?.name}. Precio: $${product.price}. ¿Está disponible?`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                                    >
                                        <img
                                            src="/whatsapp.png"
                                            className="w-5 h-5"
                                        />
                                        Contactar por WhatsApp
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <p className="text-center text-gray-500 mt-10">
                    No hay productos disponibles en este momento.
                </p>
            )}
        </div>
    </ShopLayout>
);

}