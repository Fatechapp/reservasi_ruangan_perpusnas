// app/member/reservation/history/page.tsx
"use client";

import Sidebar from "@/components/member/MemberSidebar";
import {
    ArrowLeft,
    Calendar,
    Search,
    ChevronDown,
    CheckCircle2,
    XCircle,
    MinusCircle,
    Eye,
    Layers,
    Clock,
} from "lucide-react";

export default function BookingHistoryPage() {
    const bookings = [
        {
        no: 1,
        id: "RSV-2025-0001",
        room: "Ruang Diskusi 1",
        roomType: "Diskusi",
        floor: "Lantai 2",
        date: "02 Juni 2025",
        day: "Senin",
        time: "08:00 - 10:00",
        duration: "2 Jam",
        purpose: "Diskusi kelompok tugas akhir",
        status: "Approved",
        },
        {
        no: 2,
        id: "RSV-2025-0002",
        room: "Ruang Baca 2",
        roomType: "Baca",
        floor: "Lantai 1",
        date: "03 Juni 2025",
        day: "Selasa",
        time: "13:00 - 15:00",
        duration: "2 Jam",
        purpose: "Belajar mandiri",
        status: "Completed",
        },
        {
        no: 3,
        id: "RSV-2025-0003",
        room: "Ruang Seminar A",
        roomType: "Seminar",
        floor: "Lantai 3",
        date: "05 Juni 2025",
        day: "Kamis",
        time: "09:00 - 12:00",
        duration: "3 Jam",
        purpose: "Seminar proposal",
        status: "Cancelled",
        },
        {
        no: 4,
        id: "RSV-2025-0004",
        room: "Ruang Diskusi 2",
        roomType: "Diskusi",
        floor: "Lantai 2",
        date: "10 Mei 2025",
        day: "Sabtu",
        time: "10:00 - 12:00",
        duration: "2 Jam",
        purpose: "Rapat divisi",
        status: "Rejected",
        },
        {
        no: 5,
        id: "RSV-2025-0005",
        room: "Ruang Baca 1",
        roomType: "Baca",
        floor: "Lantai 1",
        date: "28 April 2025",
        day: "Senin",
        time: "14:00 - 16:00",
        duration: "2 Jam",
        purpose: "Persiapan ujian",
        status: "Completed",
        },
    ];

    const statusConfig: Record<
        string,
        { style: string; icon: typeof CheckCircle2 }
    > = {
        Approved: {
        style: "bg-[#E7F7EE] border-[#B9EAD1] text-[#1B9C5A]",
        icon: CheckCircle2,
        },
        Completed: {
        style: "bg-[#FEF6E7] border-[#FCE9BE] text-[#B7791F]",
        icon: Clock,
        },
        Cancelled: {
        style: "bg-[#FDECEC] border-[#F8CACA] text-[#E0372B]",
        icon: XCircle,
        },
        Rejected: {
        style: "bg-gray-100 border-gray-200 text-gray-500",
        icon: MinusCircle,
        },
    };

    return (
        <div className="min-h-screen w-full bg-white flex">
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 px-10 py-8">
            <button
            type="button"
            className="flex items-center gap-2 text-[#1E4FA3] font-semibold text-sm mb-3 hover:underline"
            >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
            </button>

            <h1 className="text-3xl font-extrabold text-[#0B2447] mb-2">
            Booking History
            </h1>
            <p className="text-gray-500 text-sm mb-6">
            Lihat riwayat semua reservasi ruangan yang telah Anda buat.
            </p>

            <div className="rounded-xl border border-gray-200 shadow-sm">
            {/* Filters */}
            <div className="flex items-center gap-3 p-6">
                <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Cari berdasarkan nama ruangan atau status..."
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3]"
                />
                </div>

                <div className="relative">
                <select className="appearance-none rounded-lg border border-gray-300 pl-4 pr-9 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3] min-w-[160px]">
                    <option>Semua Status</option>
                    <option>Approved</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                    <option>Rejected</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shrink-0"
                >
                <Calendar className="w-4 h-4" />
                Pilih Tanggal
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-[#F4F8FE] border-y border-gray-200">
                    <th className="text-left text-xs font-bold text-gray-600 px-6 py-3.5 whitespace-nowrap">
                        No
                    </th>
                    <th className="text-left text-xs font-bold text-gray-600 px-3 py-3.5 whitespace-nowrap">
                        ID Reservasi
                    </th>
                    <th className="text-left text-xs font-bold text-gray-600 px-3 py-3.5 whitespace-nowrap">
                        Ruangan
                    </th>
                    <th className="text-left text-xs font-bold text-gray-600 px-3 py-3.5 whitespace-nowrap">
                        Tanggal
                    </th>
                    <th className="text-left text-xs font-bold text-gray-600 px-3 py-3.5 whitespace-nowrap">
                        Waktu
                    </th>
                    <th className="text-left text-xs font-bold text-gray-600 px-3 py-3.5 whitespace-nowrap">
                        Tujuan
                    </th>
                    <th className="text-left text-xs font-bold text-gray-600 px-3 py-3.5 whitespace-nowrap">
                        Status
                    </th>
                    <th className="text-left text-xs font-bold text-gray-600 px-6 py-3.5 whitespace-nowrap">
                        Aksi
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((b) => {
                    const status = statusConfig[b.status];
                    const StatusIcon = status.icon;
                    return (
                        <tr
                        key={b.id}
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60"
                        >
                        <td className="px-6 py-5 text-sm text-gray-700 align-top">
                            {b.no}
                        </td>
                        <td className="px-3 py-5 text-sm font-semibold text-gray-900 align-top whitespace-nowrap">
                            {b.id}
                        </td>
                        <td className="px-3 py-5 align-top">
                            <p className="text-sm font-bold text-gray-900">
                            {b.room}
                            </p>
                            <p className="text-sm text-gray-500">{b.roomType}</p>
                            <p className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                            <Layers className="w-3 h-3" />
                            {b.floor}
                            </p>
                        </td>
                        <td className="px-3 py-5 align-top whitespace-nowrap">
                            <p className="text-sm text-gray-900">{b.date}</p>
                            <p className="text-sm text-gray-500">({b.day})</p>
                        </td>
                        <td className="px-3 py-5 align-top whitespace-nowrap">
                            <p className="text-sm text-gray-900">{b.time}</p>
                            <p className="text-sm text-gray-500">{b.duration}</p>
                        </td>
                        <td className="px-3 py-5 align-top text-sm text-gray-700 max-w-[180px]">
                            {b.purpose}
                        </td>
                        <td className="px-3 py-5 align-top">
                            <span
                            className={`inline-flex items-center gap-1.5 rounded-md border text-xs font-semibold px-2.5 py-1.5 whitespace-nowrap ${status.style}`}
                            >
                            <StatusIcon className="w-3.5 h-3.5" />
                            {b.status}
                            </span>
                        </td>
                        <td className="px-6 py-5 align-top">
                            <button
                            type="button"
                            className="flex items-center gap-1.5 rounded-lg border border-[#CFE0FB] text-[#1E4FA3] text-xs font-semibold px-3 py-1.5 hover:bg-[#EAF2FE] transition-colors whitespace-nowrap"
                            >
                            <Eye className="w-3.5 h-3.5" />
                            Detail
                            </button>
                        </td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-5">
                <p className="text-sm text-gray-500">
                Menampilkan 1 - 5 dari 12 data
                </p>
                <div className="flex items-center gap-2">
                <button
                    type="button"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
                    disabled
                >
                    Previous
                </button>
                <button
                    type="button"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1E4FA3] text-white text-sm font-semibold"
                >
                    1
                </button>
                <button
                    type="button"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    2
                </button>
                <button
                    type="button"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    3
                </button>
                <button
                    type="button"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    Next
                </button>
                </div>
            </div>
            </div>
        </main>
        </div>
    );
}