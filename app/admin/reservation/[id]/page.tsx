"use client";

import {
    ArrowLeft,
    CalendarCheck,
    CheckCircle2,
    ClipboardList,
    User,
    Building2,
    Clock,
    History,
    Pencil,
    Trash2,
    LogOut,
} from "lucide-react";

export default function ReservationDetailPage() {
    // Data reservasi hardcode
    const reservation = {
        id: "RSV-2025-0001",
        status: "Approved",
        memberId: "MBR-0001",
        adminId: "ADM-0001",
        reservationDate: "2 Juni 2025",
        updatedAt: "2 Juni 2025, 10:30 WIB",
        purpose: "Diskusi kelompok tugas akhir",
        createdAt: "2 Juni 2025, 09:15 WIB",
    };

    const member = {
        id: "MBR-0001",
        name: "Andi Pratama",
        phone: "0812-3456-7890",
        role: "Member",
    };

    const room = {
        name: "Ruang Diskusi 1",
        capacity: "10 Orang",
        type: "Floor",
        floor: "Lantai 2",
    };

    const session = {
        startTime: "08:00",
        endTime: "10:00",
        duration: "2 Jam",
        sessionId: "SES-0001",
    };

    const timeline = [
        {
        time: "2 Juni 2025, 09:15 WIB",
        title: "Reservation Created",
        description: "Reservation has been created by Admin",
        by: "ADM-0001",
        },
        {
        time: "2 Juni 2025, 10:30 WIB",
        title: "Reservation Approved",
        description: "Reservation has been approved",
        by: "ADM-0001",
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

            <div className="px-4">
                <button
                type="button"
                className="w-full flex items-center gap-2 rounded-lg bg-[#1E4FA3] text-white text-sm font-semibold px-4 py-3 shadow-sm hover:bg-[#193f85] transition-colors"
                >
                <CalendarCheck className="w-4 h-4" />
                Room Reservation
                </button>
            </div>
            </div>

            <div>
            <div className="flex items-center gap-3 px-5 py-4 bg-[#0B2E6B]">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-[#0B2E6B]" />
                </div>
                <div className="leading-tight">
                <p className="text-white text-sm font-semibold">Admin Perpusnas</p>
                <p className="text-[#B7C8E8] text-xs">Administrator</p>
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
            <button
            type="button"
            className="flex items-center gap-2 text-[#1E4FA3] font-semibold text-sm mb-3 hover:underline"
            >
            <ArrowLeft className="w-4 h-4" />
            Back to Reservation
            </button>

            <div className="flex items-start justify-between mb-2">
            <h1 className="text-3xl font-extrabold text-[#0B2447]">
                Reservation Detail
            </h1>
            <span className="flex items-center gap-1.5 rounded-lg bg-[#E7F7EE] border border-[#B9EAD1] text-[#1B9C5A] text-sm font-semibold px-3.5 py-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Approved
            </span>
            </div>

            <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-gray-500">Reservation ID</span>
            <span className="rounded-md bg-[#EAF2FE] border border-[#CFE0FB] text-[#1E4FA3] text-sm font-semibold px-2.5 py-1">
                {reservation.id}
            </span>
            </div>

            <div className="max-w-5xl space-y-6">
            {/* Reservation Overview */}
            <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-5">
                <ClipboardList className="w-5 h-5 text-[#1E4FA3]" />
                <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Reservation Overview
                </h2>
                </div>

                <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Reservation ID
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.id}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Member ID
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.memberId}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Reservation Date
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.reservationDate}
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
                    Admin ID
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.adminId}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Updated At
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.updatedAt}
                    </p>
                </div>

                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Purpose
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.purpose}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Created At
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {reservation.createdAt}
                    </p>
                </div>
                </div>
            </div>

            {/* Member Information & Room Information */}
            <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-5">
                    <User className="w-5 h-5 text-[#1E4FA3]" />
                    <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Member Information
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
                    <span className="text-sm text-gray-500">Member Name</span>
                    <span className="text-sm text-gray-900 font-medium">
                        {member.name}
                    </span>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Phone Number</span>
                    <span className="text-sm text-gray-900 font-medium">
                        {member.phone}
                    </span>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Role</span>
                    <span className="rounded-md bg-[#EAF2FE] border border-[#CFE0FB] text-[#1E4FA3] text-xs font-semibold px-2.5 py-1">
                        {member.role}
                    </span>
                    </div>
                </div>
                </div>

                <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-5">
                    <Building2 className="w-5 h-5 text-[#1E4FA3]" />
                    <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Room Information
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                        Room Name
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                        {room.name}
                    </p>
                    </div>
                    <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                        Room Capacity
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                        {room.capacity}
                    </p>
                    </div>
                    <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                        Room Type
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                        {room.type}
                    </p>
                    </div>
                    <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                        Floor
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                        {room.floor}
                    </p>
                    </div>
                </div>
                </div>
            </div>

            {/* Session Information */}
            <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-5">
                <Clock className="w-5 h-5 text-[#1E4FA3]" />
                <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Session Information
                </h2>
                </div>

                <div className="grid grid-cols-4 gap-x-8">
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Start Time
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {session.startTime}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    End Time
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {session.endTime}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Duration
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {session.duration}
                    </p>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                    Session ID
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                    {session.sessionId}
                    </p>
                </div>
                </div>
            </div>

            {/* Timeline / History */}
            <div className="rounded-xl border border-gray-200 shadow-sm p-7">
                <div className="flex items-center gap-2 mb-6">
                <History className="w-5 h-5 text-[#1E4FA3]" />
                <h2 className="text-[#1E4FA3] font-bold text-lg">
                    Timeline / History
                </h2>
                </div>

                <div className="relative pl-2">
                {timeline.map((item, idx) => (
                    <div key={item.title} className="flex gap-4 relative pb-8 last:pb-0">
                    <div className="flex flex-col items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1B9C5A] mt-1.5 shrink-0" />
                        {idx !== timeline.length - 1 && (
                        <span className="w-px flex-1 bg-gray-200 mt-1" />
                        )}
                    </div>
                    <div className="flex-1 flex items-start justify-between">
                        <div>
                        <p className="text-xs text-gray-500 mb-1">{item.time}</p>
                        <p className="text-sm font-bold text-gray-900">
                            {item.title}
                        </p>
                        <p className="text-sm text-gray-500">
                            {item.description}
                        </p>
                        </div>
                        <span className="rounded-md bg-gray-100 border border-gray-200 text-gray-600 text-xs font-semibold px-2.5 py-1 shrink-0">
                        {item.by}
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
                Edit Reservation
                </button>
                <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                >
                <Trash2 className="w-4 h-4" />
                Cancel Reservation
                </button>
            </div>
            </div>
        </main>
        </div>
    );
}