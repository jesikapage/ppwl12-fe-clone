// src/components/AirbnbRoomDetail.tsx

export function AirbnbRoomDetail() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 relative">
      
      {/* ================= KOLOM KIRI (Detail Ruangan) ================= */}
      <div className="w-full md:w-2/3">
        
        {/* Judul & Info Dasar */}
        <h2 className="text-[26px] font-semibold text-gray-900 mb-1">
          Seluruh rumah di Kuching, Malaysia
        </h2>
        <p className="text-gray-900 mb-6">
          15 tamu · 4 kamar tidur · 6 tempat tidur · 3 kamar mandi
        </p>

        {/* Pilihan Tamu Banner */}
        <div className="flex items-center justify-between border border-gray-200 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-3 font-semibold text-lg w-1/3">
            {/* Left Leaf Icon (Simulasi) */}
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor"><path d="M16 1c-4.4 0-8 3.6-8 8 0 5.4 6 12.2 7.3 13.6.4.4 1 .4 1.4 0C18 21.2 24 14.4 24 9c0-4.4-3.6-8-8-8z"></path></svg>
            Pilihan<br/>tamu
            {/* Right Leaf Icon (Simulasi) */}
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor"><path d="M16 1c-4.4 0-8 3.6-8 8 0 5.4 6 12.2 7.3 13.6.4.4 1 .4 1.4 0C18 21.2 24 14.4 24 9c0-4.4-3.6-8-8-8z"></path></svg>
          </div>
          <div className="text-center w-1/3 border-l border-r border-gray-200 px-4">
            <div className="font-semibold text-[15px]">Salah satu rumah yang paling disukai di Airbnb, menurut tamu</div>
          </div>
          <div className="flex justify-around w-1/3 text-center">
            <div>
              <div className="text-xl font-bold">4,95</div>
              <div className="text-xs">★★★★★</div>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <div className="text-xl font-bold">19</div>
              <div className="text-xs underline cursor-pointer">Ulasan</div>
            </div>
          </div>
        </div>

        {/* Host Info */}
        <div className="flex items-center gap-4 py-6 border-t border-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" 
            alt="Tuan Rumah" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Tuan rumah: Sue</h3>
            <p className="text-gray-500 text-sm">Tuan rumah selama 7 tahun</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="py-6 border-t border-gray-200 space-y-6">
          <div className="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-900">Tunggu apa lagi?</h4>
              <p className="text-gray-500 text-sm">Ini salah satu dari sedikit tempat di area ini yang menyediakan kolam renang.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-900">Pengalaman check-in luar biasa</h4>
              <p className="text-gray-500 text-sm">Tamu terakhir memberikan nilai 5 bintang untuk proses check-in.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-900">Ekstra luas</h4>
              <p className="text-gray-500 text-sm">Tamu menyukai kelapangan penginapan ini untuk masa inap yang nyaman.</p>
            </div>
          </div>
        </div>

        {/* Translation Banner */}
        <div className="py-4 border-t border-gray-200">
          <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between">
            <span className="text-sm">Beberapa info diterjemahkan secara otomatis. <a href="#" className="font-semibold underline">Tampilkan bahasa asli</a></span>
          </div>
        </div>

        {/* Description */}
        <div className="py-6 text-gray-800">
          <p>
            Temukan tempat peristirahatan kami yang tenang di Bali, cocok untuk hingga 15 tamu. 
            Rumah dua lantai bergaya ini memiliki empat kamar tidur luas, ruang tamu terbuka 
            dengan dekorasi elegan, dan kolam renang luar ruangan yang menarik dengan dek 
            matahari. Nikmati fasilitas terbaik seperti dapur lengkap, WiFi berkecepatan tinggi, 
            smart TV, AC, dan parkir pribadi. Berlokasi strategis di dekat Farley Mall, Kuching Central, 
            dan bandara. Sangat cocok untuk liburan yang damai atau liburan yang penuh 
            petualangan - pesan sekarang!
          </p>
        </div>

        {/* Amenities (Fasilitas) */}
        <div className="py-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-6">Fasilitas yang ditawarkan</h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
            <div className="flex items-center gap-4"><span className="text-xl">🍳</span> Dapur</div>
            <div className="flex items-center gap-4"><span className="text-xl">📶</span> Wifi</div>
            <div className="flex items-center gap-4"><span className="text-xl">🚗</span> Parkir gratis di properti</div>
            <div className="flex items-center gap-4"><span className="text-xl">🏊</span> Kolam renang</div>
            <div className="flex items-center gap-4"><span className="text-xl">🐾</span> Hewan peliharaan diizinkan</div>
            <div className="flex items-center gap-4"><span className="text-xl">📺</span> TV</div>
            <div className="flex items-center gap-4"><span className="text-xl">🧺</span> Mesin cuci</div>
            <div className="flex items-center gap-4"><span className="text-xl">💨</span> Mesin pengering Gratis – Di dalam unit</div>
            <div className="flex items-center gap-4 line-through text-gray-500"><span className="text-xl">🚱</span> Alarm karbon monoksida</div>
            <div className="flex items-center gap-4 line-through text-gray-500"><span className="text-xl">🔕</span> Alarm asap</div>
          </div>
          <button className="px-6 py-3 border border-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition">
            Tampilkan ke-30 fasilitas
          </button>
        </div>

        {/* Calendar Section (Visual Mockup) */}
        <div className="py-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-1">Pilih tanggal check-in</h3>
          <p className="text-gray-500 text-sm mb-6">Tambahkan tanggal perjalanan Anda untuk melihat harga pasti</p>
          
          {/* Ini adalah gambaran struktur kalender sederhana */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center min-h-[300px] flex items-center justify-center">
            <p className="text-gray-500">[ Komponen Kalender Akan Muncul Di Sini ]</p>
          </div>
          <div className="flex justify-between items-center mt-4">
             <button className="p-2 hover:bg-gray-100 rounded-full">⌨️</button>
             <button className="font-semibold underline text-sm">Kosongkan tanggal</button>
          </div>
        </div>
      </div>

      {/* ================= KOLOM KANAN (Booking Card Sticky) ================= */}
      <div className="hidden md:block md:w-1/3">
        {/* Menggunakan class sticky-card yang ada di index.css kamu */}
        <div className="sticky-card border border-gray-200 rounded-2xl p-6 shadow-xl bg-white">
          <h3 className="text-[22px] font-semibold mb-6">Tambahkan tanggal untuk melihat harga</h3>
          
          {/* Input Group */}
          <div className="border border-gray-400 rounded-xl overflow-hidden mb-4">
            <div className="flex border-b border-gray-400">
              <div className="w-1/2 p-3 border-r border-gray-400 cursor-pointer">
                <div className="text-[10px] font-bold text-gray-800">CHECK-IN</div>
                <div className="text-sm text-gray-500">Tambahkan tanggal</div>
              </div>
              <div className="w-1/2 p-3 cursor-pointer">
                <div className="text-[10px] font-bold text-gray-800">CHECK-OUT</div>
                <div className="text-sm text-gray-500">Tambahkan tanggal</div>
              </div>
            </div>
            <div className="p-3 cursor-pointer flex justify-between items-center">
              <div>
                <div className="text-[10px] font-bold text-gray-800">TAMU</div>
                <div className="text-sm">1 tamu</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <button className="w-full bg-[#E31C5F] text-white font-semibold py-3.5 rounded-lg hover:bg-[#D70466] transition">
            Periksa ketersediaan
          </button>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-gray-500 font-medium underline flex items-center justify-center gap-2">
              <span>🏴</span> Laporkan iklan ini
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AirbnbRoomDetail;