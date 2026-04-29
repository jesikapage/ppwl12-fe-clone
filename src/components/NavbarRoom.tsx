import { useState, useRef, useEffect } from "react";
import SearchBar from "./SearchBar"; 

export default function NavbarRoom() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // Background jadi gelap, border disesuaiin
    <nav className="w-full bg-[#1A1A1A] border-b border-gray-800 sticky top-0 z-50 px-10 py-4 transition-colors">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        
        {/* 1. Logo (Kiri) */}
        <div className="flex-1 flex justify-start">
          <a href="/" className="flex items-center text-[#FF385C] shrink-0">
            <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
              <path d="M16 1C10 1 5 9.5 5 16c0 4.4 2.5 8.3 6.3 10.3-.4-1.2-.6-2.6-.6-4 0-3.5 1.6-6.7 4.3-9-1-1.5-1.6-3.3-1.6-5.3 0-3.3 1.6-5 2.6-5s2.6 1.7 2.6 5c0 2-.6 3.8-1.6 5.3 2.7 2.3 4.3 5.5 4.3 9 0 1.4-.2 2.8-.6 4C24.5 24.3 27 20.4 27 16c0-6.5-5-15-11-15z" />
            </svg>
            <span className="ml-2 text-xl font-bold hidden lg:block tracking-tighter text-white">airbnb</span>
          </a>
        </div>

        {/* 2. Search Bar (Tengah) */}
        {/* Supaya SearchBar kelihatan di bg gelap, kita kasih border yang agak kontras */}
        <div className="flex-none shadow-sm hover:shadow-md transition-shadow rounded-full border border-gray-700 bg-[#222222]">
           <SearchBar /> 
        </div>

        {/* 3. User Menu (Kanan) */}
        <div className="flex-1 flex justify-end items-center gap-2">
          <a href="#" className="hidden md:block text-sm font-semibold text-gray-200 px-4 py-3 rounded-full hover:bg-white/10 transition-colors">
            Menjadi Tuan Rumah
          </a>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 p-2 pl-3 border border-gray-700 rounded-full bg-[#1A1A1A] hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all"
            >
              <div className="flex flex-col gap-[3px]">
                <span className="w-4 h-[1.5px] bg-gray-300"></span>
                <span className="w-4 h-[1.5px] bg-gray-300"></span>
                <span className="w-4 h-[1.5px] bg-gray-300"></span>
              </div>
              <div className="w-8 h-8 bg-[#484848] rounded-full flex items-center justify-center text-white">
                 <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current"><path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 2c-7.3 0-13 4-13 9v1h26v-1c0-5-5.7-9-13-9z"/></svg>
              </div>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-[#222222] border border-gray-700 rounded-xl shadow-2xl py-2 z-50 text-gray-200">
                <div className="font-semibold px-4 py-3 hover:bg-white/5 cursor-pointer text-sm">Masuk</div>
                <div className="px-4 py-3 hover:bg-white/5 cursor-pointer text-sm">Daftar</div>
                <hr className="my-2 border-gray-700" />
                <div className="px-4 py-3 hover:bg-white/5 cursor-pointer text-sm">Menjadi Tuan Rumah</div>
                <div className="px-4 py-3 hover:bg-white/5 cursor-pointer text-sm">Pusat Bantuan</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}