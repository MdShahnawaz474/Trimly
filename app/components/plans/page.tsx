"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  StarIcon,
  Sparkles,
  Zap,
  Shield,
  Users,
  Clock,
  ArrowRight,
  Crown,
  ZapIcon
} from "lucide-react";

const PricingSection = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const plans = [
    {
      name: "Basic",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      monthlyPeriod: "",
      yearlyPeriod: "",
      description: "Perfect for individual creators",
      features: [
        "5-min video trim (SD)",
        "10 photo resizes/day",
        "Watermarked exports",
        "1 platform export at a time",
        "Basic support"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-500"
    },
    {
      name: "Standard",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      monthlyPeriod: "",
      yearlyPeriod: "",
      description: "Ideal for growing businesses",
      features: [
        "30-min video trim (HD)",
        "50 photo resizes/day",
        "No watermarks",
        "Batch export (5 files)",
        "5GB cloud storage",
        "Priority support"
      ],
      popular: false,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      name: "Pro",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      monthlyPeriod: "",
      yearlyPeriod: "",
      description: "For professional teams",
      features: [
        "Unlimited video trim (4K)",
        "90-min video trim (HD)",
        "Unlimited photo resizes",
        "Priority processing",
        "50GB cloud storage",
        "Team access (5 users)",
        "API access",
        "24/7 premium support"
      ],
      popular: true,
      gradient: "from-cyan-500 via-purple-500 to-pink-500"
    }
  ];

  const getStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <StarIcon key={i} className="w-4 h-4 fill-current" />);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading pricing plans...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
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
            <Link href="/landing" className="text-gray-300 hover:text-white transition-colors font-medium">
              ← Back to Landing
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-900/80 border border-cyan-500/20 text-cyan-400">
              <Crown className="w-4 h-4 mr-2" />
              Choose Your Plan
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="text-white">Pricing</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            All plans are currently <span className="text-green-400 font-bold">100% FREE</span>! 
            Start optimizing your media files today with no cost. 
            Choose the plan that fits your needs.
          </p>

          {/* Free Trial Message */}
          <div className="flex justify-center mb-16">
            <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 max-w-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">Limited Time Offer!</h3>
                <p className="text-gray-300 text-lg">
                  All Trimly plans are currently <span className="text-green-400 font-bold">100% FREE</span> for a limited time. 
                  Get started today and enjoy premium features at no cost!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`group relative ${
                  plan.popular 
                    ? "transform scale-105" 
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm px-6 py-2 rounded-full font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`relative h-full bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular 
                    ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/25" 
                    : "border-gray-800 hover:border-gray-700"
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className="flex">
                        {getStars(
                          plan.name === "Basic" ? 1 : 
                          plan.name === "Standard" ? 2 : 3
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex flex-col items-center">
                      <div className="mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-500/20 border border-green-500/30 text-green-400">
                          Currently Free
                        </span>
                      </div>
                      <div className="flex items-baseline justify-center">
                        <span className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {plan.monthlyPrice}
                        </span>
                        <span className="text-xl text-gray-400 ml-2">
                          {plan.monthlyPeriod}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link 
                      href="/sign-up"
                      className={`w-full group relative inline-flex items-center justify-center px-6 py-4 overflow-hidden text-lg font-bold text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                        plan.popular
                          ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-2xl hover:shadow-cyan-500/25"
                          : "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500"
                      }`}
                    >
                      <span className="relative z-10 flex items-center">
                        {plan.popular && <Crown className="w-5 h-5 mr-2" />}
                        Get Started Free
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="text-white">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Can I change my plan later?</h3>
              <p className="text-gray-300">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Is there a free trial?</h3>
              <p className="text-gray-300">All plans are currently <span className="text-green-400 font-bold">100% FREE</span>! No trial needed - just sign up and start using all features immediately.</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">How long is this free offer?</h3>
              <p className="text-gray-300">This is a limited-time offer where all plans are completely free. Take advantage while you can!</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">What payment methods do you accept?</h3>
              <p className="text-gray-300">Currently no payment is required as all plans are free. We accept all major credit cards, PayPal, and bank transfers for future paid plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of creators and businesses who trust Trimly. 
            All plans are currently <span className="text-green-400 font-bold">100% FREE</span> - start optimizing your media files today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/sign-up" className="group relative inline-flex items-center px-12 py-4 overflow-hidden text-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Start Free Now</span>
              <ArrowRight className="w-6 h-6 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/landing" className="inline-flex items-center px-8 py-4 text-lg font-bold text-gray-300 border-2 border-gray-600 rounded-full hover:border-cyan-500 hover:text-white transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Link href="/landing" className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trimly
              </span>
            </Link>
            <p className="text-gray-300 max-w-md mx-auto">
              The ultimate tool for video compression and photo resizing. 
              Trusted by creators worldwide for professional-grade optimization.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Trimly by MD Shahnawaz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingSection; 