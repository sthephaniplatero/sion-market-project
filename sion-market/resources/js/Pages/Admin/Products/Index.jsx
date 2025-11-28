import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminProductIndex({ products }) {
    const toggleStatus = (id) => router.post(`/admin/products/${id}/toggle-status`);
    const deleteProduct = (id) => {
        if (confirm("¿Seguro que deseas eliminar este producto?")) {
            router.delete(`/admin/products/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Gestionar productos" />

            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-bold" style={{ color: "#1A237E" }}>
                    Gestión de productos
                </h1>

                <Link
                    href="/admin/products/create"
                    className="px-5 py-3 rounded-lg text-white"
                    style={{ backgroundColor: "#1A237E" }}
                >
                    Agregar producto
                </Link>
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto bg-white shadow rounded-xl">
                <table className="min-w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4">Imagen</th>
                            <th className="p-4">Nombre</th>
                            <th className="p-4">Vendedor</th>
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
                                    <td className="p-4">{product.seller.name}</td>
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
                                            {product.status === "active"
                                                ? "Activo"
                                                : "Inactivo"}
                                        </span>
                                    </td>
                                    <td className="p-4 space-x-3">
                                        <Link
                                            href={`/admin/products/${product.id}/edit`}
                                            className="text-blue-700 hover:underline"
                                        >
                                            Editar
                                        </Link>

                                        <button
                                            onClick={() => toggleStatus(product.id)}
                                            className="text-yellow-600 hover:underline"
                                        >
                                            {product.status === "active"
                                                ? "Desactivar"
                                                : "Activar"}
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
                                <td colSpan="7" className="p-6 text-center text-gray-500">
                                    No hay productos registrados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
