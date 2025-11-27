import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminDashboard({ stats, users, contacts, notifications }) {
// Valores por defecto seguros
const safeStats = stats || {};
const { activeSellers = 0, totalClients = 0, pendingContacts = 0 } = safeStats;

const safeUsers = users || { sellers: [], clients: [] };
const safeContacts = contacts || [];
const safeNotifications = notifications || [];

// Estado de búsqueda
const [searchQuery, setSearchQuery] = useState("");

// Filtrar vendedores según búsqueda
const filteredSellers = (safeUsers.sellers || []).filter(
    (seller) =>
        (seller.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (seller.whatsapp || "").includes(searchQuery)
);

return (
    <AdminLayout notifications={safeNotifications}>
        <Head title="Dashboard Admin" />

        {/* Título */}
        <h1 className="text-3xl font-bold mb-6" style={{ color: "#1A237E" }}>
            Resumen rápido
        </h1>

        {/* Barra de búsqueda */}
        <div className="mb-4">
            <input
                type="text"
                placeholder="Buscar vendedor por nombre o WhatsApp..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border px-3 py-2 rounded w-full"
            />
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-white shadow rounded">
                <h2 className="font-semibold mb-2">Vendedores activos</h2>
                <p className="text-2xl">{activeSellers}</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
                <h2 className="font-semibold mb-2">Clientes registrados</h2>
                <p className="text-2xl">{totalClients}</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
                <h2 className="font-semibold mb-2">Consultas pendientes</h2>
                <p className="text-2xl">{pendingContacts}</p>
            </div>
        </div>

        {/* Tabla de vendedores */}
        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Usuarios - Vendedores</h2>
            <table className="w-full table-auto bg-white shadow rounded">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left">Nombre</th>
                        <th className="px-4 py-2 text-left">WhatsApp</th>
                        <th className="px-4 py-2 text-left">Estado</th>
                        <th className="px-4 py-2 text-left">Productos activos</th>
                        <th className="px-4 py-2 text-left">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSellers.map((seller) => (
                        <tr key={seller.id} className="border-t">
                            <td className="px-4 py-2">{seller.name || "-"}</td>
                            <td className="px-4 py-2">{seller.whatsapp || "-"}</td>
                            <td className="px-4 py-2">{seller.status || "-"}</td>
                            <td className="px-4 py-2">{seller.activeProducts || 0}</td>
                            <td className="px-4 py-2">
                                <button className="text-blue-600 mr-2">Ver</button>
                                <button className="text-green-600 mr-2">Editar</button>
                                <button className="text-red-600">Bloquear</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

        {/* Historial de Contactos */}
        <section>
            <h2 className="text-xl font-semibold mb-4">Historial de Contactos</h2>
            <table className="w-full table-auto bg-white shadow rounded mb-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left">Producto</th>
                        <th className="px-4 py-2 text-left">Cliente</th>
                        <th className="px-4 py-2 text-left">Vendedor</th>
                        <th className="px-4 py-2 text-left">Estado</th>
                        <th className="px-4 py-2 text-left">WhatsApp</th>
                    </tr>
                </thead>
                <tbody>
                    {safeContacts.map((contact) => (
                        <tr key={contact.id} className="border-t">
                            <td className="px-4 py-2">{contact.product || "-"}</td>
                            <td className="px-4 py-2">{contact.client || "-"}</td>
                            <td className="px-4 py-2">{contact.seller || "-"}</td>
                            <td className="px-4 py-2">{contact.status || "-"}</td>
                            <td className="px-4 py-2">
                                {contact.whatsapp ? (
                                    <a
                                        href={`https://wa.me/${contact.whatsapp}`}
                                        target="_blank"
                                        className="text-green-600"
                                    >
                                        Chat
                                    </a>
                                ) : (
                                    "-"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </AdminLayout>
);

}