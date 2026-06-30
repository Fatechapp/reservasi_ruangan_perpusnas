import Image from "next/image";
import { Eye } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#D6ECA9] p-5">
      {/* Badge */}
      <div className="mb-4">
        <button className="rounded-md bg-blue-700 px-4 py-2 text-white font-medium shadow">
          Login Page
        </button>
      </div>

      {/* Login Card */}
      <div className="mx-auto flex max-w-7xl overflow-hidden bg-[#4E86AE] shadow-xl">
        {/* Left */}
        <div className="flex w-1/2 flex-col p-8 text-white">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo-perpusnas.png"
              alt="Perpusnas"
              width={320}
              height={60}
            />
          </div>

          {/* Title */}
          <h1 className="mb-8 text-6xl italic leading-tight font-light">
            Perpustakaan Nasional
            <br />
            Room Reservation
          </h1>

          {/* Building */}
          <div className="relative h-[420px] w-full">
            <Image
              src="/perpusnas.jpg"
              alt="Perpusnas"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex w-1/2 flex-col items-center justify-center px-16 text-white">
          <h2 className="mb-14 text-8xl font-bold">Login</h2>

          <form className="w-full max-w-md space-y-8">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email
              </label>

              <input
                type="email"
                className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 text-black outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="h-11 w-full rounded-md border border-gray-300 bg-white px-4 pr-12 text-black outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* Button */}
            <div className="pt-6 text-center">
              <button
                type="submit"
                className="rounded-md bg-blue-700 px-12 py-3 font-semibold shadow-lg transition hover:bg-blue-800"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}