import DashboardLayout from "@/Layouts/DashboardLayout";

export default function SellerDashboard() {
    return (
        <DashboardLayout title="Panel de Vendedor">
            <p className="text-gray-700">
                Bienvenido/a, Vendedor. Aquí podrás gestionar tus productos,
                pedidos y ver estadísticas de ventas.
            </p>
        </DashboardLayout>
    );
}