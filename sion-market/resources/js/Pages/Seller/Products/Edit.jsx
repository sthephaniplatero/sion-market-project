import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import SellerLayout from "@/Layouts/SellerLayout";

export default function EditProduct({ product }) {
    const [form, setForm] = useState({
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description,
        image: null,
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

        router.post(`/seller/products/${product.id}`, {
            ...form,
            _method: "PUT",
        }, {
            forceFormData: true,
        });
    };

    return (
        <SellerLayout>
            <Head title="Editar producto" />

            <h1 className="text-3xl font-bold mb-6" style={{ color: "#1A237E" }}>
                Editar producto
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded-lg">

                <div>
                    <label className="font-semibold">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border p-2 rounded"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="font-semibold">Precio ($)</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full border p-2 rounded"
                        value={form.price}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="font-semibold">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        className="w-full border p-2 rounded"
                        value={form.stock}
                        onChange={handleChange}
                    />
                </div>

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
        </SellerLayout>
    );
}
