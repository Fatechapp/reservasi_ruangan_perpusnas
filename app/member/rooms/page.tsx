// app/member/rooms/page.tsx

// app/member/rooms/page.tsx
"use client";

import { useMemo, useState } from "react";
import Sidebar from "@/components/member/MemberSidebar";
import { Search, ChevronDown, Users, Layers, ArrowRight } from "lucide-react";

type RoomType = {
    room_type_id: string;
    room_type: string;
    room_description: string;
};

type Room = {
    room_id: string;
    room_type_id: string;
    room_name: string;
    room_capacity: number;
};

const roomTypes: RoomType[] = [
    {
        room_type_id: "239f0042-a7ed-4b26-9174-219765e4ac66",
        room_type: "Auditorium",
        room_description: "Large room for seminars and events",
    },
    {
        room_type_id: "d6e4e903-c683-4353-9432-4b74b8ece339",
        room_type: "Meeting Room",
        room_description: "Meeting room for internal activities",
    },
    {
        room_type_id: "f6c8aade-563e-49fb-b0ba-a8e0714e0dff",
        room_type: "Discussion Room",
        room_description: "Small room for discussion",
    },
];

const rooms: Room[] = [
    {
        room_id: "213dab12-72e9-4d42-a15f-b536f85fe336",
        room_type_id: "f6c8aade-563e-49fb-b0ba-a8e0714e0dff",
        room_name: "Discussion Room A",
        room_capacity: 6,
    },
    {
        room_id: "4e9c83ed-5f1c-47c9-a4cf-debaa0fec139",
        room_type_id: "f6c8aade-563e-49fb-b0ba-a8e0714e0dff",
        room_name: "Discussion Room B",
        room_capacity: 8,
    },
    {
        room_id: "b90d7eb7-6ad5-4edf-8705-3f3ec29a6de0",
        room_type_id: "d6e4e903-c683-4353-9432-4b74b8ece339",
        room_name: "Meeting Room B",
        room_capacity: 20,
    },
    {
        room_id: "d36bbf41-579a-40a4-bc39-391edfc49fea",
        room_type_id: "239f0042-a7ed-4b26-9174-219765e4ac66",
        room_name: "Auditorium Perpusnas",
        room_capacity: 120,
    },
    {
        room_id: "f5ab2473-44bc-4037-a750-0b20f049e67d",
        room_type_id: "d6e4e903-c683-4353-9432-4b74b8ece339",
        room_name: "Meeting Room A",
        room_capacity: 12,
    },
];

const typeAccent: Record<string, string> = {
    Auditorium: "bg-[#FEF6E7] border-[#FCE9BE] text-[#B7791F]",
    "Meeting Room": "bg-[#E7F0FE] border-[#C9DCFB] text-[#1E4FA3]",
    "Discussion Room": "bg-[#E7F7EE] border-[#B9EAD1] text-[#1B9C5A]",
};

export default function RoomSelectionPage() {
    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("Semua Tipe");

    const roomTypeById = useMemo(
        () => Object.fromEntries(roomTypes.map((t) => [t.room_type_id, t])),
        []
    );

    const filteredRooms = rooms.filter((room) => {
        const type = roomTypeById[room.room_type_id];
        const matchesQuery =
            room.room_name.toLowerCase().includes(query.toLowerCase()) ||
            type?.room_type.toLowerCase().includes(query.toLowerCase());
        const matchesType =
            typeFilter === "Semua Tipe" || type?.room_type === typeFilter;
        return matchesQuery && matchesType;
    });

    return (
        <div className="min-h-screen w-full bg-white flex">
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 px-10 py-8">
                <h1 className="text-3xl font-extrabold text-[#0B2447] mb-2">
                    Pilihan Ruangan
                </h1>
                <p className="text-gray-500 text-sm mb-6">
                    Jelajahi ruangan yang tersedia sebelum membuat reservasi.
                </p>

                {/* Filters */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="relative flex-1 max-w-md">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Cari nama ruangan atau tipe..."
                            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3]"
                        />
                    </div>

                    <div className="relative">
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            className="appearance-none rounded-lg border border-gray-300 pl-4 pr-9 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3] min-w-[190px]"
                        >
                            <option>Semua Tipe</option>
                            {roomTypes.map((t) => (
                                <option key={t.room_type_id} value={t.room_type}>
                                    {t.room_type}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>

                {/* Room cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filteredRooms.map((room) => {
                        const type = roomTypeById[room.room_type_id];
                        const accent =
                            typeAccent[type?.room_type ?? ""] ??
                            "bg-gray-100 border-gray-200 text-gray-600";

                        return (
                            <div
                                key={room.room_id}
                                className="rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span
                                        className={`inline-flex items-center rounded-md border text-xs font-semibold px-2.5 py-1 ${accent}`}
                                    >
                                        {type?.room_type ?? "Unknown"}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-gray-400">
                                        <Users className="w-3.5 h-3.5" />
                                        {room.room_capacity} orang
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-gray-900 mb-1.5">
                                    {room.room_name}
                                </h3>

                                <p className="flex items-start gap-1.5 text-sm text-gray-500 mb-5 flex-1">
                                    <Layers className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                    {type?.room_description}
                                </p>

                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#1E4FA3] text-white text-sm font-semibold px-4 py-2.5 hover:bg-[#173f87] transition-colors"
                                >
                                    Reservasi Ruangan
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        );
                    })}
                </div>

                {filteredRooms.length === 0 && (
                    <div className="text-center text-sm text-gray-400 py-16">
                        Tidak ada ruangan yang cocok dengan pencarian Anda.
                    </div>
                )}
            </main>
        </div>
    );
}