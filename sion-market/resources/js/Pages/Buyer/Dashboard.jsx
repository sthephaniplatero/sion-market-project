import DashboardLayout from "@/Layouts/DashboardLayout";

export default function BuyerDashboard() {
    return (
        <DashboardLayout title="Panel de Comprador">
            <p className="text-gray-700">
                Bienvenido/a, Comprador. Aquí podrás ver tus compras, guardar
                favoritos y explorar productos del marketplace.
            </p>
        </DashboardLayout>
    );
}
