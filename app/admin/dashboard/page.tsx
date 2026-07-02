"use client";
import { createClient } from "@/lib/supabase/server";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { ReservationsTable } from "@/components/admin/ReservationsTable";
import { signOut } from "@/app/logout/actions";

export default async function Page() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { data: profile } = await supabase
        .from("ms_users")
        .select("full_name, user_id")
        .eq("user_id", user?.id)
        .single();

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
            <AdminSidebar
                user={
                    profile
                        ? {
                                name: profile.full_name,
                                adminId: profile.user_id,
                                role: "Admin",
                            }
                        : undefined
                }
                onLogout={signOut}
            />

            <main className="flex-1 p-10">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Room Reservation</h1>
                </div>

                <ReservationsTable reservations={reservations ?? []} />
            </main>
        </div>
    );
}