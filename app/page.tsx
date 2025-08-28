"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function Redirect() {
    const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return; // wait until auth state is loaded

    if (isSignedIn) {
      router.push("/home");
    } else {
      router.push("/landing");
    }
  }, [isSignedIn, isLoaded, router]);


  return (   <div className='flex flex-col justify-center items-center h-screen'> 
    <div>
        <progress className="progress progress-secondary w-72" value={50} max="100"></progress>
    </div>
    <div>
        <progress className="progress progress-primary w-72" value={60} max="100"></progress>
    </div>
    <div>
        <progress className="progress progress-accent w-72" value="80" max="100"></progress>
    </div>
</div>)
}
