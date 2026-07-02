// app/member/reservation/add/page.tsx

// app/member/reservation/add/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/member/MemberSidebar";
import { ArrowLeft, Search, Calendar, Clock, Info } from "lucide-react";

export default function AddReservationPage() {
    const [purpose, setPurpose] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const purposeLimit = 255;

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
                    Back to Reservation
                </button>

                <h1 className="text-3xl font-extrabold text-[#0B2447] mb-6">
                    Add Room Reservation
                </h1>

                <div className="rounded-xl border border-gray-200 shadow-sm p-8 max-w-5xl">
                    <h2 className="text-lg font-bold text-[#1E4FA3] mb-6">
                        Reservation Information
                    </h2>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                        {/* Member ID */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                Member ID
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter Member ID"
                                    className="w-full rounded-lg border border-gray-300 pl-4 pr-11 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3]"
                                />
                                <button
                                    type="button"
                                    className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50"
                                >
                                    <Search className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Member Name */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                Member Name
                            </label>
                            <input
                                type="text"
                                disabled
                                placeholder="Member name will appear here"
                                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-sm text-gray-500 placeholder-gray-400 cursor-not-allowed"
                            />
                        </div>

                        {/* Room Name */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                Room Name
                            </label>
                            <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3]">
                                <option value="">Select Room</option>
                                <option value="diskusi-1">Ruang Diskusi 1</option>
                                <option value="diskusi-2">Ruang Diskusi 2</option>
                                <option value="baca-1">Ruang Baca 1</option>
                                <option value="baca-2">Ruang Baca 2</option>
                                <option value="seminar-a">Ruang Seminar A</option>
                            </select>
                        </div>

                        {/* Room Type */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                Room Type
                            </label>
                            <input
                                type="text"
                                disabled
                                placeholder="Room type will appear here"
                                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-sm text-gray-500 placeholder-gray-400 cursor-not-allowed"
                            />
                        </div>

                        {/* Room Capacity */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                Room Capacity
                            </label>
                            <input
                                type="text"
                                disabled
                                placeholder="Room capacity will appear here"
                                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-sm text-gray-500 placeholder-gray-400 cursor-not-allowed"
                            />
                        </div>

                        {/* Reservation Date */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                Reservation Date
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="dd/mm/yyyy"
                                    className="w-full rounded-lg border border-gray-300 pl-4 pr-11 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3]"
                                />
                                <Calendar className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Purpose */}
                    <div className="mt-5">
                        <label className="block text-sm font-bold text-gray-800 mb-1.5">
                            Purpose <span className="font-normal text-gray-400">(Optional)</span>
                        </label>
                        <div className="relative">
                            <textarea
                                value={purpose}
                                onChange={(e) => setPurpose(e.target.value.slice(0, purposeLimit))}
                                placeholder="Enter purpose of reservation"
                                rows={4}
                                maxLength={purposeLimit}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3]"
                            />
                            <span className="absolute bottom-2.5 right-3 text-xs text-gray-400">
                                {purpose.length} / {purposeLimit}
                            </span>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-200" />

                    {/* Session Information */}
                    <h2 className="text-lg font-bold text-[#1E4FA3] mb-4">
                        Session Information
                    </h2>

                    <div className="flex items-start gap-2.5 rounded-lg border border-[#CFE0FB] bg-[#EAF2FE] px-4 py-3 mb-6">
                        <Info className="w-4 h-4 text-[#1E4FA3] mt-0.5 shrink-0" />
                        <p className="text-sm text-[#1E4FA3]">
                            Please select the start time and end time for the reservation.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-x-8">
                        {/* Start Time */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                Start Time
                            </label>
                            <div className="relative">
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    placeholder="--:--"
                                    className="w-full rounded-lg border border-gray-300 pl-4 pr-11 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3] [&::-webkit-calendar-picker-indicator]:opacity-0"
                                />
                                <Clock className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>

                        {/* End Time */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                End Time
                            </label>
                            <div className="relative">
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    placeholder="--:--"
                                    className="w-full rounded-lg border border-gray-300 pl-4 pr-11 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1E4FA3]/40 focus:border-[#1E4FA3] [&::-webkit-calendar-picker-indicator]:opacity-0"
                                />
                                <Clock className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                Duration
                            </label>
                            <input
                                type="text"
                                disabled
                                placeholder="Duration will appear here"
                                className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-sm text-gray-500 placeholder-gray-400 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {endTime && startTime && endTime <= startTime ? (
                        <p className="text-xs text-red-500 mt-2">
                            End time must be after start time.
                        </p>
                    ) : (
                        <p className="text-xs text-gray-400 mt-2">
                            End time must be after start time.
                        </p>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 max-w-5xl mt-6">
                    <button
                        type="button"
                        className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-lg bg-[#1E4FA3] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#173f87] transition-colors"
                    >
                        <Calendar className="w-4 h-4" />
                        Book Reservation
                    </button>
                </div>
            </main>
        </div>
    );
}