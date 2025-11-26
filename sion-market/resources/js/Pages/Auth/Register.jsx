import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        whatsapp_number: "",
        role: "buyer", // buyer | seller
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A3D62] to-[#052235] p-6">
            <Head title="Crear Cuenta" />

            <div className="w-full max-w-lg bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 border border-[#0A3D62]/20">
                
                <h1 className="text-3xl font-semibold text-[#0A3D62] text-center mb-6">
                    Crear Cuenta
                </h1>

                <form onSubmit={submit} className="space-y-4">

                    {/* Nombre */}
                    <div>
                        <InputLabel htmlFor="name" value="Nombre Completo" className="text-[#0A3D62]" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full border-[#0A3D62]/30 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                            autoComplete="name"
                            isFocused
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    {/* Email */}
                    <div>
                        <InputLabel htmlFor="email" value="Correo Electrónico" className="text-[#0A3D62]" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full border-[#0A3D62]/30 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <InputLabel htmlFor="whatsapp_number" value="Número de WhatsApp" className="text-[#0A3D62]" />
                        <TextInput
                            id="whatsapp_number"
                            type="tel"
                            name="whatsapp_number"
                            value={data.whatsapp_number}
                            className="mt-1 block w-full border-[#0A3D62]/30 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                            placeholder="Ejemplo: 7123-4567"
                            onChange={(e) => setData("whatsapp_number", e.target.value)}
                            required
                        />
                        <InputError message={errors.whatsapp_number} className="mt-2" />
                    </div>

                    {/* Toggle Comprador / Vendedor */}
                    <div className="mt-4">
                        <InputLabel value="Tipo de Cuenta" className="text-[#0A3D62]" />

                        <div className="flex items-center justify-between mt-2 bg-[#0A3D62]/10 p-2 rounded-xl">
                            
                            {/* Comprador */}
                            <button
                                type="button"
                                onClick={() => setData("role", "buyer")}
                                className={`w-1/2 py-2 rounded-lg font-medium transition-all
                                    ${data.role === "buyer"
                                        ? "bg-[#0A3D62] text-white shadow"
                                        : "text-[#0A3D62] hover:bg-[#0A3D62]/20"}
                                `}
                            >
                                Comprador
                            </button>

                            {/* Vendedor */}
                            <button
                                type="button"
                                onClick={() => setData("role", "seller")}
                                className={`w-1/2 py-2 rounded-lg font-medium transition-all
                                    ${data.role === "seller"
                                        ? "bg-[#C9A86A] text-white shadow"
                                        : "text-[#C9A86A] hover:bg-[#C9A86A]/20"}
                                `}
                            >
                                Vendedor
                            </button>
                        </div>

                        <InputError message={errors.role} className="mt-2" />
                    </div>

                    {/* Contraseña */}
                    <div>
                        <InputLabel htmlFor="password" value="Contraseña" className="text-[#0A3D62]" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full border-[#0A3D62]/30 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                            autoComplete="new-password"
                            onChange={(e) => setData("password", e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    {/* Confirmación */}
                    <div>
                        <InputLabel htmlFor="password_confirmation" value="Confirmar Contraseña" className="text-[#0A3D62]" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full border-[#0A3D62]/30 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                            autoComplete="new-password"
                            onChange={(e) => setData("password_confirmation", e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    {/* Acciones */}
                    <div className="flex items-center justify-between pt-2">
                        <Link
                            href={route("login")}
                            className="text-sm text-[#0A3D62]/70 hover:text-[#0A3D62]"
                        >
                            ¿Ya tienes cuenta? Inicia sesión
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-2 rounded-lg font-semibold
                                bg-[#C9A86A] text-white shadow-md
                                hover:bg-[#b18f59] transition-all
                                disabled:opacity-50"
                        >
                            Registrarme
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
