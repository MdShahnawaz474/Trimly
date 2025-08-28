"use client";
import { SignIn, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Sparkles, ArrowLeft, LogIn } from "lucide-react";
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
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-red-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/landing" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trimly
              </span>
            </Link>
            <Link href="/landing" className="flex items-center text-gray-300 hover:text-white transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Landing
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 px-6">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-900/80 border border-cyan-500/20 text-cyan-400">
                <Sparkles className="w-4 h-4 mr-2" />
                Welcome Back
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sign In
              </span>
            </h1>
            <p className="text-lg text-gray-300">
              Continue optimizing your media files with Trimly
            </p>
          </div>

          {/* Sign In Form */}
          <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl shadow-cyan-500/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-gray-400">Sign in to your account</p>
            </div>
            
            <SignIn 
              appearance={{
                elements: {
                  rootBox: "mx-auto",
                  card: "bg-transparent shadow-none border-none p-0",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: "w-full bg-gray-800 border-2 border-gray-600 hover:border-cyan-500 hover:bg-gray-700 text-white transition-all duration-300 rounded-xl py-4 px-6 mb-6 font-medium",
                  formButtonPrimary: "w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 rounded-xl py-4 px-6 font-bold text-lg",
                  footerActionLink: "text-cyan-400 hover:text-cyan-300 transition-colors font-medium",
                  formFieldLabel: "text-white font-semibold mb-3 block text-base",
                  formFieldInput: "w-full bg-gray-800 border-2 border-gray-600 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 rounded-xl py-4 px-6 text-base placeholder-gray-400",
                  dividerLine: "bg-gray-600",
                  dividerText: "text-gray-400 bg-gray-900 px-6 font-medium",
                  identityPreviewText: "text-white",
                  identityPreviewEditButton: "text-cyan-400 hover:text-cyan-300 transition-colors",
                  formFieldInputShowPasswordButton: "text-gray-400 hover:text-gray-300",
                  formFieldRow: "mb-6",
                  formField: "mb-6"
                },
                layout: {
                  socialButtonsPlacement: "top",
                  logoPlacement: "none"
                }
              }}
            />
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                Sign up for free
              </Link>
            </p>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <p className="text-sm text-green-400 font-medium">
                🎉 All Trimly plans are currently <span className="font-bold">100% FREE</span>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
