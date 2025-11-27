import { Link } from "@inertiajs/react";

export default function ShopShow({ product }) {
    const whatsappNumber = product.seller?.whatsapp_number;

    const whatsappMessage = `Hola, estoy interesado en el producto ${product.name}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="max-w-5xl mx-auto px-6 py-20">

            <Link href={route("shop.index")} className="text-[#1A237E] underline">
                ← Volver
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">

                {/* IMAGEN */}
                <img
                    src={product.image ? `/storage/${product.image}` : "/placeholder.jpg"}
                    className="w-full rounded-xl shadow"
                />

                {/* INFO */}
                <div>
                    <h1 className="text-4xl font-bold">{product.name}</h1>

                    <p className="text-2xl text-gray-700 mt-3">
                        Precio: <span className="text-[#1A237E]">${product.price}</span>
                    </p>

                    <p className="text-gray-600 mt-4">{product.description}</p>

                    <p className="mt-6">
                        <span className="font-semibold">Vendedor:</span> {product.seller?.name}
                    </p>

                    <button
                        onClick={() => window.open(whatsappLink, "_blank")}
                        className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg text-lg"
                    >
                        Contactar por WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}
