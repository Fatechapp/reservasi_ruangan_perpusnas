const STATUS_STYLES: Record<string, string> = {
    approved: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    rejected: "bg-red-100 text-red-700",
};

const DEFAULT_STATUS_STYLE = "bg-gray-100 text-gray-700";

export function getStatusStyle(status: string | null | undefined) {
    if (!status) return DEFAULT_STATUS_STYLE;
    return STATUS_STYLES[status.toLowerCase()] ?? DEFAULT_STATUS_STYLE;
}