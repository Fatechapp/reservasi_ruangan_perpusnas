import Image from "next/image";

interface LoginViewProps {
    role: "Admin" | "Member";
}

export default function LoginView({ role }: LoginViewProps) {
    return (
        <main className="flex min-h-screen bg-[#4D89B8]">
        {/* Left */}
        <section className="flex w-1/2 flex-col justify-center p-8">
            <Image
            src="/logo/logo-perpusnas-white.png"
            alt="Perpusnas"
            width={260}
            height={70}
            />

            <h1 className="mt-6 text-5xl italic text-white leading-tight">
            Perpustakaan Nasional
            <br />
            Room Reservation
            </h1>

            <div className="mt-10 overflow-hidden rounded-lg">
            <Image
                src="/images/perpusnas.jpg"
                alt="Perpusnas"
                width={700}
                height={450}
                className="w-full object-cover"
            />
            </div>
        </section>

        {/* Right */}
        <section className="flex w-1/2 items-center justify-center">
            <div className="w-[420px]">
            <h1 className="mb-8 text-center text-6xl font-bold text-white">
                {role} Login
            </h1>

            <div className="space-y-6">
                <div>
                <label className="mb-2 block font-semibold text-white">
                    Email
                </label>

                <input
                    type="email"
                    className="w-full rounded-md border bg-white px-4 py-2"
                />
                </div>

                <div>
                <label className="mb-2 block font-semibold text-white">
                    Password
                </label>

                <input
                    type="password"
                    className="w-full rounded-md border bg-white px-4 py-2"
                />
                </div>

                <button className="mx-auto block rounded-lg bg-blue-700 px-12 py-3 font-semibold text-white transition hover:bg-blue-800">
                Login
                </button>
            </div>
            </div>
        </section>
        </main>
    );
}