// components/admin/AdminSidebar.tsx
// components/admin/AdminSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    ClipboardCheck,
    Building2,
    Layers,
    Users,
    User,
    LogOut,
} from "lucide-react";

type MenuItem = {
    label: string;
    icon: typeof LayoutDashboard;
    href: string;
};

const menuItems: MenuItem[] = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { label: "Reservation Approval", icon: ClipboardCheck, href: "/admin/reservation" },
    { label: "Manage Rooms", icon: Building2, href: "/admin/rooms" },
    { label: "Room Types", icon: Layers, href: "/admin/room-types" },
    { label: "Manage Users", icon: Users, href: "/admin/users" },
];

export type SidebarAdmin = {
    name: string;
    adminId: string;
    role?: string;
};

type SidebarProps = {
    user?: SidebarAdmin;
    onLogout?: () => void;
};

const defaultAdmin: SidebarAdmin = {
    name: "Admin Perpusnas",
    adminId: "ADM-0001",
    role: "Admin",
};

export default function AdminSidebar({ user = defaultAdmin, onLogout }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="w-60 shrink-0 min-h-screen bg-[#DCE9FB] flex flex-col justify-between">
            <div>
                <div className="px-6 pt-8 pb-6">
                    <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-20 h-20">
                            <polygon
                                points="50,5 61,38 96,38 68,59 79,92 50,71 21,92 32,59 4,38 39,38"
                                fill="#1E4E9C"
                            />
                            <path d="M50 20 L62 45 L50 60 L38 45 Z" fill="#2E9E5B" />
                            <path d="M50 20 L62 45 L50 45 Z" fill="#4CAF6E" />
                        </svg>
                    </div>
                    <p className="text-center font-extrabold text-[13px] leading-tight tracking-wide text-[#0B2447]">
                        PERPUSTAKAAN NASIONAL
                    </p>
                    <p className="text-center text-[10px] tracking-widest text-[#3A5A85] mt-0.5">
                        REPUBLIK INDONESIA
                    </p>
                </div>

                <nav className="px-4 space-y-1.5">
                    {menuItems.map((item) => {
                        const active =
                            pathname === item.href ||
                            (item.href !== "/admin/dashboard" && pathname?.startsWith(item.href));

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`w-full flex items-center gap-3 rounded-lg text-sm font-semibold px-4 py-3 transition-colors ${
                                    active
                                        ? "bg-[#1E4FA3] text-white shadow-sm"
                                        : "text-[#2C4A75] hover:bg-white/60"
                                }`}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div>
                <div className="flex items-center gap-3 px-5 py-4 bg-[#0B2E6B]">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 text-[#0B2E6B]" />
                    </div>
                    <div className="leading-tight">
                        <p className="text-white text-sm font-semibold">{user.name}</p>
                        <p className="text-[#B7C8E8] text-xs mb-1">{user.adminId}</p>
                        {user.role && (
                            <span className="inline-block rounded bg-[#1E4FA3] text-white text-[10px] font-semibold px-2 py-0.5">
                                {user.role}
                            </span>
                        )}
                    </div>
                </div>
                <div className="px-4 py-4 bg-white">
                    <button
                        type="button"
                        onClick={onLogout}
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#F04438] text-white text-sm font-semibold px-4 py-2.5 hover:bg-[#d63c31] transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </div>
        </aside>
    );
}

// import Link from "next/link";
// import { Calendar, User, LogOut, type LucideIcon } from "lucide-react";

// type NavItem = {
//     label: string;
//     href: string;
//     icon: LucideIcon;
// };

// const NAV_ITEMS: NavItem[] = [
//     { label: "Room Reservation", href: "/admin/reservation", icon: Calendar },
// ];

// type AdminSidebarProps = {
//     activeHref?: string;
//     adminName?: string;
//     adminRole?: string;
// };

// export function AdminSidebar({
//     activeHref = "/admin/reservation",
//     adminName = "Admin Perpusnas",
//     adminRole = "Administrator",
//     }: AdminSidebarProps) {
//     return (
//         <aside className="flex w-[300px] flex-col justify-between bg-blue-800 text-white">
//         <div>
//             <div className="flex flex-col items-center gap-3 px-6 pb-8 pt-10">
//             <div className="text-5xl">📚</div>
//             <div className="text-center">
//                 <p className="text-lg font-bold leading-tight text-white">
//                 PERPUSTAKAAN NASIONAL
//                 </p>
//                 <p className="text-xs tracking-wide text-blue-200">
//                 REPUBLIK INDONESIA
//                 </p>
//             </div>
//             </div>

//             <nav className="flex flex-col gap-1 px-6">
//             {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
//                 const isActive = href === activeHref;
//                 return (
//                 <Link
//                     key={href}
//                     href={href}
//                     className={`flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition ${
//                     isActive
//                         ? "bg-blue-600 text-white shadow-sm"
//                         : "text-blue-100 hover:bg-blue-700"
//                     }`}
//                 >
//                     <Icon className="h-5 w-5" />
//                     {label}
//                 </Link>
//                 );
//             })}
//             </nav>
//         </div>

//         <div className="bg-blue-900 p-6">
//             <div className="mb-4 flex items-center gap-3">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
//                 <User className="h-6 w-6 text-white" />
//             </div>
//             <div>
//                 <p className="font-semibold text-white">{adminName}</p>
//                 <p className="text-sm text-blue-200">{adminRole}</p>
//             </div>
//             </div>
//             <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 font-semibold text-white transition hover:bg-red-600">
//             <LogOut className="h-4 w-4" />
//             Logout
//             </button>
//         </div>
//         </aside>
//     );
// }