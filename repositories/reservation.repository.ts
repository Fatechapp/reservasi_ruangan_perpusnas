import { createClient } from "@/lib/supabase/server";

export async function getReservations() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("tr_reservations")
        .select("*");

    if (error) throw error;

    return data;
}