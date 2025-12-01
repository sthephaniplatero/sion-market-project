import { Link, usePage } from '@inertiajs/react';

export default function NavLink({
    href,
    className = '',
    children,
    ...props
}) {
    const { url } = usePage();
    const active = url === href;

    return (
        <Link
            href={href}
            {...props}
            className={
                `
                inline-flex items-center px-3 py-2 text-sm font-medium transition-all duration-200 
                border-b-2 
                ${active 
                    ? 'border-[#D4AF37] text-[#D4AF37]'   // Activo (dorado)
                    : 'border-transparent text-white hover:text-[#D4AF37] hover:border-[#D4AF37]'
                }
                ` +
                className
            }
        >
            {children}
        </Link>
    );
}
