"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-4">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex justify-center">
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
            {/* Location */}
            <button className="flex flex-col items-start px-6 py-3 rounded-full hover:bg-gray-100 transition-colors min-w-[180px]">
              <span className="text-xs font-semibold text-[#222222]">Lokasi</span>
              <span className="text-sm text-[#717171]">Cari destinasi</span>
            </button>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-300" />

            {/* Date */}
            <button className="flex flex-col items-start px-6 py-3 rounded-full hover:bg-gray-100 transition-colors min-w-[140px]">
              <span className="text-xs font-semibold text-[#222222]">Kapan</span>
              <span className="text-sm text-[#717171]">Tambahkan tanggal</span>
            </button>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-300" />

            {/* Guests */}
            <div className="flex items-center gap-2 pl-6 pr-2 py-2">
              <button className="flex flex-col items-start rounded-full hover:bg-gray-100 transition-colors py-1 pr-4">
                <span className="text-xs font-semibold text-[#222222]">Peserta</span>
                <span className="text-sm text-[#717171]">Tambahkan tamu</span>
              </button>

              {/* Search Button */}
              <button className="flex items-center justify-center w-12 h-12 bg-[#FF385C] hover:bg-[#E31C5F] rounded-full transition-colors">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}