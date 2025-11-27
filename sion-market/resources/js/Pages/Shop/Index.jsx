import { Head, Link } from "@inertiajs/react";
import ShopLayout from "@/Layouts/ShopLayout";

export default function ShopIndex({ products, auth }) {
    return (
        <ShopLayout auth={auth}>
            <Head title="Tienda" />

            <div className="max-w-7xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold mb-10 text-center text-[#1A237E]">
                    Productos Disponibles
                </h1>

                {products && products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {products.map(product => (
                            <div key={product.id} className="bg-white shadow rounded-xl p-4 flex flex-col">
                                <img
                                    src={product.image ? `/storage/${product.image}` : "/placeholder.jpg"}
                                    alt={product.name}
                                    className="w-full h-56 object-cover rounded-lg"
                                />

                                <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                                <p className="text-gray-600 mt-2">${product.price}</p>

                                <Link
                                    href={`/shop/${product.id}`}
                                    className="mt-auto block text-center bg-[#1A237E] text-white py-2 rounded-lg transition hover:bg-[#3949ab]"
                                >
                                    Ver detalles
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-10">
                        No hay productos disponibles en este momento.
                    </p>
                )}
            </div>
        </ShopLayout>
    );
}
