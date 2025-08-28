"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Github,
  LucideTwitter,
  LinkedinIcon,
  VideoIcon,
  ImageIcon,
  ZapIcon,
  StarIcon,
  PlayCircle,
  Download,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Wand2,
  Palette,
  Bot,
  Zap,
  Globe,
  Smartphone
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function LandingPage() {
  const { isSignedIn } = useAuth();

  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 useEffect(() => {
    if (isSignedIn) {
      router.push("/home"); // 🔥 Redirect if token/session available
    }
  }, [isSignedIn, router]);
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trimly
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">Features</Link>
              <Link href="#coming-soon" className="text-gray-300 hover:text-white transition-colors font-medium">Coming Soon</Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors font-medium">Reviews</Link>
              <Link href="/plans" className="text-gray-300 hover:text-white transition-colors font-medium">Pricing</Link>
              {/* <Link href="/sign-up" className="text-gray-300 hover:text-white transition-colors font-medium">Sign Up</Link> */}
              <Link href="/sign-up" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Get Started Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">Features</Link>
                <Link href="#coming-soon" className="text-gray-300 hover:text-white transition-colors font-medium">Coming Soon</Link>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors font-medium">Reviews</Link>
                <Link href="/plans" className="text-gray-300 hover:text-white transition-colors font-medium">Pricing</Link>
                <Link href="/sign-up" className="text-gray-300 hover:text-white transition-colors font-medium">Sign Up</Link>
                <Link href="/sign-up" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full font-semibold text-center">
                  Get Started Free
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-black">
        {/* Subtle animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-red-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-900/80 border border-cyan-500/20 text-cyan-400">
              <Sparkles className="w-4 h-4 mr-2" />
              #1 Video & Photo Optimizer
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-6xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Compress Videos
            </span>
            {/* <br /> */}
            <span className="text-white"> & Resize Photos</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Lightning Fast
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your media files with our advanced AI-powered compression technology. 
            Reduce file sizes by up to <span className="text-cyan-400 font-bold">90%</span> without losing quality. 
            Perfect for creators, businesses, and professionals worldwide.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link href="/sign-up" className="group relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <PlayCircle className="w-6 h-6 mr-2 relative z-10" />
              <span className="relative z-10">Start Compressing</span>
            </Link>
            
            <Link href="/plans" className="group inline-flex items-center px-8 py-4 text-lg font-bold text-gray-300 border-2 border-gray-600 rounded-full hover:border-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <Download className="w-6 h-6 mr-2" />
              View Pricing
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-gray-400 font-medium">Videos Compressed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">90%</div>
              <div className="text-gray-400 font-medium">Size Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-gray-400 font-medium">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">5★</div>
              <div className="text-gray-400 font-medium">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your media files with professional-grade tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <VideoIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Video Compression</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI algorithms compress your videos up to 90% while maintaining crystal-clear quality. Support for all major formats including MP4, AVI, MOV, and more.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Lossless Quality
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Photo Resizer Pro</h3>
              <p className="text-gray-300 mb-6">
                Resize, crop, and optimize images for web, social media, or print. Batch processing available for multiple files with custom presets.
              </p>
              <div className="flex items-center text-purple-400 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Batch Processing
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ZapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Speed</h3>
              <p className="text-gray-300 mb-6">
                Process files in seconds with our cloud-powered infrastructure. No waiting around - get your optimized files instantly.
              </p>
              <div className="flex items-center text-yellow-400 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Instant Results
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">100% Secure</h3>
              <p className="text-gray-300 mb-6">
                Your files are encrypted and automatically deleted after processing. We never store or share your content.
              </p>
              <div className="flex items-center text-green-400 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Privacy First
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Available</h3>
              <p className="text-gray-300 mb-6">
                Access Trimly anytime, anywhere. Our service runs 24/7 with 99.9% uptime guarantee.
              </p>
              <div className="flex items-center text-red-400 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Always Online
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Team Collaboration</h3>
              <p className="text-gray-300 mb-6">
                Share and collaborate with your team. Manage projects together with shared folders and permissions.
              </p>
              <div className="flex items-center text-indigo-400 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Team Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="coming-soon" className="py-24 px-6 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 mb-6">
              <Wand2 className="w-4 h-4 mr-2 animate-pulse" />
              Coming Soon - Development Phase
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                What&apos;s Next?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exciting features currently in development. Get early access when they launch!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coming Soon Feature 1 */}
            <div className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Q2 2025
                </span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 opacity-75">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-200">AI-Powered Auto-Edit</h3>
              <p className="text-gray-400 mb-6">
                Intelligent video editing with automatic scene detection, noise reduction, and smart cropping powered by machine learning.
              </p>
              <div className="flex items-center text-orange-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                In Development
              </div>
            </div>

            {/* Coming Soon Feature 2 */}
            <div className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Q3 2025
                </span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 opacity-75">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-200">Advanced Filters & Effects</h3>
              <p className="text-gray-400 mb-6">
                Professional-grade filters, color grading, and visual effects library with real-time preview and custom presets.
              </p>
              <div className="flex items-center text-purple-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Design Phase
              </div>
            </div>

            {/* Coming Soon Feature 3 */}
            <div className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Q2 2025
                </span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 opacity-75">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-200">Cloud Storage Integration</h3>
              <p className="text-gray-400 mb-6">
                Seamless integration with Google Drive, Dropbox, OneDrive, and AWS S3 for direct file processing and storage.
              </p>
              <div className="flex items-center text-blue-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Testing Phase
              </div>
            </div>

            {/* Coming Soon Feature 4 */}
            <div className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Q3 2025
                </span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 opacity-75">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-200">Mobile Apps</h3>
              <p className="text-gray-400 mb-6">
                Native iOS and Android apps with offline processing, camera integration, and sync across all devices.
              </p>
              <div className="flex items-center text-green-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Planning Phase
              </div>
            </div>

            {/* Coming Soon Feature 5 */}
            <div className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Q4 2025
                </span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 opacity-75">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-200">API & Integrations</h3>
              <p className="text-gray-400 mb-6">
                Developer API for third-party integrations, webhooks, and plugins for popular platforms like WordPress, Shopify.
              </p>
              <div className="flex items-center text-yellow-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Research Phase
              </div>
            </div>

            {/* Coming Soon Feature 6 */}
            <div className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Q4 2025
                </span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 opacity-75">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-200">Analytics Dashboard</h3>
              <p className="text-gray-400 mb-6">
                Detailed analytics on compression savings, usage statistics, and performance insights with beautiful visualizations.
              </p>
              <div className="flex items-center text-pink-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Concept Phase
              </div>
            </div>
          </div>

          {/* Early Access CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Get Early Access</h3>
              <p className="text-gray-300 mb-6">
                Be the first to try new features as they&apos;re released. Join our beta program for exclusive access.
              </p>
              <Link href="/sign-up" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1">
                <Sparkles className="w-5 h-5 mr-2" />
                Join Beta Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Loved by Creators
              </span>
            </h2>
            <p className="text-xl text-gray-300">Join thousands of satisfied users worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 italic">
                  &quot;Trimly is a game-changer! I compress hundreds of videos monthly for my YouTube channel. The quality retention is incredible.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  R
                </div>
                <div>
                  <div className="font-semibold">Rajesh Kumar</div>
                  <div className="text-gray-400 text-sm">YouTuber, 500K subscribers</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 italic">
                &quot;As a wedding photographer, Trimly helps me deliver beautiful, web-optimized galleries to my clients quickly.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  P
                </div>
                <div>
                  <div className="font-semibold">Priya Sharma</div>
                  <div className="text-gray-400 text-sm">Professional Photographer</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 italic">
                  &quot;Our marketing team saves hours every week using Trimly&apos;s batch processing for social media content.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <div className="font-semibold">Arjun Patel</div>
                  <div className="text-gray-400 text-sm">Marketing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="text-white">Your Media Files?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join over 10,000 creators and businesses who trust Trimly to optimize their content. 
            Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/sign-up" className="group relative inline-flex items-center px-12 py-4 overflow-hidden text-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="w-6 h-6 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Trimly
                </span>
              </Link>
              {/* <p className="text-gray-300 mb-6 max-w-md">
                The ultimate tool for video compression and photo resizing. 
                Trusted by creators worldwide for professional-grade optimization.
              </p> */}
              <div className="flex space-x-4">
                <Link href="https://github.com/MdShahnawaz474" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="https://x.com/Ahankhan474" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                  <LucideTwitter className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/md-shahnawaz-a053a122a/" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/sign-up" className="hover:text-white transition-colors">Video Compression</Link></li>
                <li><Link href="/sign-up" className="hover:text-white transition-colors">Photo Resizing</Link></li>
                <li><Link href="/sign-up" className="hover:text-white transition-colors">Batch Processing</Link></li>
                <li><Link href="/sign-up" className="hover:text-white transition-colors">API Access</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/sign-up" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/sign-up" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/sign-up" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/sign-up" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Trimly by MD Shahnawaz. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with ❤️ for creators worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
