import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#181818] px-3 md:px-0  pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 ">
        
        {/* About */}
        <div className="mt-0 md:mt-6">
          <h3 className="text-white font-semibold text-[26px] mb-4">About</h3>
          <p className="text-[16px] leading-relaxed ">
            Melodies is a website that has been created for over{" "}
            <span className="text-[#EE10B0] font-medium">5 years</span> now and
            it is one of the most famous music player websites in the world. In
            this website you can listen and download songs for free. If you want
            no limitation you can buy our{" "}
            <Link href="/premium" className="text-blue-400 hover:underline">
              premium pass
            </Link>.
          </p>
        </div>

        {/* Links Section */}
        <div className=" md:flex justify-around lg:justify-between gap-8 md:space-y-0 space-y-6">
          {/* Melodies */}
          <div>
            <h3 className="font-bold text-[24px] mb-4 md:border-b text-white md:pb-4">Melodies</h3>

            <ul className="space-y-4 ">
              <li><Link href="/songs" className="hover:text-white text-[16px]">Songs</Link></li>
              <li><Link href="/radio" className="hover:text-white text-[16px]">Radio</Link></li>
              <li><Link href="/podcast" className="hover:text-white text-[16px]">Podcast</Link></li>
            </ul>
          </div> 

          {/* Access */}
          <div>
            <h3 className="text-white font-semibold text-[24px] mb-4 md:border-b md:pb-4">Access</h3>
            <ul className="space-y-4 ">
              <li><Link href="/explore" className="hover:text-white text-[16px]">Explore</Link></li>
              <li><Link href="/artists" className="hover:text-white text-[16px]">Artists</Link></li>
              <li><Link href="/playlists" className="hover:text-white text-[16px]">Playlists</Link></li>
              <li><Link href="/albums" className="hover:text-white text-[16px]">Albums</Link></li>
              <li><Link href="/trending" className="hover:text-white text-[16px]">Trending</Link></li>
            </ul>
          </div> 

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-[24px] mb-4 md:border-b md:pb-4">Contact</h3>
            <ul className="space-y-4 ">
              <li><Link href="/about" className="hover:text-white text-[16px]">About</Link></li>
              <li><Link href="/policy" className="hover:text-white text-[16px]">Policy</Link></li>
              <li><Link href="/social" className="hover:text-white text-[15px]">Social Media</Link></li>
              <li><Link href="/support" className="hover:text-white text-[16px]">Support</Link></li>
            </ul>
          </div>   
        </div>

        {/* Logo & Socials */}
        <div className="flex flex-col items-start md:items-center mt-0 md:mt-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#EE10B0] to-blue-500 text-transparent bg-clip-text">
            Melodies
          </h2>
          <div className="flex gap-6 mt-6">
            <a href="#" className="hover:text-white text-gray-400"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-white text-gray-400"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-white text-gray-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-white text-gray-400"><FaWhatsapp size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
