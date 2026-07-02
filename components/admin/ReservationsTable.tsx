// components/admin/ReservationsTable.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { getStatusStyle } from "../../lib/reservation-status";

export type Reservation = {
    reservation_id: string;
    reservation_code?: string | null;
    room_type: string;
    member_id: string;
    full_name: string;
    reservation_date: string;
    start_time: string;
    end_time: string;
    reservation_status: string;
};

const PAGE_SIZE = 10;

const TABLE_COLUMNS = [
    { key: "reservation_code", label: "reservation_id", align: "text-left" },
    { key: "room_type", label: "room_type", align: "text-left" },
    { key: "member_id", label: "member_id", align: "text-left" },
    { key: "full_name", label: "full_name", align: "text-left" },
    { key: "reservation_date", label: "date", align: "text-left" },
    { key: "start_time", label: "start_time", align: "text-left" },
    { key: "end_time", label: "end_time", align: "text-left" },
    { key: "reservation_status", label: "status", align: "text-center" },
    { key: "action", label: "action", align: "text-center" },
] as const;

const PAGINATION_BUTTON =
    "rounded border px-4 py-2 text-gray-500 transition hover:bg-gray-50 disabled:text-gray-300 disabled:hover:bg-transparent";

export function ReservationsTable({
    reservations,
    }: {
    reservations: Reservation[];
    }) {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        const term = query.trim().toLowerCase();
        if (!term) return reservations;
        return reservations.filter((r) =>
        (r.reservation_code ?? r.reservation_id).toLowerCase().includes(term)
        );
    }, [reservations, query]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const currentPage = Math.min(page, totalPages);
    const paginated = filtered.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    function handleSearchChange(value: string) {
        setQuery(value);
        setPage(1); // reset to first page whenever the filter changes
    }

    return (
        <>
        {/* Search + Add */}
        <div className="mb-8 flex items-center gap-4">
            <div className="relative w-[500px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                value={query}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Reservation ID"
                className="w-full rounded-xl border py-3 pl-12 pr-5 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <Link
            href="/admin/reservation/add"
            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
            + Add
            </Link>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <table className="min-w-full">
            <thead className="border-b bg-gray-50">
                <tr className="text-sm font-semibold text-gray-700">
                {TABLE_COLUMNS.map((col) => (
                    <th key={col.key} className={`px-6 py-4 ${col.align}`}>
                    {col.label}
                    </th>
                ))}
                </tr>
            </thead>

            <tbody>
                {paginated.map((reservation) => (
                <tr
                    key={reservation.reservation_id}
                    className="border-b last:border-0 hover:bg-gray-50"
                >
                    <td className="px-6 py-4 font-mono text-sm">
                    {reservation.reservation_code ?? reservation.reservation_id}
                    </td>
                    <td className="px-6 py-4">{reservation.room_type}</td>
                    <td className="px-6 py-4 font-mono">{reservation.member_id}</td>
                    <td className="px-6 py-4">{reservation.full_name}</td>
                    <td className="px-6 py-4">{reservation.reservation_date}</td>
                    <td className="px-6 py-4">{reservation.start_time}</td>
                    <td className="px-6 py-4">{reservation.end_time}</td>
                    <td className="px-6 py-4 text-center">
                    <span
                        className={`rounded-lg px-3 py-1 text-sm font-medium ${getStatusStyle(
                        reservation.reservation_status
                        )}`}
                    >
                        {reservation.reservation_status}
                    </span>
                    </td>
                    <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                        <Link
                        href={`/admin/reservation/edit/${reservation.reservation_id}`}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                        >
                        Edit
                        </Link>
                        <Link
                        href={`/admin/reservation/detail/${reservation.reservation_id}`}
                        className="rounded-md bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-800"
                        >
                        Detail
                        </Link>
                    </div>
                    </td>
                </tr>
                ))}

                {paginated.length === 0 && (
                <tr>
                    <td
                    colSpan={TABLE_COLUMNS.length}
                    className="px-6 py-10 text-center text-sm text-gray-400"
                    >
                    No reservations found.
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
            Total Reservations: {filtered.length}
            </p>

            <div className="flex items-center gap-2">
            <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={PAGINATION_BUTTON}
            >
                Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                key={num}
                onClick={() => setPage(num)}
                className={`rounded px-4 py-2 transition ${
                    num === currentPage
                    ? "bg-blue-600 text-white"
                    : "border hover:bg-gray-50"
                }`}
                >
                {num}
                </button>
            ))}

            <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={PAGINATION_BUTTON}
            >
                Next
            </button>
            </div>
        </div>
        </>
    );
}