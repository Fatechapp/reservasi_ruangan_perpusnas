import { getReservations } from "@/repositories/reservation.repository";

export async function getReservationList() {
    return await getReservations();
}