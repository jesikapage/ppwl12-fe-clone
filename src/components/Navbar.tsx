import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("services");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tabs = [
    { id: "homes", label: "Homes", emoji: "🏠" },
    { id: "experiences", label: "Experiences", emoji: "🎈", isNew: true },
    { id: "services", label: "Services", emoji: "🛎️", isNew: true },
  ];

  return (
    // Background diubah jadi gelap (#121212 atau #1A1A1A)
    <nav className="w-full bg-[#1A1A1A] border-b border-gray-800 sticky top-0 z-50 font-sans px-6 transition-colors">
      <div className="max-w-[1280px] mx-auto h-20 flex items-center justify-between gap-4">

        {/* 1. Logo */}
        <a href="#" className="flex items-center text-[#FF385C] shrink-0">
          <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
            <path d="M16 1C10 1 5 9.5 5 16c0 4.4 2.5 8.3 6.3 10.3-.4-1.2-.6-2.6-.6-4 0-3.5 1.6-6.7 4.3-9-1-1.5-1.6-3.3-1.6-5.3 0-3.3 1.6-5 2.6-5s2.6 1.7 2.6 5c0 2-.6 3.8-1.6 5.3 2.7 2.3 4.3 5.5 4.3 9 0 1.4-.2 2.8-.6 4C24.5 24.3 27 20.4 27 16c0-6.5-5-15-11-15z" />
          </svg>
          <span className="ml-1 text-xl font-bold hidden lg:block tracking-tighter text-white">airbnb</span>
        </a>

        {/* 2. Tab Bar */}
        <div className="hidden md:flex items-center h-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-full px-4 flex items-center gap-2 relative text-sm font-medium transition-colors whitespace-nowrap
                ${activeTab === tab.id ? "text-white font-semibold" : "text-gray-400 hover:text-white"}`}
            >
              <span className="text-lg">{tab.emoji}</span>
              {tab.label}
              {tab.isNew && (
                <span className="text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full leading-none"
                  style={{ background: "linear-gradient(90deg, #FF385C, #E61E4D)" }}>
                  BARU
                </span>
              )}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* 3. Right Side */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Menjadi Tuan Rumah */}
          <a
            href="#"
            className="hidden lg:block text-sm font-semibold text-gray-200 px-4 py-2.5 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Menjadi Tuan Rumah
          </a>

          {/* Globe */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-gray-300">
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
              <path d="M8 .5a7.5 7.5 0 1 0 0 15A7.5 7.5 0 0 0 8 .5zm5.44 7H11.5c-.07-2.1-.6-3.9-1.4-5.24A6.5 6.5 0 0 1 13.44 7.5zM8 14a10.6 10.6 0 0 1-1.5-5.5h3A10.6 10.6 0 0 1 8 14zm-1.5-6.5A10.6 10.6 0 0 1 8 2a10.6 10.6 0 0 1 1.5 5.5h-3zm-.6-5.24C5.1 3.6 4.57 5.4 4.5 7.5H2.56A6.5 6.5 0 0 1 5.9 2.26zm-3.34 6.24H4.5c.07 2.1.6 3.9 1.4 5.24A6.5 6.5 0 0 1 2.56 8.5zm7.54 5.24C10.9 12.4 11.43 10.6 11.5 8.5h1.94a6.5 6.5 0 0 1-3.34 5.24z" />
            </svg>
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 px-3 py-2 border border-gray-700 rounded-full hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all bg-[#1A1A1A]"
            >
              {/* Hamburger */}
              <div className="flex flex-col gap-[4px]">
                <span className="block w-4 h-[1.5px] bg-gray-300 rounded" />
                <span className="block w-4 h-[1.5px] bg-gray-300 rounded" />
                <span className="block w-4 h-[1.5px] bg-gray-300 rounded" />
              </div>
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-[#484848] flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5" fill="#EBEBEB">
                  <path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 2c-7.3 0-13 4-13 9v1h26v-1c0-5-5.7-9-13-9z" />
                </svg>
              </div>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 top-[52px] w-56 bg-[#222222] border border-gray-700 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 z-50">
                <a href="#" className="block px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">Masuk</a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 transition-colors">Mendaftar</a>
                <hr className="my-1.5 border-gray-700" />
                <a href="#" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 transition-colors">Menjadi Tuan Rumah</a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 transition-colors">Rekomendasikan Tuan Rumah</a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 transition-colors">Temukan rekan tuan rumah</a>
                <hr className="my-1.5 border-gray-700" />
                <a href="#" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/10 transition-colors">Pusat Bantuan</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}