"use client"
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useEffect, useState } from "react";
// import { BackgroundGradient } from "./ui/";

const PricingSection = () => {
  // State to toggle between Monthly and Yearly pricing
  const [isMonthly, setIsMonthly] = useState(true);
  const [loading,setLoading]= useState(true);
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  // Function to toggle pricing state
  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  // Pricing plans with features
  const plans = [
    {
      name: "Basic",
      monthlyPrice: "$10/mo",
      yearlyPrice: "$100/yr",
      features: [
        "5-min video trim (SD)",
        "10 photo resizes/day",
        "Watermarked exports",
        "1 platform export at a time"
      ]
    },
    {
      name: "Standard",
      monthlyPrice: "$20/mo",
      yearlyPrice: "$200/yr",
      features: [
        "30-min video trim (HD)",
        "50 photo resizes/day",
        "No watermarks",
        "Batch export (5 files)",
        "5GB cloud storage"
      ]
    },
    {
      name: "Pro",
      monthlyPrice: "$50/mo",
      yearlyPrice: "$500/yr",
      features: [
        "Unlimited video trim (4K)",
        "90-min video trim (HD)",
        // "Unlimited photo resizes",
        // "Priority processing",
        "50GB cloud storage",
        "Team access (5 users)",
        "API access"
      ]
    }
  ];

  // Function to generate star icons based on count
  const getStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <StarIcon key={i} />);
  };

  return (
    <div className=" container p-8 bg-black min-h-screen mx-auto ">

      <h2 className="text-3xl font-bold text-center mb-6 text-gray-300">
      Trimly Price
      </h2>
      <div className="flex justify-center mb-6">
        {/* Toggle button for Monthly/Yearly pricing */}
        <button
          className={`px-4 py-2 rounded-l-lg ${
            isMonthly ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
          onClick={togglePricing}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            !isMonthly ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
          onClick={togglePricing}
        >
          Yearly
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 md:grid-cols-3 sm:grid-cols-1 items-center justify-center place-items-center gap-2">
        {loading?Array(3).fill(0).map((_ , index)=>
            <LoadingSkeleton key={index}/>
        ):plans.map((plan, index) => (
          <div
            key={index}
            className={`w-64 p-1 rounded-3xl flex flex-col ${
              plan.name === "Pro"
                ? "border-2 bg-gradient-to-tr from-purple-500 via-blue-500 to-blue-300"
                : "border-2 bg-gradient-to-tr  from-gray-700 via-gray-600 to-gray-500"
            }}`}
          >
            {/* Card Header */}
            <BackgroundGradient className="rounded-[22px] ">

            <div className="flex items-center justify-between p-4 text-white">
              {/* Highlighting 'Pro' Plan as Most Popular */}
              <p className="text-sm font-semibold italic drop-shadow-md">
                {plan.name === "Pro" ? "Most Popular" : ""}
              </p>
              {/* Star Rating based on Plan Type */}
              <div className="flex">
                {getStars(
                  plan.name === "Basic"
                    ? 1
                    : plan.name === "Standard"
                    ? 2
                    : plan.name === "Pay as you"
                    ? 3
                    : plan.name === "Pro"
                    ? 4
                    : 0
                )}
              </div>
            </div>
            {/* Card Content */}
            <div className="bg-gray-900  text-gray-400 text-sm rounded-3xl p-4 flex flex-col gap-4">
              {/* Plan Name */}
              <p className="text-lg font-semibold text-gray-300">{plan.name}</p>

              <p className="text-3xl font-bold text-white">
                {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}{" "}
                <span className="text-base font-medium"></span>
              </p>
              <ul className="list-none text-gray-400 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-base flex items-center">
                    ✅ <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-purple-500 via-blue-500 to-blue-300 py-2 w-full rounded-lg text-white text-sm font-medium transition-transform transform hover:scale-105 active:scale-100 shadow-md">
              {`Signup With ${plan.name}`}  
              </button>
              
            </div>
    </BackgroundGradient> 

          </div>

        ))}
      
      </div>
      
    </div>
  );
};

export default PricingSection;

const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <path d="M10.277 16.515c.005-.11.187-.154.24-.058c.254.45.686 1.111 1.177 1.412c.49.3 1.275.386 1.791.408c.11.005.154.186.058.24c-.45.254-1.111.686-1.412 1.176s-.386 1.276-.408 1.792c-.005.11-.187.153-.24.057c-.254-.45-.686-1.11-1.176-1.411s-1.276-.386-1.792-.408c-.11-.005-.153-.187-.057-.24c.45-.254 1.11-.686 1.411-1.177c.301-.49.386-1.276.408-1.791m8.215-1c-.008-.11-.2-.156-.257-.062c-.172.283-.421.623-.697.793s-.693.236-1.023.262c-.11.008-.155.2-.062.257c.283.172.624.42.793.697s.237.693.262 1.023c.009.11.2.155.258.061c.172-.282.42-.623.697-.792s.692-.237 1.022-.262c.11-.009.156-.2.062-.258c-.283-.172-.624-.42-.793-.697s-.236-.692-.262-1.022M14.704 4.002l-.242-.306c-.937-1.183-1.405-1.775-1.95-1.688c-.545.088-.806.796-1.327 2.213l-.134.366c-.149.403-.223.604-.364.752c-.143.148-.336.225-.724.38l-.353.141l-.248.1c-1.2.48-1.804.753-1.881 1.283c-.082.565.49 1.049 1.634 2.016l.296.25c.325.275.488.413.58.6c.094.187.107.403.134.835l.024.393c.093 1.52.14 2.28.634 2.542s1.108-.147 2.336-.966l.318-.212c.35-.233.524-.35.723-.381c.2-.032.402.024.806.136l.368.102c1.422.394 2.133.591 2.52.188c.388-.403.196-1.14-.19-2.613l-.099-.381c-.11-.419-.164-.628-.134-.835s.142-.389.365-.752l.203-.33c.786-1.276 1.179-1.914.924-2.426c-.254-.51-.987-.557-2.454-.648l-.379-.024c-.417-.026-.625-.039-.806-.135c-.18-.096-.314-.264-.58-.6" />
    </svg>
  );
};


const LoadingSkeleton = () => {
  return <div className="w-64 h-64 bg-gray-700 animate-pulse rounded-3xl p-4"></div>;
};
