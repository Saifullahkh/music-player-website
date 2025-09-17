"use client";

import { useState } from "react";
import {
  Home,
  Search,
  Disc,
  User,
  Clock,
  Star,
  Heart,
  ListMusic,
  PlusCircle,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (path) =>
    `flex items-center gap-3 p-2 rounded-lg ${
      pathname === path ? "bg-[#EE10B0] text-white" : "hover:bg-gray-800"
    }`;

  return (
    <>
      {/* 🔹 Desktop Sidebar */}
      <aside className="hidden md:flex w-64 min-h-screen bg-[#181818] text-gray-300 p-6 border-r border-pink-600 flex-col">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
          Melodies
        </h1>

        <div className="space-y-6 flex-1 overflow-y-auto">
         
          {/* Menu */}
          <div>
           
            <p className="text-[11px] tracking-wider text-pink-800 mb-2">
              Menu
            </p>
            <nav className="space-y-2">
             
              <Link href="/" className={linkClasses("/")}>
               
                <Home className="w-6 h-6" /> <span>Home</span>
              </Link>
              <Link href="/discover" className={linkClasses("/discover")}>
               
                <Search size={18} /> <span>Discover</span>
              </Link>
              <Link href="/albums" className={linkClasses("/albums")}>
               
                <Disc size={18} /> <span>Albums</span>
              </Link>
              <Link href="/artist" className={linkClasses("/artist")}>
               
                <User size={18} /> <span>Artists</span>
              </Link>
            </nav>
          </div>
          {/* Library */}
          <div>
           
            <p className="text-[11px] tracking-wider text-pink-800 mb-2">
              Library
            </p>
            <nav className="space-y-2">
             
              <Link href="/recent" className={linkClasses("/recent")}>
               
                <Clock size={18} /> <span>Recently played</span>
              </Link>
              <Link href="/most-played" className={linkClasses("/most-played")}>
               
                <Star size={18} /> <span>Most played</span>
              </Link>
            </nav>
          </div>
          {/* Playlist */}
          <div>
           
            <p className="text-[11px] tracking-wider text-pink-800 mb-2">
              Playlist
            </p>
            <nav className="space-y-2">
             
              <Link href="/favorites" className={linkClasses("/favorites")}>
               
                <Heart size={18} /> <span>Favorite songs</span>
              </Link>
              <Link href="/playlist" className={linkClasses("/playlist")}>
               
                <ListMusic size={18} /> <span>Your playlist</span>
              </Link>
              <Link
                href="/add-playlist"
                className={linkClasses("/add-playlist")}
              >
               
                <PlusCircle size={18} /> <span>Add playlist</span>
              </Link>
            </nav>
          </div>
          {/* General */}
          <div>
           
            <p className="text-[11px] tracking-wider text-pink-800 mb-2">
              General
            </p>
            <nav className="space-y-2">
             
              <Link href="/settings" className={linkClasses("/settings")}>
               
                <Settings size={18} /> <span>Settings</span>
              </Link>
              <Link
                href="/logout"
                className={linkClasses("/logout") + " text-pink-500"}
              >
               
                <LogOut size={18} /> <span>Logout</span>
              </Link>
            </nav>
          </div>
        </div>
      </aside>

      {/* 🔹 Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-40 bg-[#181818] flex items-center justify-between px-4 py-3 shadow-lg">
        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Melodies
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="text-white hover:text-pink-400 transition-colors"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* 🔹 Mobile Sidebar + Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-500 ease-in-out 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-[#181818] text-gray-300 p-6 overflow-y-auto transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Melodies
            </h1>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-pink-400"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="space-y-6">
            <div>
              <p className="text-[11px] tracking-wider text-pink-800 mb-2">
                Menu
              </p>
              <nav className="space-y-2">
                <Link href="/" className={linkClasses("/")}>
                  <Home className="w-6 h-6" />
                  <span>Home</span>
                </Link>
                <Link href="/discover" className={linkClasses("/discover")}>
                  <Search size={18} />
                  <span>Discover</span>
                </Link>
                <Link href="/albums" className={linkClasses("/albums")}>
                  <Disc size={18} />
                  <span>Albums</span>
                </Link>
                <Link href="/artist" className={linkClasses("/artist")}>
                  <User size={18} />
                  <span>Artists</span>
                </Link>
              </nav>
            </div>
            {/* Library */}
            <div>
             
              <p className="text-[11px] tracking-wider text-pink-800 mb-2">
                Library
              </p>
              <nav className="space-y-2">
               
                <Link href="/recent" className={linkClasses("/recent")}>
                 
                  <Clock size={18} /> <span>Recently played</span>
                </Link>
                <Link
                  href="/most-played"
                  className={linkClasses("/most-played")}
                >
                 
                  <Star size={18} /> <span>Most played</span>
                </Link>
              </nav>
            </div>
            {/* Playlist */}
            <div>
              
              <p className="text-[11px] tracking-wider text-pink-800 mb-2">
                Playlist
              </p>
              <nav className="space-y-2">
                
                <Link href="/favorites" className={linkClasses("/favorites")}>
                  
                  <Heart size={18} /> <span>Favorite songs</span>
                </Link>
                <Link href="/playlist" className={linkClasses("/playlist")}>
                  
                  <ListMusic size={18} /> <span>Your playlist</span>
                </Link>
                <Link
                  href="/add-playlist"
                  className={linkClasses("/add-playlist")}
                >
                  
                  <PlusCircle size={18} /> <span>Add playlist</span>
                </Link>
              </nav>
            </div>
            {/* General */}
            <div>
              
              <p className="text-[11px] tracking-wider text-pink-800 mb-2">
                General
              </p>
              <nav className="space-y-2">
                
                <Link href="/settings" className={linkClasses("/settings")}>
                  
                  <Settings size={18} /> <span>Settings</span>
                </Link>
                <Link
                  href="/logout"
                  className={linkClasses("/logout") + " text-pink-500"}
                >
                  
                  <LogOut size={18} /> <span>Logout</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
