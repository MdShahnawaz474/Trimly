"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

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
