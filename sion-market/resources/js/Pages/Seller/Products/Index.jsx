import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import SellerLayout from "@/Layouts/SellerLayout";

export default function ProductIndex({ products }) {
    const toggleStatus = (id) => router.post(`/seller/products/${id}/toggle-status`);
    const deleteProduct = (id) => {
        if (confirm("¿Seguro que deseas eliminar este producto?")) {
            router.delete(`/seller/products/${id}`);
        }
    };

    return (
        <SellerLayout>
            <Head title="Gestionar productos" />

            {/* Hero visual */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-10 mb-10 shadow-lg">
                <h1 className="text-5xl font-bold mb-3">Bienvenido a tu Dashboard de Productos</h1>
                <p className="text-lg mb-5">
                    Aquí puedes gestionar, editar y agregar nuevos productos de manera rápida y segura.
                </p>
                <Link
                    href="/seller/products/create"
                    className="inline-block px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition"
                >
                    Agregar nuevo producto
                </Link>
            </div>

            {/* Tabla de productos */}
            <div className="overflow-x-auto bg-white shadow rounded-xl">
                <table className="min-w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4">Imagen</th>
                            <th className="p-4">Nombre</th>
                            <th className="p-4">Precio</th>
                            <th className="p-4">Stock</th>
                            <th className="p-4">Estado</th>
                            <th className="p-4">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product.id} className="border-b">
                                    <td className="p-4">
                                        <img
                                            src={product.image}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </td>

                                    <td className="p-4 font-semibold">{product.name}</td>
                                    <td className="p-4">${product.price}</td>
                                    <td className="p-4">{product.stock}</td>

                                    <td className="p-4">
                                        <span
                                            className={`px-3 py-1 text-sm rounded-full text-white ${
                                                product.status === "active"
                                                    ? "bg-green-600"
                                                    : "bg-red-600"
                                            }`}
                                        >
                                            {product.status === "active" ? "Activo" : "Inactivo"}
                                        </span>
                                    </td>

                                    <td className="p-4 space-x-3">
                                        <Link
                                            href={`/seller/products/${product.id}/edit`}
                                            className="text-blue-700 hover:underline"
                                        >
                                            Editar
                                        </Link>

                                        <button
                                            onClick={() => toggleStatus(product.id)}
                                            className="text-yellow-600 hover:underline"
                                        >
                                            {product.status === "active" ? "Desactivar" : "Activar"}
                                        </button>

                                        <button
                                            onClick={() => deleteProduct(product.id)}
                                            className="text-red-700 hover:underline"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-6 text-center text-gray-500">
                                    No tienes productos aún.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </SellerLayout>
    );
}
