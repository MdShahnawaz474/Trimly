"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ClerkProvider, useClerk, useUser } from "@clerk/nextjs";
import {
  LogOutIcon,
  MenuIcon,
  LayoutDashboardIcon,
  Share2Icon,
  UploadIcon,
  ImageIcon,
  Github,
  LucideTwitter,
  LinkedinIcon,
  PlaneIcon,
  Plane,
  LockIcon,
} from "lucide-react";
import Image from "next/image";
import { label } from "framer-motion/client";

const sidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Home Page" },
  { href: "/social-share", icon: Share2Icon, label: "Social Share" },
  { href: "/video-upload", icon: UploadIcon, label: "Video Upload" },
  // {href:"/plans",icon:LockIcon, label:"Plans"}
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
      // <ClerkProvider>
    
    <div className="drawer lg:drawer-open  text-white">
      <input
        id="sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="drawer-content flex flex-col">
        <header className="bg-black sticky top-0 backdrop-blur-0 border-b z-10">
          <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="sidebar-drawer"
                className="btn btn-square btn-ghost drawer-button"
              >
                <MenuIcon />
              </label>
            </div>
            <div className="flex-1">
              <Link href="/" onClick={handleLogoClick}>
                <div>
                  <span className="bg-gradient-to-r text-2xl font-extrabold from-teal-400 to-blue-500 bg-clip-text text-transparent hover:from-teal-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 filter hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                    Trimly
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex-none flex items-center space-x-4">
              {user && (
                <>
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-full">
                      <Image
                        src={user.imageUrl}
                        alt={user.username || user.emailAddresses[0].emailAddress}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <span className="text-sm truncate max-w-xs lg:max-w-md text-white">
                    {user.username || user.emailAddresses[0].emailAddress}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-ghost btn-circle text-white"
                  >
                    <LogOutIcon className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        </header>
        <main className="flex-grow bg-black pb-24">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-8">
            {children}
          </div>
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
        <aside className="bg-black border-r-2 border-neutral-800 w-64 h-full flex flex-col">
          <div className="flex items-center justify-center py-4">
            <ImageIcon className="w-10 h-10 text-primary" />
          </div>
          <ul className="menu p-4 w-full text-base-content flex-grow">
            {sidebarItems.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-4 px-4 py-2 rounded-lg ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "hover:bg-base-300"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-6 h-6" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {user && (
            <div className="p-4">
              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-error w-full"
              >
                <LogOutIcon className="mr-2 h-5 w-5" />
                Sign Out
              </button>
            </div>
          )}
        </aside>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-black border-t border-neutral-800 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <Link href="https://github.com/MdShahnawaz474" className="text-neutral-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/Ahankhan474" passHref className="text-neutral-400 hover:text-white transition-colors">
              <LucideTwitter className="h-5 w-5" />
            </Link>

            
            <Link href="https://www.linkedin.com/in/md-shahnawaz-a053a122a/" className="text-neutral-400 hover:text-white transition-colors">
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-neutral-400 text-sm">
              Created by{" "}
              <Link 
                href="https://github.com/MdShahnawaz474" 
                className="text-white"
              >
                MD Shahnawaz
              </Link>
            </p>
            <p className="text-neutral-500 text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
    // </ClerkProvider>
  );
}
