import React from "react";
import { Head } from "@inertiajs/react";
import SellerLayout from "@/Layouts/SellerLayout";
import {
    CubeIcon,
    CheckCircleIcon,
    XCircleIcon,
    ExclamationTriangleIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function SellerDashboard({ stats }) {
    return (
        <SellerLayout>
            <Head title="Dashboard del Vendedor" />

            {/* 🔥 HERO SECTION PROFESIONAL */}
            <div className="relative mb-12">
                <div className="bg-gradient-to-r from-[#1A237E] to-[#3949AB] rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Bienvenido al Panel del Vendedor
                    </motion.h1>
                    <motion.p
                        className="mt-3 text-lg text-blue-100 max-w-2xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Administra tus productos y mantén el control de tu
                        negocio con herramientas claras y rápidas.
                    </motion.p>

                    {/* Burbujas decorativas */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
                </div>
            </div>

            {/* 🔷 SECCIÓN DE BENEFICIOS DE SER VENDEDOR */}
            <div className="max-w-7xl mx-auto mb-12 px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A237E] mb-10">
                    Beneficios de ser vendedor en nuestro marketplace
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Beneficio 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-3xl shadow-xl p-8 text-center transition"
                    >
                        <div className="flex justify-center mb-4">
                            <CheckCircleIcon className="h-16 w-16 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Venta rápida</h3>
                        <p className="text-white/90">
                            Publica tus productos y llega rápidamente a compradores activos en nuestra plataforma.
                        </p>
                    </motion.div>

                    {/* Beneficio 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-tr from-green-400 to-green-300 rounded-3xl shadow-xl p-8 text-center transition"
                    >
                        <div className="flex justify-center mb-4">
                            <CubeIcon className="h-16 w-16 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Control total</h3>
                        <p className="text-white/90">
                            Administra tu inventario, precios y stock de manera sencilla desde un panel intuitivo.
                        </p>
                    </motion.div>

                    {/* Beneficio 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-tr from-blue-200 to-purple-200 rounded-3xl shadow-xl p-8 text-center transition"
                    >
                        <div className="flex justify-center mb-4">
                            <EyeIcon className="h-16 w-16 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">Mayor visibilidad</h3>
                        <p className="text-purple-700/90">
                            Tus productos llegan a una audiencia más amplia, aumentando tus posibilidades de venta.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Título pequeño debajo del Hero */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#1A237E] tracking-tight">
                    Resumen general
                </h2>
                <p className="text-gray-600 mt-1">
                    Información importante sobre tus productos y actividad reciente.
                </p>
            </div>

            {/* 🔷 GRID PRINCIPAL DE ESTADÍSTICAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* CARD 1 */}
                <div className="bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                    <div className="flex items-center gap-4">
                        <CheckCircleIcon className="w-12 h-12 text-green-600" />
                        <div>
                            <p className="text-gray-500 text-sm">Productos activos</p>
                            <h2 className="text-3xl font-bold">{stats.totalActive}</h2>
                        </div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                    <div className="flex items-center gap-4">
                        <XCircleIcon className="w-12 h-12 text-red-600" />
                        <div>
                            <p className="text-gray-500 text-sm">Productos inactivos</p>
                            <h2 className="text-3xl font-bold">{stats.totalInactive}</h2>
                        </div>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                    <div className="flex items-center gap-4">
                        <ExclamationTriangleIcon className="w-12 h-12 text-yellow-500" />
                        <div>
                            <p className="text-gray-500 text-sm">Bajo stock</p>
                            <h2 className="text-3xl font-bold">{stats.lowStock}</h2>
                        </div>
                    </div>
                </div>

                {/* CARD 4 — LISTADO */}
                <div className="bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition">
                    <div className="flex items-center gap-4">
                        <CubeIcon className="w-12 h-12 text-[#1A237E]" />
                        <div>
                            <p className="text-gray-500 text-sm">Últimos agregados</p>
                            <h2 className="text-xl font-bold">Productos recientes</h2>
                        </div>
                    </div>

                    <ul className="mt-4 text-gray-700 text-sm space-y-2">
                        {stats.latestProducts.length > 0 ? (
                            stats.latestProducts.map((product) => (
                                <li
                                    key={product.id}
                                    className="bg-gray-100 hover:bg-gray-200 transition py-2 px-3 rounded-lg"
                                >
                                    {product.name}
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-500 italic">No hay productos</li>
                        )}
                    </ul>
                </div>
            </div>
        </SellerLayout>
    );
}
