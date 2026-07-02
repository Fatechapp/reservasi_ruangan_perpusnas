// app/member/reservation/%5Bid%5D/page.tsx
"use client";

import {
    ArrowLeft,
    Calendar,
    Clock,
    Building2,
    User,
    CheckCircle2,
    ClipboardList,
    Pencil,
    XCircle,
    Info,
    History,
} from "lucide-react";
import Sidebar from "@/components/member/MemberSidebar";

export default function BookingDetailPage() {
    const reservation = {
        id: "RSV-2025-0001",
        status: "Approved",
        date: "02 Juni 2025 (Senin)",
        createdAt: "30 Mei 2025, 14:25 WIB",
        updatedAt: "02 Juni 2025, 09:10 WIB",
        purpose: "Diskusi kelompok tugas akhir",
        approvedBy: "Admin Perpusnas",
        adminNote: "Reservasi disetujui. Selamat menggunakan ruangan.",
    };

    const member = {
        id: "MBR-0001",
        name: "Andi Pratama",
        phone: "0812-3456-7890",
        email: "andi.pratama@email.com",
    };

    const room = {
        name: "Ruang Diskusi 1",
        type: "Diskusi",
        capacity: "10 Orang",
        location: "Lantai 2",
    };

    const session = {
        startTime: "08:00 WIB",
        endTime: "10:00 WIB",
        duration: "2 Jam",
    };

    const timeline = [
        {
        time: "30 Mei 2025, 14:25 WIB",
        title: "Reservasi Dibuat",
        description: "Reservasi berhasil dibuat oleh member.",
        tag: "Andi Pratama",
        tagStyle: "bg-[#EAF2FE] border-[#CFE0FB] text-[#1E4FA3]",
        },
        {
        time: "31 Mei 2025, 10:15 WIB",
        title: "Menunggu Persetujuan",
        description: "Reservasi sedang menunggu persetujuan admin.",
        tag: "Sistem",
        tagStyle: "bg-[#FEF6E7] border-[#FCE9BE] text-[#B7791F]",
        },
        {
        time: "02 Juni 2025, 09:10 WIB",
        title: "Reservasi Disetujui",
        description: "Reservasi telah disetujui oleh Admin Perpusnas.",
        tag: "Admin Perpusnas",
        tagStyle: "bg-[#E7F7EE] border-[#B9EAD1] text-[#1B9C5A]",
        },
    ];

    return (
        <div className="min-h-screen w-full bg-white flex">
        {/* Sidebar */}
        <Sidebar
            user={{ name: "Andi Pratama", memberId: "MBR-0001", role: "Member" }}
            onLogout={() => {
                // TODO: hubungkan ke logic logout (mis. clear session lalu redirect ke /login)
            }}
        />

        {/* Main content */}
        <main className="flex-1 px-10 py-8">
            <button
            type="button"
            className="flex items-center gap-2 text-[#1E4FA3] font-semibold text-sm mb-3 hover:underline"
            >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Booking History
            </button>

            <div className="flex items-start justify-between mb-2">
            <h1 className="text-3xl font-extrabold text-[#0B2447]">
                Booking Detail
            </h1>
            <div className="rounded-xl bg-[#E7F7EE] border border-[#B9EAD1] px-5 py-3 text-right">
                <span className="flex items-center justify-end gap-1.5 text-[#1B9C5A] font-bold text-sm mb-0.5">
                <CheckCircle2 className="w-4 h-4" />
                Approved
                </span>
                <p className="text-xs text-[#1B9C5A]">Reservasi disetujui</p>
            </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-gray-500">ID Reservasi</span>
            <span className="rounded-md bg-[#EAF2FE] border border-[#CFE0FB] text-[#1E4FA3] text-sm font-semibold px-2.5 py-1">
                {reservation.id}
            </span>
            </div>

            <div className="space-y-6">
            {/* Informasi Reservasi */}
            <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-5">
                <ClipboardList className="w-5 h-5 text-[#1E4FA3]" />
                <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Informasi Reservasi
                </h2>
                </div>

                <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    ID Reservasi
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.id}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Tanggal Reservasi
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.date}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Diperbarui Pada
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.updatedAt}
                    </p>
                </div>

                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Status
                    </p>
                    <span className="inline-block rounded-md bg-[#E7F7EE] border border-[#B9EAD1] text-[#1B9C5A] text-xs font-semibold px-2.5 py-1">
                    {reservation.status}
                    </span>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Dibuat Pada
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.createdAt}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Catatan Admin
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.adminNote}
                    </p>
                </div>

                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Tujuan
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.purpose}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Disetujui Oleh
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.approvedBy}
                    </p>
                </div>
                </div>
            </div>

            {/* Informasi Member & Informasi Ruangan */}
            <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-5">
                    <User className="w-5 h-5 text-[#1E4FA3]" />
                    <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Informasi Member
                    </h2>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Member ID</span>
                    <span className="text-sm text-gray-900 font-medium">
                        {member.id}
                    </span>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Nama Member</span>
                    <span className="text-sm text-gray-900 font-medium">
                        {member.name}
                    </span>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Nomor Telepon</span>
                    <span className="text-sm text-gray-900 font-medium">
                        {member.phone}
                    </span>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Email</span>
                    <span className="text-sm text-gray-900 font-medium">
                        {member.email}
                    </span>
                    </div>
                </div>
                </div>

                <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-5">
                    <Building2 className="w-5 h-5 text-[#1E4FA3]" />
                    <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Informasi Ruangan
                    </h2>
                </div>

                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-4">
                    <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">
                        Nama Ruangan
                        </p>
                        <p className="text-sm text-gray-900 font-medium">
                        {room.name}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">
                        Tipe Ruangan
                        </p>
                        <p className="text-sm text-gray-900 font-medium">
                        {room.type}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">
                        Kapasitas
                        </p>
                        <p className="text-sm text-gray-900 font-medium">
                        {room.capacity}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">
                        Lokasi
                        </p>
                        <p className="text-sm text-gray-900 font-medium">
                        {room.location}
                        </p>
                    </div>
                    </div>

                    <div className="w-40 h-32 rounded-lg overflow-hidden bg-[#DCE9FB] flex items-center justify-center shrink-0">
                    <Building2 className="w-10 h-10 text-[#5F8FCF]" />
                    </div>
                </div>
                </div>
            </div>

            {/* Informasi Waktu */}
            <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-5">
                <Clock className="w-5 h-5 text-[#1E4FA3]" />
                <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Informasi Waktu
                </h2>
                </div>

                <div className="flex items-center gap-4">
                <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Waktu Mulai
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {session.startTime}
                    </p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Waktu Selesai
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {session.endTime}
                    </p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Durasi
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {session.duration}
                    </p>
                </div>

                <div className="flex items-start gap-2 rounded-lg bg-[#EAF2FE] border border-[#CFE0FB] px-4 py-3 flex-1">
                    <Info className="w-4 h-4 text-[#1E4FA3] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#1E4FA3]">
                    Datang lebih awal minimal 15 menit sebelum waktu mulai.
                    </p>
                </div>
                </div>
            </div>

            {/* Riwayat Reservasi */}
            <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-6">
                <History className="w-5 h-5 text-[#1E4FA3]" />
                <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Riwayat Reservasi
                </h2>
                </div>

                <div className="pl-2">
                {timeline.map((item, idx) => (
                    <div
                    key={item.title}
                    className="flex gap-4 relative pb-8 last:pb-0"
                    >
                    <div className="flex flex-col items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1B9C5A] mt-1.5 shrink-0" />
                        {idx !== timeline.length - 1 && (
                        <span className="w-px flex-1 bg-gray-200 mt-1" />
                        )}
                    </div>
                    <div className="flex-1 flex items-start justify-between">
                        <div>
                        <p className="text-xs text-gray-500 mb-1">
                            {item.time}
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                            {item.title}
                        </p>
                        <p className="text-sm text-gray-500">
                            {item.description}
                        </p>
                        </div>
                        <span
                        className={`rounded-md border text-xs font-semibold px-2.5 py-1 shrink-0 ${item.tagStyle}`}
                        >
                        {item.tag}
                        </span>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Footer actions */}
            <div className="flex justify-end gap-3 pb-4">
                <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                <Pencil className="w-4 h-4" />
                Edit Reservasi
                </button>
                <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                >
                <XCircle className="w-4 h-4" />
                Batalkan Reservasi
                </button>
            </div>
            </div>
        </main>
        </div>
    );
}
