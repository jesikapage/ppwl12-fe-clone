import React from 'react';
import { Globe, MapPin, ShieldCheck, Star, Award } from 'lucide-react';

const SectionTuanRumah: React.FC = () => {
  return (
    <section className="py-12 border-t border-gray-200 font-sans text-[#222222]">
      {/* Judul Utama */}
      <h2 className="text-2xl font-semibold mb-8">Tuan rumah Anda</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* KOLOM KIRI */}
        <div className="space-y-8">
          {/* Card Profil Putih */}
          <div className="bg-white rounded-3xl shadow-[0_3px_12px_rgba(0,0,0,0.15)] p-8 flex items-center max-w-[400px]">
            {/* Bagian Foto & Nama */}
            <div className="flex flex-col items-center flex-1 pr-10 text-center">
              <div className="relative">
                <img
                  src="https://a0.muscache.com/im/pictures/user/User-48353360/original/555e0932-3860-466d-b873-162985f470a1.jpeg" 
                  alt="Sue"
                  className="w-28 h-28 rounded-full object-cover"
                />
                {/* Badge Centang Merah */}
                <div className="absolute bottom-1 right-1 bg-[#E31C5F] p-1.5 rounded-full border-2 border-white shadow-sm">
                  <ShieldCheck size={16} color="white" fill="white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mt-3">Sue</h3>
              <p className="text-sm font-semibold text-gray-800">Tuan Rumah</p>
            </div>

            {/* Bagian Statistik di Kanan Card */}
            <div className="flex flex-col justify-between space-y-4 border-l border-gray-100 pl-8 min-w-[120px]">
              <div>
                <span className="text-xl font-bold block">230</span>
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Ulasan</span>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <span className="text-xl font-bold block flex items-center gap-1">
                  4,8 <Star size={14} className="fill-current" />
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Nilai</span>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <span className="text-xl font-bold block">7</span>
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider leading-tight">
                  Tahun menjadi tuan rumah
                </span>
              </div>
            </div>
          </div>

          {/* Info Bahasa & Lokasi */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="text-gray-800">
                <Globe size={24} strokeWidth={1.5} />
              </div>
              <span className="text-base">Saya menguasai bahasa Tionghoa, Inggris, dan Melayu</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-gray-800">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <span className="text-base">Tinggal di Kuala Lumpur, Malaysia</span>
            </div>
          </div>

          {/* Teks Deskripsi */}
          <p className="text-base leading-7 text-gray-800">
            Dengan 10+ tahun di industri hotel dan sekarang 6+ tahun menerima tamu, 
            keramahtahaman ada dalam DNA saya. Meskipun saya telah beralih ke pos 
            pemasaran selama pandemi, menerima tamu tetap menjadi kegembiraan saya - 
            saya mencurahkan inspirasi perjalanan global saya dan memperhatikan detail 
            setiap masa inap, memastikan Anda merasakan kehangatan Malaysia dengan kenyamanan duniawi.
          </p>
        </div>

        {/* KOLOM KANAN */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">Detail Tuan Rumah</h4>
            <p className="text-gray-800">Tingkat respons: 100%</p>
            <p className="text-gray-800">Menanggapi dalam satu jam</p>
          </div>

          {/* Tombol Pesan */}
          <button className="bg-[#f7f7f7] hover:bg-[#ebebeb] border border-[#222222] text-[#222222] px-8 py-3.5 rounded-xl font-semibold text-base transition-all w-full md:w-fit mt-4">
            Kirimkan pesan kepada tuan rumah
          </button>

          {/* Pesan Keamanan */}
          <div className="pt-8 border-t border-gray-200 flex gap-4 max-w-sm mt-4">
             <div className="text-[#E31C5F] mt-0.5">
                <Award size={20} fill="currentColor" />
             </div>
             <p className="text-[12px] leading-5 text-gray-700">
               Untuk membantu melindungi pembayaran Anda, pastikan Anda selalu menggunakan Airbnb 
               untuk mengirimkan uang dan berkomunikasi dengan tuan rumah.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTuanRumah;