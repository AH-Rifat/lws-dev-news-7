"use client";
import { useParams, useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const { slug } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] p-4">
      <div className="text-center max-w-md">
        {/* Error Number */}
        <div className="mb-6">
          <div className="inline-block text-8xl font-bold font-display bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
            404
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-4 font-display">
          Not Found
        </h1>

        {/* Description */}
        <p className="text-zinc-300 mb-8">
          This News with {slug} id was not found!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition-colors"
          >
            Return Home
          </button>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-zinc-400">
            Need help?{" "}
            <a href="/contact" className="text-cyan-300 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
