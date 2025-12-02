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
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("price", form.price);
        formData.append("stock", form.stock);
        formData.append("description", form.description);
        if (form.image) {
            formData.append("image", form.image);
        }

        router.post("/seller/products", formData);
    };

    return (
        <SellerLayout>
            <Head title="Agregar producto" />

            {/* CONTENEDOR CENTRAL */}
            <div className="flex justify-center items-center py-16 px-6">
                <div className="w-full max-w-3xl">

                    {/* TÍTULO */}
                    <div className="text-center mb-10">
                        <h1
                            className="text-4xl font-extrabold tracking-tight"
                            style={{ color: "#1A237E" }}
                        >
                            Agregar Producto
                        </h1>
                        <p className="mt-2 text-gray-500 text-lg">
                            Completa los datos para añadir un nuevo producto al catálogo.
                        </p>
                    </div>

                    {/* FORMULARIO */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-10 shadow-2xl rounded-3xl border border-gray-100 space-y-6 animate-fadeIn"
                        encType="multipart/form-data"
                    >
                        {/* Nombre */}
                        <div>
                            <label className="block font-semibold mb-1 text-gray-700">
                                Nombre del producto
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#1A237E] focus:border-[#1A237E] transition"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Precio */}
                            <div>
                            <label className="block font-semibold mb-1 text-gray-700">
                                Precio ($)
                            </label>
                            <input
                                type="number"
                                name="price"
                                step="0.01"
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#1A237E] focus:border-[#1A237E] transition"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block font-semibold mb-1 text-gray-700">
                                Stock disponible
                            </label>
                            <input
                                type="number"
                                name="stock"
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#1A237E] focus:border-[#1A237E] transition"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Descripción */}
                        <div>
                            <label className="block font-semibold mb-1 text-gray-700">
                                Descripción
                            </label>
                            <textarea
                                name="description"
                                rows="4"
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-[#1A237E] focus:border-[#1A237E] transition"
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* Imagen */}
                        <div>
                            <label className="block font-semibold mb-1 text-gray-700">
                                Imagen del producto
                            </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-xl bg-gray-50 cursor-pointer 
                                file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 
                                file:bg-[#1A237E] file:text-white file:text-sm 
                                hover:file:bg-[#121858] transition"
                            />
                        </div>

                        {/* BOTÓN */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl text-white text-lg font-semibold shadow-md hover:shadow-xl transition transform hover:-translate-y-0.5"
                            style={{ backgroundColor: "#1A237E" }}
                        >
                            Guardar producto
                        </button>
                    </form>
                </div>
            </div>
        </SellerLayout>
    );
}
