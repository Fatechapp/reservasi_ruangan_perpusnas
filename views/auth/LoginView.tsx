'use client';
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginViewProps {
    role: "Admin" | "Member";
}

export default function LoginView({ role }: LoginViewProps) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Simple client-side mock authentication
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        setLoading(true);
        try {
            // Mock logic: admin login requires email containing "admin", member otherwise.
            const isAdminEmail = email.toLowerCase().includes("admin");
            if ((role === "Admin" && !isAdminEmail) || (role === "Member" && isAdminEmail)) {
                throw new Error("Invalid credentials for selected role");
            }

            // Password check (for demo): accept "password" only
            if (password !== "password") throw new Error("Invalid password");

            // Save mock token and role
            localStorage.setItem("token", "mock-token");
            localStorage.setItem("role", role);

            // Redirect to role-specific dashboard (replace with real routes)
            if (role === "Admin") router.push("/admin/dashboard");
            else router.push("/member/dashboard");
        } catch (err: any) {
            setError(err.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen bg-[#4D89B8]">
            {/* Left */}
            <section className="flex w-1/2 flex-col justify-center p-8">
                <Image src="/logo/logo-perpusnas-white.png" alt="Perpusnas" width={260} height={70} />

                <h1 className="mt-6 text-5xl italic text-white leading-tight">
                    Perpustakaan Nasional
                    <br />
                    Room Reservation
                </h1>

                <div className="mt-10 overflow-hidden rounded-lg">
                    <Image src="/images/perpusnas.jpg" alt="Perpusnas" width={700} height={450} className="w-full object-cover" />
                </div>
            </section>

            {/* Right */}
            <section className="flex w-1/2 items-center justify-center">
                <div className="w-[420px]">
                    <h1 className="mb-8 text-center text-6xl font-bold text-white">{role} Login</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="mb-2 block font-semibold text-white">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-md border bg-white px-4 py-2"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-semibold text-white">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-md border bg-white px-4 py-2"
                            />
                        </div>

                        {error && <p className="text-center text-sm text-red-200">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mx-auto block rounded-lg bg-blue-700 px-12 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}