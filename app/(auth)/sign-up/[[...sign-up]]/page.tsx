"use client";
import { SignUp, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft, Sparkles   } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
   const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/home"); // 🔥 Redirect if token/session available
    }
  }, [isSignedIn, router]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#101526] to-[#181028] text-white flex flex-col">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 border-b border-gray-800 bg-black/70 flex items-center justify-between px-8 py-4 backdrop-blur-lg">
        <Link href="/landing" className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Trimly
          </span>
        </Link>
        <Link
          href="/landing"
          className="flex items-center gap-1 px-4 py-2 rounded-lg transition text-gray-400 hover:text-white hover:bg-white/10 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Landing
        </Link>
      </nav>

      {/* Centered SignUp form */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <SignUp
            appearance={{
              elements: {
                rootBox: "mx-auto text-white",
                card: "bg-gray-800 border text-white border-white rounded-xl p-6 shadow-lg",
                headerTitle: "text-white text-3xl font-bold mb-2",
                footerActionLink: "text-white hover:text-cyan-300",
                formButtonPrimary:
                  "w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg py-3 text-lg font-semibold shadow-md transition",
                formFieldInput:
                  "w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500",
                formFieldLabel: "text-white font-semibold mb-2 block",
              },
              layout: {
                socialButtonsPlacement: "top",
                logoPlacement: "none",
              },
            }}
          />
        </div>
      </main>
    </div>
  );
}
