"use client";

import Image from "next/image";
import { Plus, Search } from "lucide-react";
import SongCard from "../component/card";
import PopularArtist from "../component/popularArtist";
import SignUp from "./signing";
import Link from "next/link";
import Footer from "../component/footer";

export default function Home() {
  const songs = [
    {
      id: 1,
      rank: 1,
      image: "/assets/frame 185 (3).png",
      title: "Softcore",
      artist: "The Neighbourhood",
      releaseDate: "Nov 4, 2023",
      album: "Hard to Imagine the Neighbourhood Ever Changing",
      time: "3:26",
    },
    {
      id: 2,
      rank: 2,
      image: "/assets/SkyfallBeats.png",
      title: "Skyfall Beats",
      artist: "Nightmares",
      releaseDate: "Oct 26, 2023",
      album: "Nightmares",
      time: "2:45",
    },
    {
      id: 3,
      rank: 3,
      image: "/assets/Greedy.png",
      title: "Greedy",
      artist: "Tate McRae",
      releaseDate: "Dec 30, 2023",
      album: "Greedy",
      time: "2:11",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[550px] w-full bg-cover bg-center rounded-xl"
        style={{ backgroundImage: 'url("/assets/hero-img.png")' }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="relative md:w-80 w-40 bg-[#1f1f1f] rounded-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EE10B0] text-white"
            />
          </div>
          <button className="md:w-[120px] w-[80px] px-4 py-2 text-[#EE10B0] hover:text-white hover:bg-[#EE10B0] rounded-md border border-[#EE10B0] cursor-pointer">
            Login
          </button>
        </div>

        <div className="grid grid-cols-1 md:w-[450px] gap-4 items-center h-full px-8 md:px-16">
          <div className="text-white space-y-">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              All the <span className="text-[#EE10B0]">Best Songs</span> <br /> in One Place
            </h1>
            <p className="text-[12px] font-light mb-3">
              On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!
            </p>
            <div className="sm:flex gap-4">
              <button className="bg-[#EE10B0] text-white px-4 py-2 rounded-md hover:bg-pink-600 cursor-pointer sm:mb-0 mb-2">
                Discover Now
              </button>
              <button className="bg-transparent border border-[#0E9EEF] text-[#0E9EEF] px-4 py-2 rounded-md hover:bg-[#0E9EEF] hover:text-black cursor-pointer">
                Create Playlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Songs */}
      <div>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
          Trending <span className="text-[#EE10B0]">Songs</span>
        </h2>

        <div>
          {songs.map((song) => (
            <div
              key={song.id} // ✅ fixed key
              className="grid grid-cols-[40px_1fr_60px] sm:grid-cols-[50px_1fr_100px_80px] lg:grid-cols-[60px_1fr_150px_1fr_80px] px-4 items-center bg-[#1E1E1E] hover:bg-neutral-800 rounded-lg mb-2 transition"
            >
              <span className="text-white text-sm sm:text-base">{song.rank}</span>

              <div className="flex items-center gap-3">
                <Image src={song.image} alt={song.title} width={40} height={40} className="rounded" />
                <div>
                  <div className="text-sm sm:text-base lg:text-xl text-white font-semibold truncate">
                    {song.title}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">{song.artist}</div>
                </div>
              </div>

              <span className="hidden sm:block text-sm lg:text-[16px] text-white">
                {song.releaseDate}
              </span>

              <span className="hidden lg:block text-sm lg:text-[16px] text-white truncate">
                {song.album}
              </span>

              <span className="text-[14px] lg:text-[16px] text-white flex items-center justify-end gap-2">
                <Image src="/assets/ph_heart-light.png" alt="like" width={18} height={18} />
                {song.time}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center py-4">
          <Link href="/albums">
            <button className="px-6 py-2 bg-neutral-800 text-gray-300 rounded-lg hover:bg-neutral-700 transition">
              + View All
            </button>
          </Link>
        </div>
      </div>

      {/* Popular Artists */}
      <div>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">
          Popular <span className="text-[#EE10B0]">Artists</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-4">
          <PopularArtist image="/assets/artist1.png" name="Eminem" />
          <PopularArtist image="/assets/artist2.png" name="The Weeknd" />
          <PopularArtist image="/assets/artist3.png" name="Adele" />
          <PopularArtist image="/assets/artist4.png" name="Lana Del Rey" />
          <PopularArtist image="/assets/artist5.png" name="Harry Styles" />
          <PopularArtist image="/assets/artist6.png" name="Billie Eilish" />
          <div className="w-20 flex flex-col items-center justify-center">
            <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
            <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
          </div>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 mb-8 ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white self-start">
            Join Our Platform
          </h2>
          <p className="text-xl font-normal text-white">
            You can be one of the <span className="text-[#EE10B0]">members</span> of our platform by just adding some necessary information. If you already have an account, you can just hit the{" "}
            <span className="text-[#0E9EEF]">Login button</span>.
          </p>
        </div>
        <div>
          <SignUp />
        </div>
      </div>

      <Footer />
    </>
  );
}
