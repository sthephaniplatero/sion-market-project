import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminDashboard({ stats }) {
    return (
        <AdminLayout>
            <Head title="Dashboard Administrador" />

            <h1 className="text-3xl font-bold mb-6" style={{ color: "#1A237E" }}>
                Resumen del Marketplace
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Total de vendedores</h2>
                    <p className="text-2xl font-bold">{stats.totalSellers}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Total de productos</h2>
                    <p className="text-2xl font-bold">{stats.totalProducts}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Productos activos</h2>
                    <p className="text-2xl font-bold">{stats.activeProducts}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Productos inactivos</h2>
                    <p className="text-2xl font-bold">{stats.inactiveProducts}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Productos con bajo stock</h2>
                    <p className="text-2xl font-bold">{stats.lowStock}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Últimos productos agregados</h2>
                    <ul className="mt-2">
                        {stats.latestProducts.length > 0 ? (
                            stats.latestProducts.map((product) => (
                                <li key={product.id}>
                                    {product.name} - {product.seller.name}
                                </li>
                            ))
                        ) : (
                            <li>No hay productos</li>
                        )}
                    </ul>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Últimos vendedores registrados</h2>
                    <ul className="mt-2">
                        {stats.latestSellers.length > 0 ? (
                            stats.latestSellers.map((seller) => (
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
