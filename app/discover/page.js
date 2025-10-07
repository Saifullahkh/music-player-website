import React from 'react'
import { Search, Plus } from "lucide-react";
import Image from 'next/image';
import SongCard from '../../components/card';
import PopularArtist from '../../components/popularArtist';
import Footer from '../../components/footer';

function page() {
  return (
        <>
            <div className="flex items-center justify-between p-4">
                <div className="relative md:w-80 w-40 bg-[#1f1f1f] rounded-md">
                {/* Search Icon */}
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

                {/* Input */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-md   focus:outline-none focus:ring-2 focus:ring-[#EE10B0]  text-white"
                />
                </div>
                <button className="md:w-[120px] w-[80px] px-4 py-2 text-[#EE10B0] hover:text-white hover:bg-[#EE10B0] rounded-md border border-[#EE10B0] cursor-pointer">Login</button>
            </div>

            {/* Music Genres */}
            <div>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">Music <span className="text-[#EE10B0]">Genres</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
                    <div className="rounded-lg cursor-pointer">
                        <Image
                            src="/assets/m1.png"
                            alt="Rap Tricks"
                            width={230}
                            height={170}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="rounded-lg cursor-pointer">
                        <Image
                            src="/assets/m2.png"
                            alt="Rap Tricks"
                            width={230}
                            height={170}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="rounded-lg cursor-pointer">
                        <Image
                            src="/assets/m3.png"
                            alt="Rap Tricks"
                            width={230}
                            height={170}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="rounded-lg cursor-pointer">
                        <Image
                            src="/assets/m4.png"
                            alt="Rap Tricks"
                            width={230}
                            height={170}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="w-20 flex flex-col items-center justify-center">
                        <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
                        <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
                    </div>
                </div>
            </div>

            {/* Mood Playlist */}
            <div>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">Mood <span className="text-[#EE10B0]">Playlist</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
                    <SongCard
                        image="/assets/mood1.png"
                        title="Sad Playlist"
                        noPadding
                    />
                    <SongCard
                        image="/assets/mood2.png"
                        title="Chill Playlist"
                        noPadding
                    />
                    <SongCard
                        image="/assets/mood3.png"
                        title="Workout Playlist"
                        noPadding
                    />
                    <SongCard
                        image="/assets/mood4.png"
                        title="Love Playlist"
                        noPadding
                    />
                    <SongCard
                        image="/assets/mood5.png"
                        title="Happy Playlist"
                        noPadding
                    />
                    <div className="w-20 flex flex-col items-center justify-center">
                        <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
                        <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
                    </div>
                </div>
            </div>

             {/* Popular Artists */}
            <div>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">Popular <span className="text-[#EE10B0]">Artists</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-4">
                    <PopularArtist
                        image="/assets/artist1.png"
                        name="Eminem"
                    />
                    <PopularArtist
                        image="/assets/artist2.png"
                        name="The Weeknd"
                    />
                    <PopularArtist
                        image="/assets/artist3.png"
                        name="Adele"
                    />
                    <PopularArtist
                        image="/assets/artist4.png"
                        name="Lana Del Rey"
                    />
                    <PopularArtist
                        image="/assets/artist5.png"
                        name="Harry Styles"
                    />
                    <PopularArtist
                        image="/assets/artist6.png"
                        name="Billie Eilish"
                    />
                    <div className="w-20 flex flex-col items-center justify-center">
                        <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
                        <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
                    </div>
                </div>
            </div>

            {/* Music Video */}
            <div>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                    Music <span className="text-[#EE10B0]">Video</span>
                </h2>

                {/* Wrapper */}
                <div className="flex flex-col md:flex-row justify-between gap-6 mt-4">
                    
                    {/* Song Cards Grid */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SongCard
                        image="/assets/v2.png"
                        title="Shape Of You"
                        artist="Ed Sheeran"
                        viewer="5M views"
                        width="100%"
                    />
                    <SongCard
                        image="/assets/v1.png"
                        title="Roar"
                        artist="Katy Perry"
                        viewer="4.6M views"
                        width="100%"
                    />
                    <SongCard
                        image="/assets/v4.png"
                        title="Shake It Off"
                        artist="Taylor Swift"
                        viewer="4.2M views"
                        width="100%"
                    />
                    <SongCard
                        image="/assets/v3.png"
                        title="Someone Like You"
                        artist="Adele"
                        viewer="3M views"
                        width="100%"
                    />
                    <SongCard
                        image="/assets/v5.png"
                        title="New Rules"
                        artist="Dua Lipa"
                        viewer="3.7M views"
                        width="100%"
                    />
                    <SongCard
                        image="/assets/v6.png"
                        title="Waka Waka"
                        artist="Shakira"
                        viewer="3.5M views"
                        width="100%"
                    />
                    </div>

                    {/* View All (Responsive) */}
                    <div className="w-full md:w-24 flex flex-col items-center justify-center mt-6 md:mt-0">
                    <Plus
                        className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer"
                        size={40}
                    />
                    <h3 className="text-sm font-semibold text-white text-center">
                        View All
                    </h3>
                    </div>
                </div>
            </div>

            {/* New Release Songs */}
            <div>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">New Release <span className="text-[#EE10B0]">Songs</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
                    <SongCard
                    image="/assets/frame 185 (5).png"
                    title="Time"
                    artist="Luciano"
                    />
                    <SongCard
                    image="/assets/Frame 185 (6).png"
                    title="112"
                    artist="jazzek"
                    />
                    <SongCard
                    image="/assets/Frame 185 (7).png"
                    title="We Don’t Care"
                    artist="Kyanu & Dj Gullum"
                    />
                    <SongCard
                    image="/assets/Frame 185 (9).png"
                    title="Who I Am"
                    artist="Alan Walker & Elias"
                    />
                    <SongCard
                    image="/assets/frame 185 (11).png"
                    title="Baixo"
                    artist="XXAnteria"
                    />
                    <div className="w-20 flex flex-col items-center justify-center">
                    <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
                    <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
                    </div>
                </div>
            </div>

             {/* Top Albums */}
            <div>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">Top <span className="text-[#EE10B0]">Albums</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
                    <SongCard
                        image="/assets/album6.png"
                        title="I Got Heaven"
                        artist="Adele"
                    />
                    <SongCard
                        image="/assets/album7.png"
                        title="Saviors"
                        artist="Green Day"
                    />
                    <SongCard
                        image="/assets/album8.png"
                        title="Loss of Life"
                        artist="Harry Styles"
                    />
                    <SongCard
                        image="/assets/album9.png"
                        title="All Quite On The..."
                        artist="Lana Del Ray"
                    />
                    <SongCard
                        image="/assets/album10.png"
                        title="Little Rope"
                        artist="The Weekend"
                    />
                    <div className="w-20 flex flex-col items-center justify-center">
                        <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
                        <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default page