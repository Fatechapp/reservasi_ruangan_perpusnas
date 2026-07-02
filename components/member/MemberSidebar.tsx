// components/member/MemberSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Calendar,
    Clock,
    Plus,
    Building2,
    User,
    LogOut,
} from "lucide-react";

type MenuItem = {
    label: string;
    icon: typeof Home;
    href: string;
};

const menuItems: MenuItem[] = [
    { label: "Home", icon: Home, href: "/member/home" },
    { label: "My Booking", icon: Calendar, href: "/member/reservation" },
    { label: "Booking History", icon: Clock, href: "/member/reservation/history" },
    { label: "Booking Online", icon: Plus, href: "/member/reservation/add" },
    { label: "Pilihan Ruangan", icon: Building2, href: "/member/rooms" },
];

export type SidebarUser = {
    name: string;
    memberId: string;
    role?: string;
};

type SidebarProps = {
    user?: SidebarUser;
    onLogout?: () => void;
};

const defaultUser: SidebarUser = {
    name: "Andi Pratama",
    memberId: "MBR-0001",
    role: "Member",
};

export default function Sidebar({ user = defaultUser, onLogout }: SidebarProps) {
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
                            (item.href !== "/member/home" && pathname?.startsWith(item.href));

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
                        <p className="text-[#B7C8E8] text-xs mb-1">{user.memberId}</p>
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