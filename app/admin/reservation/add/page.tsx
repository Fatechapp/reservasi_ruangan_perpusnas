"use client";

import { useState, useMemo } from "react";
import { ArrowLeft, Calendar, Clock, LogOut, Search, User, CalendarCheck, Info } from "lucide-react";

export default function AddRoomReservationPage() {
    const [memberId, setMemberId] = useState("");
    const [memberName, setMemberName] = useState("");
    const [roomName, setRoomName] = useState("");
    const [roomType, setRoomType] = useState("");
    const [roomCapacity, setRoomCapacity] = useState("");
    const [reservationDate, setReservationDate] = useState("");
    const [purpose, setPurpose] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    // Hardcoded room options (nama, tipe, kapasitas)
    const rooms = [
        { name: "Ruang Diskusi A", type: "Discussion Room", capacity: "6 Orang" },
        { name: "Ruang Diskusi B", type: "Discussion Room", capacity: "8 Orang" },
        { name: "Ruang Rapat Utama", type: "Meeting Room", capacity: "20 Orang" },
        { name: "Ruang Baca Privat", type: "Private Reading Room", capacity: "2 Orang" },
        { name: "Auditorium Mini", type: "Event Room", capacity: "50 Orang" },
    ];

    const handleRoomChange = (value: string) => {
        setRoomName(value);
        const selected = rooms.find((r) => r.name === value);
        if (selected) {
        setRoomType(selected.type);
        setRoomCapacity(selected.capacity);
        } else {
        setRoomType("");
        setRoomCapacity("");
        }
    };

    const handleMemberIdSearch = () => {
        // Simulasi pencarian member berdasarkan Member ID (hardcode)
        if (memberId.trim() === "") {
        setMemberName("");
        return;
        }
        setMemberName("Andi Saputra");
    };

    const duration = useMemo(() => {
        if (!startTime || !endTime) return "";
        const [sh, sm] = startTime.split(":").map(Number);
        const [eh, em] = endTime.split(":").map(Number);
        if (
        Number.isNaN(sh) ||
        Number.isNaN(sm) ||
        Number.isNaN(eh) ||
        Number.isNaN(em)
        )
        return "";
        let startMinutes = sh * 60 + sm;
        let endMinutes = eh * 60 + em;
        let diff = endMinutes - startMinutes;
        if (diff <= 0) return "";
        const hours = Math.floor(diff / 60);
        const minutes = diff % 60;
        if (hours === 0) return `${minutes} menit`;
        if (minutes === 0) return `${hours} jam`;
        return `${hours} jam ${minutes} menit`;
    }, [startTime, endTime]);

    const endTimeInvalid =
        startTime !== "" && endTime !== "" && endTime <= startTime;

    const handleCancel = () => {
        setMemberId("");
        setMemberName("");
        setRoomName("");
        setRoomType("");
        setRoomCapacity("");
        setReservationDate("");
        setPurpose("");
        setStartTime("");
        setEndTime("");
    };

    const handleSubmit = () => {
        alert("Reservasi ruangan berhasil dibuat (simulasi).");
    };

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

            <div className="px-0">
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

            <h1 className="text-3xl font-extrabold text-[#0B2447] mb-6">
            Add Room Reservation
            </h1>

            <div className="rounded-xl border border-gray-200 shadow-sm max-w-5xl">
            <div className="p-8">
                <h2 className="text-[#1E4FA3] font-bold text-lg mb-5">
                Reservation Information
                </h2>

                <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {/* Member ID */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Member ID
                    </label>
                    <div className="relative">
                    <input
                        type="text"
                        value={memberId}
                        onChange={(e) => setMemberId(e.target.value)}
                        onBlur={handleMemberIdSearch}
                        placeholder="Enter Member ID"
                        className="w-full rounded-lg border border-gray-300 pl-3 pr-11 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3]"
                    />
                    <button
                        type="button"
                        onClick={handleMemberIdSearch}
                        className="absolute right-0 top-0 h-full w-11 flex items-center justify-center border-l border-gray-300 rounded-r-lg text-gray-500 hover:bg-gray-50"
                    >
                        <Search className="w-4 h-4" />
                    </button>
                    </div>
                </div>

                {/* Member Name */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Member Name
                    </label>
                    <input
                    type="text"
                    value={memberName}
                    readOnly
                    placeholder="Member name will appear here"
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 text-sm text-gray-500 placeholder-gray-400 cursor-not-allowed"
                    />
                </div>

                {/* Room Name */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Room Name
                    </label>
                    <select
                    value={roomName}
                    onChange={(e) => handleRoomChange(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3] bg-white"
                    >
                    <option value="" disabled>
                        Select Room
                    </option>
                    {rooms.map((r) => (
                        <option key={r.name} value={r.name}>
                        {r.name}
                        </option>
                    ))}
                    </select>
                </div>

                {/* Room Type */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Room Type
                    </label>
                    <input
                    type="text"
                    value={roomType}
                    readOnly
                    placeholder="Room type will appear here"
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 text-sm text-gray-500 placeholder-gray-400 cursor-not-allowed"
                    />
                </div>

                {/* Room Capacity */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Room Capacity
                    </label>
                    <input
                    type="text"
                    value={roomCapacity}
                    readOnly
                    placeholder="Room capacity will appear here"
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 text-sm text-gray-500 placeholder-gray-400 cursor-not-allowed"
                    />
                </div>

                {/* Reservation Date */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Reservation Date
                    </label>
                    <div className="relative">
                    <input
                        type="date"
                        value={reservationDate}
                        onChange={(e) => setReservationDate(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 pl-3 pr-10 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3] [color-scheme:light]"
                    />
                    <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>
                </div>

                {/* Purpose */}
                <div className="mt-5">
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Purpose <span className="font-normal text-gray-500">(Optional)</span>
                </label>
                <textarea
                    value={purpose}
                    onChange={(e) => {
                    if (e.target.value.length <= 255) setPurpose(e.target.value);
                    }}
                    placeholder="Enter purpose of reservation"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3]"
                />
                <p className="text-right text-xs text-gray-400 mt-1">
                    {purpose.length} / 255
                </p>
                </div>

                <hr className="my-6 border-gray-200" />

                {/* Session Information */}
                <h2 className="text-[#1E4FA3] font-bold text-lg mb-4">
                Session Information
                </h2>

                <div className="flex items-start gap-2 rounded-lg bg-[#EAF2FE] border border-[#CFE0FB] px-4 py-3 mb-5">
                <Info className="w-4 h-4 text-[#1E4FA3] mt-0.5 shrink-0" />
                <p className="text-sm text-[#1E4FA3]">
                    Please select the start time and end time for the reservation.
                </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                {/* Start Time */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Start Time
                    </label>
                    <div className="relative">
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 pl-3 pr-10 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3] [color-scheme:light]"
                    />
                    <Clock className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>

                {/* End Time */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    End Time
                    </label>
                    <div className="relative">
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className={`w-full rounded-lg border pl-3 pr-10 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 [color-scheme:light] ${
                        endTimeInvalid
                            ? "border-red-400 focus:ring-red-300 focus:border-red-400"
                            : "border-gray-300 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3]"
                        }`}
                    />
                    <Clock className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>

                {/* Duration */}
                <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Duration
                    </label>
                    <input
                    type="text"
                    value={duration}
                    readOnly
                    placeholder="Duration will appear here"
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 text-sm text-gray-500 placeholder-gray-400 cursor-not-allowed"
                    />
                </div>
                </div>

                <p
                className={`text-xs mt-2 ${
                    endTimeInvalid ? "text-red-500" : "text-gray-500"
                }`}
                >
                End time must be after start time.
                </p>
            </div>

            {/* Footer actions */}
            <div className="flex justify-end items-center gap-3 border-t border-gray-200 px-8 py-5">
                <button
                type="button"
                onClick={handleCancel}
                className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                Cancel
                </button>
                <button
                type="button"
                onClick={handleSubmit}
                disabled={
                    !memberId ||
                    !roomName ||
                    !reservationDate ||
                    !startTime ||
                    !endTime ||
                    endTimeInvalid
                }
                className="flex items-center gap-2 rounded-lg bg-[#1E4FA3] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#193f85] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                <CalendarCheck className="w-4 h-4" />
                Book Reservation
                </button>
            </div>
            </div>
        </main>
        </div>
    );
}