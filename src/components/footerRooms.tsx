// src/components/footerRooms.tsx

const TelusuriLainnya = () => {
  const lokasiSekitar = [
    { kota: "Sibu", tipe: "Sewa tempat liburan" }, { kota: "Bintulu", tipe: "Sewa tempat liburan" }, { kota: "Kota Samarahan", tipe: "Sewa tempat liburan" },
    { kota: "Pontianak", tipe: "Sewa tempat liburan" }, { kota: "Sematan", tipe: "Sewa tempat liburan" }, { kota: "Singkawang", tipe: "Sewa tempat liburan" },
    { kota: "Lundu", tipe: "Sewa tempat liburan" }, { kota: "Sri Aman", tipe: "Sewa tempat liburan" }, { kota: "Dalat", tipe: "Sewa tempat liburan" },
  ];

  const tipePenginapan = [
    "Sewa tempat liburan di Kuching", "Penginapan bulanan di Kuching", "Tempat berlibur yang cocok untuk keluarga di Kuching",
    "Sewa tempat liburan dengan kolam renang di Kuching", "Sewa tempat liburan yang ramah hewan peliharaan di Kuching", "Sewa rumah untuk liburan di Kuching",
    "Sewa tempat liburan yang ramah hewan peliharaan di Sarawak", "Sewa rumah untuk liburan di Sarawak", "Sewa tempat liburan dengan kolam renang di Sarawak"
  ];

  return (
    <div className="bg-[#F7F7F7] border-t border-[#DDDDDD] w-full">
      <div className="max-w-[1280px] mx-auto px-10 py-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 text-[14px] text-[#222222] mb-12">
          <a href="#" className="hover:underline">Airbnb</a>
          <span className="text-[12px] text-[#717171]">{'>'}</span>
          <a href="#" className="hover:underline">Malaysia</a>
          <span className="text-[12px] text-[#717171]">{'>'}</span>
          <a href="#" className="hover:underline">Sarawak</a>
          <span className="text-[12px] text-[#717171]">{'>'}</span>
          <span>Kuching</span>
        </div>

        {/* Grid Telusuri pilihan lainnya */}
        <div className="mb-10 pb-10 border-b border-[#DDDDDD]">
          <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
            Telusuri pilihan lainnya di Kuching dan sekitarnya
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
            {lokasiSekitar.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <a href="#" className="text-[14px] font-semibold text-[#222222] hover:underline">
                  {item.kota}
                </a>
                <span className="text-[14px] text-[#717171]">{item.tipe}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Tipe penginapan lainnya */}
        <div className="pb-4">
          <h2 className="text-[22px] font-semibold text-[#222222] mb-6">
            Tipe penginapan lainnya di Airbnb
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
            {tipePenginapan.map((tipe, idx) => (
              <div key={idx}>
                <a href="#" className="text-[14px] text-[#717171] hover:underline decoration-[#717171]">
                  {tipe}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TelusuriLainnya;