import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A3D62] to-[#052235] p-6">
            <Head title="Log in" />

            <div className="w-full max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 border border-[#0A3D62]/20">

                <h1 className="text-3xl font-semibold text-[#0A3D62] text-center mb-6">
                    Iniciar Sesión
                </h1>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-4">

                    {/* Email */}
                    <div>
                        <InputLabel htmlFor="email" value="Email" className="text-[#0A3D62]" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full border-[#0A3D62]/30 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div>
                        <InputLabel htmlFor="password" value="Contraseña" className="text-[#0A3D62]" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full border-[#0A3D62]/30 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    {/* Remember */}
                    <div className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-[#0A3D62]/80">
                            Recordarme
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-[#0A3D62]/70 hover:text-[#0A3D62]"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        )}

                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-2 rounded-lg font-semibold
                                bg-[#C9A86A] text-white shadow-md
                                hover:bg-[#b18f59] transition-all
                                disabled:opacity-50"
                        >
                            Iniciar sesión
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
