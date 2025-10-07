import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
import Footer from '../../components/footer'
import TrendingSongs from '../../components/TrendingSong'

function page() {
  return (
    <>
      <div className=' bg-gradient-to-r from-[#085F8F] to-[#053754] min-h-screen pb-20'>
            <div className="bg-gradient-to-r from-[#0E9EEF] via-[#0E9EEF] to-[#085F8F] text-white p-6 rounded-lg">
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
                <div className='mt-10 lg:flex flex-col md:flex-row md:justify-between'>
                    <div className="block sm:flex gap-6 md:gap-12 w-full lg:w-[65%]">
                        {/* Album Image */}
                        <Image
                            src="/assets/trendingMusic.png"
                            alt="album"
                            width={250}
                            height={150}
                            className="rounded-lg mt-4 w-full sm:w-[170px] md:w-[220px] lg:w-[250px] object-cover"
                        />

                        {/* Text Section */}
                        <div className="flex flex-col space-y-2 md:space-y-6 mt-4 md:mt-0">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                 Trending songs <span className="text-[#EE10B0]">max</span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-300">
                                 Tate McRae, Nightmares, The Neighbourhood, Doja Cat and ...
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base md:text-xl">
                                <p>20 songs</p>
                                <span className="text-[#EE10B0]">•</span>
                                <p>1 hr 15 min</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-end justify-end'>
                        <button className="flex items-center justify-center mt-6 px-6 py-2  text-[#EE10B0] font-semibold rounded-lg transition ">
                            Play All
                        <Image src="/assets/play (2).png" alt="album" width={33} height={33} className="rounded-lg ml-4" />
                        </button>
                        {/* <Image src="/assets/play .png" alt="album" width={33} height={33} className="rounded-lg ml-4" /> */}
                    </div>
                </div>
            </div>
            
            <div className='px-2 lg:px-4 '>
                <TrendingSongs />
            </div>
        </div>  

        <Footer />  
    </>
  )
}

export default page