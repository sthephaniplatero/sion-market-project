import DashboardLayout from "@/Layouts/DashboardLayout";

export default function AdminDashboard() {
    return (
        <DashboardLayout title="Panel de Administrador">
            <p className="text-gray-700">
                Bienvenido/a, Admin. Aquí podrás gestionar usuarios, vendedores,
                permisos y configuración general del sistema.
            </p>
        </DashboardLayout>
    );
}