import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminDashboard({ stats }) {

    console.log("ESTADISTICAS RECIBIDAS:", stats); // ← AQUI
    if (!stats) {
        return <div>Cargando estadísticas...</div>;
    }

    const latestProducts = stats.latestProducts || [];
    const latestSellers = stats.latestSellers || [];

    function handleLogout() {
        router.post("/logout");
    }

    return (
        <AdminLayout>
            <Head title="Dashboard Administrador" />

            {/* ENCABEZADO + BOTÓN LOGOUT */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold" style={{ color: "#1A237E" }}>
                    Resumen del Marketplace
                </h1>

                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Cerrar sesión
                </button>
            </div>

            {/* TARJETAS DE ESTADÍSTICAS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Total de vendedores</h2>
                    <p className="text-2xl font-bold">{stats.totalSellers || 0}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Total de productos</h2>
                    <p className="text-2xl font-bold">{stats.totalProducts || 0}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Productos activos</h2>
                    <p className="text-2xl font-bold">{stats.activeProducts || 0}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Productos inactivos</h2>
                    <p className="text-2xl font-bold">{stats.inactiveProducts || 0}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Productos con bajo stock</h2>
                    <p className="text-2xl font-bold">{stats.lowStock || 0}</p>
                </div>
            </div>

            {/* LISTAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Últimos productos */}
                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Últimos productos agregados</h2>
                    <ul className="mt-2">
                        {latestProducts.length > 0 ? (
                            latestProducts.map((product) => (
                                <li key={product.id}>
                                    {product.name} - {product.seller?.name || "Sin vendedor"}
                                </li>
                            ))
                        ) : (
                            <li>No hay productos</li>
                        )}
                    </ul>
                </div>

                {/* Últimos vendedores */}
                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Últimos vendedores registrados</h2>
                    <ul className="mt-2">
                        {latestSellers.length > 0 ? (
                            latestSellers.map((seller) => (
                                <li key={seller.id}>{seller.name}</li>
                            ))
                        ) : (
                            <li>No hay vendedores</li>
                        )}
                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
}