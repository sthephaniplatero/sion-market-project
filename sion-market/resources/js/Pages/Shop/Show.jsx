import { Head, Link } from "@inertiajs/react";
import ShopLayout from "@/Layouts/ShopLayout";

export default function ShopShow({ product, auth }) {
    return (
        <ShopLayout auth={auth}>
            <Head title={product.name} />

            <div className="max-w-4xl mx-auto px-6 py-20">
                <Link
                    href="/shop"
                    className="text-[#1A237E] hover:underline mb-6 inline-block"
                >
                    ← Volver a la tienda
                </Link>

                <div className="bg-white shadow rounded-xl p-6 flex flex-col md:flex-row gap-8">
                    {/* Imagen */}
                    <img
                        src={
                            product.image
                                ? `/storage/${product.image}`
                                : "/placeholder.jpg"
                        }
                        alt={product.name}
                        className="w-full md:w-1/2 h-96 object-cover rounded-lg"
                    />

                    {/* Información */}
                    <div className="flex-1 flex flex-col">
                        <h1 className="text-3xl font-bold text-[#1A237E]">
                            {product.name}
                        </h1>

                        <p className="text-gray-600 text-xl mt-2">
                            ${product.price}
                        </p>

                        {product.description && (
                            <p className="mt-4 text-gray-700">
                                {product.description}
                            </p>
                        )}

                        {/* Información del vendedor */}
                        {product.seller && (
                            <div className="mt-6">
                                <h2 className="font-semibold text-gray-800">
                                    Vendedor:
                                </h2>

                                {/* Mostrar nombre del vendedor */}
                                <p className="text-gray-600">
                                    {product.seller.name}
                                </p>

                                {/* WhatsApp */}
                                {product.seller.whatsapp_number && (
                                    <a
                                        href={`https://wa.me/${product.seller.whatsapp_number}?text=${encodeURIComponent(
                                            `Hola! Estoy interesado en el producto: ${product.name} de ${product.seller.name}. Precio: $${product.price}. ¿Está disponible?`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block text-green-600 hover:underline"
                                    >
                                        Contactar por WhatsApp
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
}
