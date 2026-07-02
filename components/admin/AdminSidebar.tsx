import Link from "next/link";
import { Calendar, User, LogOut, type LucideIcon } from "lucide-react";

type NavItem = {
    label: string;
    href: string;
    icon: LucideIcon;
};

const NAV_ITEMS: NavItem[] = [
    { label: "Room Reservation", href: "/admin/reservation", icon: Calendar },
];

type AdminSidebarProps = {
    activeHref?: string;
    adminName?: string;
    adminRole?: string;
};

export function AdminSidebar({
    activeHref = "/admin/reservation",
    adminName = "Admin Perpusnas",
    adminRole = "Administrator",
    }: AdminSidebarProps) {
    return (
        <aside className="flex w-[300px] flex-col justify-between bg-blue-800 text-white">
        <div>
            <div className="flex flex-col items-center gap-3 px-6 pb-8 pt-10">
            <div className="text-5xl">📚</div>
            <div className="text-center">
                <p className="text-lg font-bold leading-tight text-white">
                PERPUSTAKAAN NASIONAL
                </p>
                <p className="text-xs tracking-wide text-blue-200">
                REPUBLIK INDONESIA
                </p>
            </div>
            </div>

            <nav className="flex flex-col gap-1 px-6">
            {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
                const isActive = href === activeHref;
                return (
                <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition ${
                    isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-blue-100 hover:bg-blue-700"
                    }`}
                >
                    <Icon className="h-5 w-5" />
                    {label}
                </Link>
                );
            })}
            </nav>
        </div>

        <div className="bg-blue-900 p-6">
            <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <User className="h-6 w-6 text-white" />
            </div>
            <div>
                <p className="font-semibold text-white">{adminName}</p>
                <p className="text-sm text-blue-200">{adminRole}</p>
            </div>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 font-semibold text-white transition hover:bg-red-600">
            <LogOut className="h-4 w-4" />
            Logout
            </button>
        </div>
        </aside>
    );
}