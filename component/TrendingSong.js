"use client";
import trendingSong from "../data/trendingSongs";
import Image from "next/image";
import Link from "next/link";

export default function TrendingSongs() {
  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        {/* Header Row */}
        <div className="grid grid-cols-[40px_1fr_60px] sm:grid-cols-[50px_1fr_100px_80px] lg:grid-cols-[60px_1fr_150px_1fr_80px] px-4 py-3 text-sm">
          <span></span>
          <span></span>
          <span className="hidden sm:block text-white text-sm sm:text-base lg:text-xl">Release Date</span>
          <span className="hidden lg:block text-white text-sm sm:text-base lg:text-xl text-center">Album</span>
          <span className="text-right text-white text-sm sm:text-base lg:text-xl">Time</span>
        </div>

        {/* Song Rows */}
        {trendingSong.map((song) => (
          <Link href={`/songs/${song.id}`} key={song.id}>
            <div className="cursor-pointer grid grid-cols-[40px_1fr_60px] sm:grid-cols-[50px_1fr_100px_80px] lg:grid-cols-[60px_1fr_150px_1fr_80px] items-center mb-2">
              <span className="text-white">{song.rank}</span>
              <div className="col-span-2 sm:col-span-3 lg:col-span-4 bg-[#1E1E1E] hover:bg-neutral-800 rounded-lg transition grid grid-cols-subgrid items-center py-0 pe-2">
                <div className="flex items-center gap-3">
                  <Image src={song.image} alt={song.title} width={60} height={60} className="rounded" />
                  <div>
                    <div className="text-white font-semibold truncate">{song.title}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{song.artist}</div>
                  </div>
                </div>
                <span className="hidden sm:block text-white">{song.releaseDate}</span>
                <span className="hidden lg:block text-white truncate text-center">{song.album}</span>
                <span className="text-white flex items-center justify-end gap-2">{song.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
