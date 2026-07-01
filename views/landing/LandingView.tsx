import Link from "next/link";

export default function LandingView() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#145DA6BD] px-6">
            <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-2xl">
                <h1 className="mb-2 text-center text-3xl font-bold text-slate-800">
                Reservasi Ruangan Perpusnas
                </h1>

                <p className="mb-8 text-center text-slate-500">
                Silakan pilih jenis akun untuk masuk.
                </p>

                <div className="space-y-4">
                <Link
                    href="/member/login"
                    className="block rounded-lg bg-[#145DA6] px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-[#0F4B86]"
                >
                    Login sebagai Member
                </Link>

                <Link
                    href="/admin/login"
                    className="block rounded-lg border border-slate-300 bg-white px-6 py-4 text-center text-lg font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                    Login sebagai Admin
                </Link>
                </div>
            </div>
        </main>
    );
}