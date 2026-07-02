"use client";

import {
    Home,
    Calendar,
    Clock,
    Plus,
    Building2,
    ChevronRight,
    User,
    LogOut,
    BookOpen,
} from "lucide-react";

export default function MemberHomePage() {
    const menuItems = [
        { label: "Home", icon: Home, active: true },
        { label: "My Booking", icon: Calendar, active: false },
        { label: "Booking History", icon: Clock, active: false },
        { label: "Booking Online", icon: Plus, active: false },
        { label: "Pilihan Ruangan", icon: Building2, active: false },
    ];

    const quickActions = [
        {
        title: "My Booking",
        description: "Lihat dan kelola booking aktif Anda.",
        icon: Calendar,
        bg: "bg-[#EAF2FE]",
        iconBg: "bg-[#CFE0FB]",
        iconColor: "text-[#1E4FA3]",
        },
        {
        title: "Booking History",
        description: "Lihat riwayat booking yang telah selesai.",
        icon: Clock,
        bg: "bg-[#EAF9EF]",
        iconBg: "bg-[#C7EFD4]",
        iconColor: "text-[#1B9C5A]",
        },
        {
        title: "Booking Online",
        description: "Lakukan pemesanan ruangan baru.",
        icon: Plus,
        bg: "bg-[#FEF6E7]",
        iconBg: "bg-[#FCE9BE]",
        iconColor: "text-[#B7791F]",
        },
        {
        title: "Pilihan Ruangan",
        description: "Lihat informasi dan pilihan ruangan.",
        icon: Building2,
        bg: "bg-[#F5EEFE]",
        iconBg: "bg-[#E4D2FA]",
        iconColor: "text-[#7C3AED]",
        },
    ];

    const myBookings = [
        {
        room: "Ruang Diskusi 1",
        date: "02 Juni 2025",
        time: "08:00 - 10:00 WIB",
        status: "Approved",
        },
        {
        room: "Ruang Baca 2",
        date: "03 Juni 2025",
        time: "13:00 - 15:00 WIB",
        status: "Pending",
        },
        {
        room: "Ruang Seminar A",
        date: "05 Juni 2025",
        time: "09:00 - 12:00 WIB",
        status: "Cancelled",
        },
    ];

    const statusStyles: Record<string, string> = {
        Approved: "bg-[#E7F7EE] border-[#B9EAD1] text-[#1B9C5A]",
        Pending: "bg-[#EAF2FE] border-[#CFE0FB] text-[#1E4FA3]",
        Cancelled: "bg-gray-100 border-gray-200 text-gray-500",
    };

    const rooms = [
        {
        name: "Ruang Diskusi 1",
        description: "Cocok untuk diskusi kelompok dan meeting kecil.",
        capacity: "10 Orang",
        floor: "Lantai 2",
        },
        {
        name: "Ruang Seminar A",
        description: "Ruangan berkapasitas besar untuk seminar dan presentasi.",
        capacity: "50 Orang",
        floor: "Lantai 3",
        },
        {
        name: "Ruang Baca 2",
        description: "Nyaman untuk membaca dan belajar individu.",
        capacity: "20 Orang",
        floor: "Lantai 1",
        },
    ];

    return (
        <div className="min-h-screen w-full bg-white flex">
        {/* Sidebar */}
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
                {menuItems.map((item) => (
                <button
                    key={item.label}
                    type="button"
                    className={`w-full flex items-center gap-3 rounded-lg text-sm font-semibold px-4 py-3 transition-colors ${
                    item.active
                        ? "bg-[#1E4FA3] text-white shadow-sm"
                        : "text-[#2C4A75] hover:bg-white/60"
                    }`}
                >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                </button>
                ))}
            </nav>
            </div>

            <div>
            <div className="flex items-center gap-3 px-5 py-4 bg-[#0B2E6B]">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-[#0B2E6B]" />
                </div>
                <div className="leading-tight">
                <p className="text-white text-sm font-semibold">Andi Pratama</p>
                <p className="text-[#B7C8E8] text-xs mb-1">MBR-0001</p>
                <span className="inline-block rounded bg-[#1E4FA3] text-white text-[10px] font-semibold px-2 py-0.5">
                    Member
                </span>
                </div>
            </div>
            <div className="px-4 py-4 bg-white">
                <button
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#F04438] text-white text-sm font-semibold px-4 py-2.5 hover:bg-[#d63c31] transition-colors"
                >
                <LogOut className="w-4 h-4" />
                Logout
                </button>
            </div>
            </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-10 py-8">
            {/* Hero */}
            <div className="flex items-start justify-between mb-8">
            <div>
                <p className="text-gray-500 text-sm mb-1">Selamat datang,</p>
                <h1 className="text-3xl font-extrabold text-[#0B2447] mb-2">
                Andi Pratama!
                </h1>
                <p className="text-gray-500 text-sm">
                Kelola reservasi ruangan Anda dengan mudah.
                </p>
            </div>

            <svg
                viewBox="0 0 300 140"
                className="w-72 h-32 hidden md:block"
                aria-hidden="true"
            >
                <rect x="0" y="0" width="300" height="140" fill="none" />
                {/* Bookshelf */}
                <rect x="200" y="10" width="90" height="70" rx="4" fill="#DCE9FB" />
                <line x1="200" y1="40" x2="290" y2="40" stroke="#B7C8E8" strokeWidth="2" />
                <rect x="208" y="16" width="6" height="20" fill="#7FA6DE" />
                <rect x="218" y="16" width="6" height="20" fill="#A9C4EA" />
                <rect x="228" y="16" width="6" height="20" fill="#5F8FCF" />
                <rect x="238" y="16" width="6" height="20" fill="#A9C4EA" />
                <rect x="208" y="46" width="6" height="20" fill="#A9C4EA" />
                <rect x="218" y="46" width="6" height="20" fill="#5F8FCF" />
                <rect x="228" y="46" width="6" height="20" fill="#7FA6DE" />
                {/* Plant */}
                <circle cx="270" cy="95" r="8" fill="#B7C8E8" />
                <path
                d="M270 95 C265 85 260 82 258 75 M270 95 C275 85 280 82 282 75 M270 95 C270 82 270 78 270 70"
                stroke="#4CAF6E"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                />
                {/* Desk */}
                <rect x="30" y="95" width="220" height="8" rx="2" fill="#5F8FCF" />
                <rect x="45" y="103" width="8" height="30" fill="#3A5A85" />
                <rect x="225" y="103" width="8" height="30" fill="#3A5A85" />
                {/* Laptops */}
                <rect x="70" y="70" width="34" height="24" rx="2" fill="#0B2E6B" />
                <rect x="73" y="73" width="28" height="18" rx="1" fill="#7FA6DE" />
                <rect x="66" y="94" width="42" height="4" rx="1" fill="#0B2E6B" />
                <rect x="130" y="75" width="30" height="20" rx="2" fill="#1E4FA3" />
                <rect x="133" y="78" width="24" height="14" rx="1" fill="#A9C4EA" />
                <rect x="126" y="95" width="38" height="4" rx="1" fill="#1E4FA3" />
            </svg>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-4 gap-5 mb-8">
            {quickActions.map((action) => (
                <button
                key={action.title}
                type="button"
                className={`${action.bg} rounded-xl p-5 text-left flex items-start justify-between hover:shadow-md transition-shadow`}
                >
                <div className="flex items-start gap-3">
                    <div
                    className={`${action.iconBg} rounded-lg w-10 h-10 flex items-center justify-center shrink-0`}
                    >
                    <action.icon className={`w-5 h-5 ${action.iconColor}`} />
                    </div>
                    <div>
                    <p className="font-bold text-sm text-gray-900 mb-1">
                        {action.title}
                    </p>
                    <p className="text-xs text-gray-500 leading-snug">
                        {action.description}
                    </p>
                    </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
                </button>
            ))}
            </div>

            {/* My Booking & Pilihan Ruangan */}
            <div className="grid grid-cols-2 gap-6">
            {/* My Booking */}
            <div className="rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#1E4FA3]" />
                    <h2 className="font-bold text-[#0B2447]">My Booking</h2>
                </div>
                <a href="#" className="text-sm text-[#1E4FA3] font-semibold hover:underline">
                    Lihat semua
                </a>
                </div>

                <div className="space-y-3 mb-4">
                {myBookings.map((booking) => (
                    <button
                    key={booking.room + booking.date}
                    type="button"
                    className="w-full flex items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition-colors text-left"
                    >
                    <div className="w-16 h-14 rounded-lg bg-[#DCE9FB] flex items-center justify-center shrink-0 overflow-hidden">
                        <BookOpen className="w-6 h-6 text-[#5F8FCF]" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-gray-900 mb-1">
                        {booking.room}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {booking.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {booking.time}
                        </span>
                        </div>
                    </div>
                    <span
                        className={`rounded-md border text-xs font-semibold px-2.5 py-1 shrink-0 ${statusStyles[booking.status]}`}
                    >
                        {booking.status}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                    </button>
                ))}
                </div>

                <button
                type="button"
                className="w-full rounded-lg border border-[#CFE0FB] text-[#1E4FA3] text-sm font-semibold py-2.5 hover:bg-[#EAF2FE] transition-colors"
                >
                Lihat semua booking aktif
                </button>
            </div>

            {/* Pilihan Ruangan */}
            <div className="rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#1E4FA3]" />
                    <h2 className="font-bold text-[#0B2447]">
                    Informasi Pilihan Ruangan
                    </h2>
                </div>
                <a href="#" className="text-sm text-[#1E4FA3] font-semibold hover:underline">
                    Lihat semua
                </a>
                </div>

                <div className="space-y-3 mb-4">
                {rooms.map((room) => (
                    <div
                    key={room.name}
                    className="w-full flex items-center gap-3 rounded-lg border border-gray-200 p-3"
                    >
                    <div className="w-16 h-14 rounded-lg bg-[#DCE9FB] flex items-center justify-center shrink-0 overflow-hidden">
                        <BookOpen className="w-6 h-6 text-[#5F8FCF]" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-gray-900 mb-1">
                        {room.name}
                        </p>
                        <p className="text-xs text-gray-500 leading-snug mb-1">
                        {room.description}
                        </p>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Building2 className="w-3 h-3" />
                        {room.floor}
                        </span>
                    </div>
                    <span className="rounded-md bg-[#EAF2FE] border border-[#CFE0FB] text-[#1E4FA3] text-xs font-semibold px-2.5 py-1 shrink-0 text-center leading-tight">
                        Kapasitas
                        <br />
                        {room.capacity}
                    </span>
                    </div>
                ))}
                </div>

                <button
                type="button"
                className="w-full rounded-lg border border-[#CFE0FB] text-[#1E4FA3] text-sm font-semibold py-2.5 hover:bg-[#EAF2FE] transition-colors"
                >
                Lihat semua ruangan
                </button>
            </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-8">
            © 2025 Perpustakaan Nasional RI. All rights reserved.
            </p>
        </main>
        </div>
    );
}