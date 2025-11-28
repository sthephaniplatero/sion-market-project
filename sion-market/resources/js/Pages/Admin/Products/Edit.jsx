import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function EditProduct({ product, sellers }) {
    const [form, setForm] = useState({
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description,
        image: null,
        seller_id: product.seller_id,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(`/admin/products/${product.id}`, {
            ...form,
            _method: "PUT",
        }, {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Editar producto" />

            <h1 className="text-3xl font-bold mb-6" style={{ color: "#1A237E" }}>
                Editar producto
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded-lg">

                {/* Vendedor */}
                <div>
                    <label className="font-semibold">Vendedor</label>
                    <select
                        name="seller_id"
                        value={form.seller_id}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    >
                        {sellers.map((seller) => (
                            <option key={seller.id} value={seller.id}>
                                {seller.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Nombre */}
                <div>
                    <label className="font-semibold">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border p-2 rounded"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Precio */}
                <div>
                    <label className="font-semibold">Precio ($)</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full border p-2 rounded"
                        value={form.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Stock */}
                <div>
                    <label className="font-semibold">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        className="w-full border p-2 rounded"
                        value={form.stock}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Descripción */}
                <div>
                    <label className="font-semibold">Descripción</label>
                    <textarea
                        name="description"
                        className="w-full border p-2 rounded"
                        rows="4"
                        value={form.description}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Imagen */}
                <div>
                    <label className="font-semibold">Imagen</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                    />

                    {product.image && (
                        <img
                            src={product.image}
                            className="w-24 mt-3 rounded"
                        />
                    )}
                </div>

                <button
                    type="submit"
                    className="px-6 py-3 rounded text-white"
                    style={{ backgroundColor: "#1A237E" }}
                >
                    Actualizar
                </button>
            </form>
        </AdminLayout>
    );
}
