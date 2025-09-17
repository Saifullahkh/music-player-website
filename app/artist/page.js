import React from 'react'
import Image from 'next/image'
import TrendingSongs from '../component/TrendingSong'
import Link from 'next/link'
import SongCard from '@/component/card'
import { Plus } from 'lucide-react'
import PopularArtist from '@/app/component/popularArtist'
import Footer from '@/app/component/footer'

function page() {
  return (
    <>
      <div className='bg-gradient-to-r from-[#0C0B0B] to-[#000000] min-h-screen pb-20 p-0 rounded-t-lg'>
            <div className="bg-[url('/assets/Eminium.png')] h-[422px] text-white p-6 rounded-lg">
                <div className='flex  justify-between'>
                    <Link href="/" className='flex items-center gap-2'>
                        <Image src="/assets/Vector.png" alt="album" width={33} height={33} className="rounded-lg" />
                    </Link>
                    <div>
                        <div className='flex items-center gap-6'>
                            <nav className="hidden md:flex space-x-4">
                                <Link href="/share" className="text-xl font-semibold text-white hover:text-gray-300 transition">Share</Link>
                                <Link href="/support" className="text-xl font-semibold text-white hover:text-gray-300 transition">About</Link>
                                <Link href="/premium" className="text-xl font-semibold text-white hover:text-gray-300 transition">Premium</Link>
                            </nav>
                            <div>
                                <Link href="/profile">
                                    <Image src="/assets/user.png" alt="profile" width={33} height={33} className="rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-end items-start h-[300px]'>
                    <h1 className='text-6xl md:text-8xl font-bold '>Eminem</h1>
                </div>
            </div>

            {/* Artist's Albums Section */}
            <div className='px-2 lg:px-3 '>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">Artist&apos;s <span className="text-[#EE10B0]">Albums</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
                    <SongCard
                        image="/assets/albums11.png"
                        title="The Eminem Show"
                        artist="2002"
                    />
                    <SongCard
                        image="/assets/albums12.png"
                        title="Encore"
                        artist="2010"
                    />
                    <SongCard
                        image="/assets/albums13.png"
                        title="Music To Be Mrde..."
                        artist="2001"
                    />
                    <SongCard
                        image="/assets/albums14.png"
                        title="Recovery"
                        artist="2010"
                    />
                    <SongCard
                        image="/assets/albums15.png"
                        title="Eminem The Slim..."
                        artist="1999"
                    />
                    <div className="w-20 flex flex-col items-center justify-center">
                        <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
                        <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
                    </div>
                </div>
            </div>

             {/* Single Songs Section */}
            <div className='px-2 lg:px-3 '>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">Single <span className="text-[#EE10B0]">Songs</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
                    <SongCard
                        image="/assets/s1.png"
                        title="Lace It"
                        artist="2023"
                    />
                    <SongCard
                        image="/assets/s2.png"
                        title="Releast"
                        artist="2022"
                    />
                    <SongCard
                        image="/assets/s3.png"
                        title="From The D 2 Th..."
                        artist="2023"
                    />
                    <SongCard
                        image="/assets/s4.png"
                        title="911"
                        artist="2022"
                    />
                    <SongCard
                        image="/assets/s5.png"
                        title="Killshot"
                        artist="2018"
                    />
                    <div className="w-20 flex flex-col items-center justify-center">
                        <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
                        <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
                    </div>
                </div>
            </div>

            {/* Artist's Playlist Section */}
             <div className='px-2 lg:px-3 '>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">Artist&apos;s <span className="text-[#EE10B0]">Playlist</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
                    <SongCard
                        image="/assets/art1.png"
                        title="Full Collection"
                        noPadding
                    />
                    <SongCard
                        image="/assets/art2.png"
                        title="Best of Eminem"
                        noPadding
                    />
                    <SongCard
                        image="/assets/art3.png"
                        title="Old Songs"
                        noPadding
                    />
                    <SongCard
                        image="/assets/art4.png"
                        title="Fan Favorites"
                        noPadding
                    />
                    <SongCard
                        image="/assets/art5.png"
                        title="New Releases"
                        noPadding
                    />
                    <div className="w-20 flex flex-col items-center justify-center">
                        <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
                        <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
                    </div>
                </div>
            </div>

            <div className='px-2 lg:px-3 '>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4 ">Eminem Fans <span className="text-[#EE10B0]">Also Listen To</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
                    <PopularArtist
                        image="/assets/cent.png"
                        name="50 Cent"
                    />
                    <PopularArtist
                        image="/assets/snoop.png"
                        name="Snoop dog"
                    />
                    <PopularArtist
                        image="/assets/tupac.png"
                        name="Tupac"
                    />
                    <PopularArtist
                        image="/assets/jay.png"
                        name="Jay+Z"
                    />
                   
                    <div className="w-20 flex flex-col items-center justify-center">
                        <Plus className="mx-auto mb-3 text-gray-400 rounded-full p-2 bg-neutral-800 transition cursor-pointer" size={40} />
                        <h3 className=" text-sm font-semibold text-white text-center">View All</h3>
                    </div>
                </div>
            </div>
        </div>  
        <Footer />  
    </>
  )
}

export default page