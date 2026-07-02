import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { ReservationsTable } from "@/components/admin/ReservationsTable";

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
        <div className="flex min-h-screen">
        <AdminSidebar activeHref="/admin/reservation" />

        <main className="flex-1 p-10">
            <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Room Reservation</h1>
            </div>

            <ReservationsTable reservations={reservations ?? []} />
        </main>
        </div>
    );
}