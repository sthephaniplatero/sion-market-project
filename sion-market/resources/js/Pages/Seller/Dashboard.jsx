import React from "react";
import { Head } from "@inertiajs/react";
import SellerLayout from "@/Layouts/SellerLayout";

export default function SellerDashboard({ stats }) {
    return (
        <SellerLayout>
            <Head title="Dashboard Seller" />

            <h1 className="text-3xl font-bold mb-6" style={{ color: "#1A237E" }}>
                Resumen rápido
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Productos activos</h2>
                    <p className="text-2xl font-bold">{stats.totalActive}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Productos inactivos</h2>
                    <p className="text-2xl font-bold">{stats.totalInactive}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Productos con bajo stock</h2>
                    <p className="text-2xl font-bold">{stats.lowStock}</p>
                </div>

                <div className="bg-white shadow p-4 rounded">
                    <h2 className="text-gray-500">Últimos productos agregados</h2>
                    <ul className="mt-2">
                        {stats.latestProducts.length > 0 ? (
                            stats.latestProducts.map((product) => (
                                <li key={product.id}>{product.name}</li>
                            ))
                        ) : (
                            <li>No hay productos</li>
                        )}
                    </ul>
                </div>
            </div>
        </SellerLayout>
    );
}
