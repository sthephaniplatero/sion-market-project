import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import SellerLayout from "@/Layouts/SellerLayout";

export default function CreateProduct() {
    const [form, setForm] = useState({
        name: "",
        price: "",
        stock: "",
        description: "",
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
        router.post("/seller/products", form, { forceFormData: true });
    };

    return (
        <SellerLayout>
            <Head title="Agregar producto" />

            <div className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight" style={{ color: "#1A237E" }}>
                    Agregar producto
                </h1>
                <p className="mt-1 text-gray-500">
                    Completa los siguientes datos para añadir un nuevo producto al catálogo.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 shadow-lg rounded-2xl border border-gray-100 space-y-6 max-w-2xl"
            >
                {/* Nombre */}
                <div>
                    <label className="block font-medium mb-1 text-gray-700">Nombre del producto</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-[#1A237E] transition"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Precio */}
                <div>
                    <label className="block font-medium mb-1 text-gray-700">Precio ($)</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-[#1A237E] transition"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Stock */}
                <div>
                    <label className="block font-medium mb-1 text-gray-700">Stock disponible</label>
                    <input
                        type="number"
                        name="stock"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-[#1A237E] transition"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Descripción */}
                <div>
                    <label className="block font-medium mb-1 text-gray-700">Descripción</label>
                    <textarea
                        name="description"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-[#1A237E] transition"
                        rows="4"
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Imagen */}
                <div>
                    <label className="block font-medium mb-1 text-gray-700">Imagen del producto</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-lg bg-gray-50 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#1A237E] file:text-white file:text-sm hover:file:bg-[#121858] transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                    style={{ backgroundColor: "#1A237E" }}
                >
                    Guardar producto
                </button>
            </form>
        </SellerLayout>
    );
}
