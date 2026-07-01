import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
    const supabase = await createClient();

    const { data: reservations, error } = await supabase
        .from("tr_reservations")
        .select("*")
        .order("reservation_date", { ascending: false });

    if (error) {
        return (
        <main className="p-8">
            <h1 className="text-2xl font-bold text-red-600">
            Failed to fetch reservations
            </h1>

            <pre className="mt-4 rounded bg-red-100 p-4 text-sm">
            {JSON.stringify(error, null, 2)}
            </pre>
        </main>
        );
    }

    return (
        <main className="p-8">
        <h1 className="mb-6 text-3xl font-bold">
            Reservation Dashboard
        </h1>

        <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
                <tr>
                <th className="border p-3 text-left">Reservation ID</th>
                <th className="border p-3 text-left">Member ID</th>
                <th className="border p-3 text-left">Admin ID</th>
                <th className="border p-3 text-left">Session ID</th>
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-left">Purpose</th>
                </tr>
            </thead>

            <tbody>
                {reservations?.map((reservation) => (
                <tr
                    key={reservation.reservation_id}
                    className="hover:bg-gray-50"
                >
                    <td className="border p-3 font-mono text-xs">
                    {reservation.reservation_id}
                    </td>

                    <td className="border p-3 font-mono text-xs">
                    {reservation.member_id}
                    </td>

                    <td className="border p-3 font-mono text-xs">
                    {reservation.admin_id ?? "-"}
                    </td>

                    <td className="border p-3 font-mono text-xs">
                    {reservation.session_id}
                    </td>

                    <td className="border p-3">
                    {reservation.reservation_date}
                    </td>

                    <td className="border p-3">
                    {reservation.reservation_status}
                    </td>

                    <td className="border p-3">
                    {reservation.purpose}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        <p className="mt-4 text-sm text-gray-500">
            Total reservations: {reservations?.length ?? 0}
        </p>
        </main>
    );
}