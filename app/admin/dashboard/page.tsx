import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
    const supabase = await createClient();

    const { data: reservations, error } = await supabase
        .from("vw_room_reservations")
        .select("*")
        .order("reservation_date", { ascending: false })
        .order("start_time", { ascending: true });

    if (error) {
        return (
            <main className="p-8">
                <h1 className="text-2xl font-bold text-red-600">
                    Failed to fetch reservations
                </h1>

                <pre className="mt-4 rounded-lg bg-red-100 p-4 text-sm">
                    {JSON.stringify(error, null, 2)}
                </pre>
            </main>
        );
    }

    return (
        <main className="p-10">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-5xl font-bold">
                    Room Reservation
                </h1>
            </div>

            {/* Search + Add */}
            <div className="mb-8 flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Reservation ID"
                    className="w-[500px] rounded-xl border px-5 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                />

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
                            <th className="px-6 py-4 text-left">
                                Reservation ID
                            </th>

                            <th className="px-6 py-4 text-left">
                                Room Type
                            </th>

                            <th className="px-6 py-4 text-left">
                                Member ID
                            </th>

                            <th className="px-6 py-4 text-left">
                                Full Name
                            </th>

                            <th className="px-6 py-4 text-left">
                                Date
                            </th>

                            <th className="px-6 py-4 text-left">
                                Start
                            </th>

                            <th className="px-6 py-4 text-left">
                                End
                            </th>

                            <th className="px-6 py-4 text-center">
                                Status
                            </th>

                            <th className="px-6 py-4 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {reservations?.map((reservation) => (
                            <tr
                                key={reservation.reservation_id}
                                className="border-b last:border-0 hover:bg-gray-50"
                            >
                                <td className="px-6 py-4 font-mono text-sm">
                                    {reservation.reservation_code ??
                                        reservation.reservation_id}
                                </td>

                                <td className="px-6 py-4">
                                    {reservation.room_type}
                                </td>

                                <td className="px-6 py-4 font-mono">
                                    {reservation.member_id}
                                </td>

                                <td className="px-6 py-4">
                                    {reservation.full_name}
                                </td>

                                <td className="px-6 py-4">
                                    {reservation.reservation_date}
                                </td>

                                <td className="px-6 py-4">
                                    {reservation.start_time}
                                </td>

                                <td className="px-6 py-4">
                                    {reservation.end_time}
                                </td>

                                <td className="px-6 py-4 text-center">
                                    <span
                                        className={`rounded-lg px-3 py-1 text-sm font-medium
                                            ${
                                                reservation.reservation_status ===
                                                "approved"
                                                    ? "bg-green-100 text-green-700"
                                                    : reservation.reservation_status ===
                                                      "pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
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
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    Total Reservations : {reservations?.length ?? 0}
                </p>

                <div className="flex items-center gap-2">
                    <button className="rounded border px-4 py-2 text-gray-500">
                        Previous
                    </button>

                    <button className="rounded bg-blue-600 px-4 py-2 text-white">
                        1
                    </button>

                    <button className="rounded border px-4 py-2">
                        Next
                    </button>
                </div>
            </div>
        </main>
    );
}