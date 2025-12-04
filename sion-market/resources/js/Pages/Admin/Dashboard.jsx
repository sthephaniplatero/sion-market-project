import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {
UsersIcon,
ShoppingBagIcon,
CheckCircleIcon,
XCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// Capitalizar la primera letra
const capitalizeFirstLetter = (string) => {
if (!string) return "";
return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function AdminDashboard({ stats = {} }) {
// Se usan los nombres correctos enviados desde Laravel
const latestUsers = stats.latestSellers || [];
const latestProducts = stats.latestProducts || [];

return (
    <AdminLayout>
        <Head title="Dashboard del Administrador" />

        {/* HERO ADMIN */}
        <div className="relative mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Panel Administrativo
                </motion.h1>

                <motion.p
                    className="mt-3 text-lg text-red-100 max-w-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Gestiona usuarios, productos, vendedores y monitorea la actividad general del marketplace.
                </motion.p>

                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            </div>
        </div>

        {/* Resumen general */}
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-700 tracking-tight">
                Resumen general del sistema
            </h2>
            <p className="text-gray-600 mt-1">
                Visión general del estado actual del marketplace.
            </p>
        </div>

        {/* GRID DE ESTADÍSTICAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Vendedores totales */}
            <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition border">
                <div className="flex items-center gap-4">
                    <UsersIcon className="w-12 h-12 text-red-600" />
                    <div>
                        <p className="text-gray-500 text-sm">Vendedores registrados</p>
                        <h2 className="text-3xl font-bold">{stats.totalSellers}</h2>
                    </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 border-t pt-2">
                    Total de usuarios activos en la plataforma.
                </p>
            </div>

            {/* Productos totales */}
            <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition border">
                <div className="flex items-center gap-4">
                    <ShoppingBagIcon className="w-12 h-12 text-blue-600" />
                    <div>
                        <p className="text-gray-500 text-sm">Productos totales</p>
                        <h2 className="text-3xl font-bold">{stats.totalProducts}</h2>
                    </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 border-t pt-2">
                    Cantidad total de productos creados por vendedores.
                </p>
            </div>

            {/* Productos activos */}
            <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition border">
                <div className="flex items-center gap-4">
                    <CheckCircleIcon className="w-12 h-12 text-green-600" />
                    <div>
                        <p className="text-gray-500 text-sm">Productos activos</p>
                        <h2 className="text-3xl font-bold">{stats.activeProducts}</h2>
                    </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 border-t pt-2">
                    Publicados y visibles para los compradores.
                </p>
            </div>

            {/* Productos inactivos */}
            <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition border">
                <div className="flex items-center gap-4">
                    <XCircleIcon className="w-12 h-12 text-gray-600" />
                    <div>
                        <p className="text-gray-500 text-sm">Productos inactivos</p>
                        <h2 className="text-3xl font-bold">{stats.inactiveProducts}</h2>
                    </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 border-t pt-2">
                    Eliminados, pausados o sin stock.
                </p>
            </div>
        </div>

        {/* SECCIONES LATERALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">

            {/* Últimos vendedores */}
            <div className="bg-white shadow-xl rounded-2xl p-6 border">
                <h3 className="text-xl font-bold text-red-700 mb-4">Últimos vendedores registrados</h3>
                <ul className="text-gray-700 text-sm space-y-2 max-h-56 overflow-y-auto">
                    {latestUsers.length > 0 ? (
                        latestUsers.map((user) => (
                            <li
                                key={user.id}
                                className="bg-gray-100 hover:bg-gray-200 transition py-2 px-3 rounded-lg flex justify-between"
                            >
                                <span>{capitalizeFirstLetter(user.name)}</span>
                                <span className="text-gray-500 text-xs">{user.email}</span>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No hay registros recientes.</p>
                    )}
                </ul>
            </div>

            {/* Últimos productos */}
            <div className="bg-white shadow-xl rounded-2xl p-6 border">
                <h3 className="text-xl font-bold text-red-700 mb-4">Últimos productos agregados</h3>
                <ul className="text-gray-700 text-sm space-y-2 max-h-56 overflow-y-auto">
                    {latestProducts.length > 0 ? (
                        latestProducts.map((product) => (
                            <li
                                key={product.id}
                                className="bg-gray-100 hover:bg-gray-200 transition py-2 px-3 rounded-lg truncate"
                            >
                                {capitalizeFirstLetter(product.name)}
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">No hay productos recientes.</p>
                    )}
                </ul>
            </div>
        </div>
    </AdminLayout>
);

}