const FooterLinks = () => {
  const columns = [
    {
      title: "Dukungan",
      links: ["Pusat Bantuan", "Bantuan terkait keselamatan", "AirCover", "Anti-diskriminasi", "Dukungan disabilitas", "Opsi pembatalan", "Laporkan masalah lingkungan"],
    },
    {
      title: "Menjadi Tuan Rumah",
      links: ["Jadikan tempat Anda Airbnb", "Jadikan pengalaman Anda Airbnb", "Jadikan layanan Anda Airbnb", "AirCover untuk Tuan Rumah", "Sumber informasi menerima tamu", "Forum komunitas", "Menerima tamu dengan bijak", "Ikuti kelas menerima tamu secara gratis", "Temukan rekan tuan rumah", "Rekomendasikan tuan rumah"],
    },
    {
      title: "Airbnb",
      links: ["Update Mei 2025", "Ruang Berita", "Karier", "Investor", "Penginapan darurat Airbnb.org"],
    },
  ];

  return (
    <footer className="bg-[#F7F7F7] border-t border-[#DDDDDD] w-full mt-auto">
      {/* 3-column links */}
      <div className="max-w-[1280px] mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[14px] font-semibold text-[#222222] mb-3">{col.title}</h3>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[#222222] hover:underline decoration-[#222222]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#DDDDDD]">
        <div className="max-w-[1280px] mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#222222]">
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="px-1">·</span>
            <a href="#" className="hover:underline">Privasi</a>
            <span className="px-1">·</span>
            <a href="#" className="hover:underline">Ketentuan</a>
            <span className="px-1">·</span>
            <a href="#" className="hover:underline">Peta Situs</a>
          </div>
          <div className="flex items-center gap-6 font-semibold">
            <button className="flex items-center gap-2 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h2.4c-.15 1.57-.71 3.06-1.5 4.31-.58-1.48-.96-3.05-1.12-4.67h.22zm-3.9 0h2.12c.15 1.62.53 3.19 1.11 4.66-.58-1.47-.96-3.04-1.11-4.66h-2.12zm-2.88 0H5.6c.16 1.62.54 3.19 1.12 4.67-.79-1.25-1.35-2.74-1.5-4.31h-2.05zm7.33-1.5h-2.4c.16-1.62.54-3.19 1.12-4.67.79 1.25 1.35 2.74 1.5 4.31h-2.05zm-3.9 0h2.12c-.15-1.62-.53-3.19-1.11-4.66.58 1.47.96 3.04 1.11 4.66h-2.12zm-2.88 0H5.6c-.16-1.62-.54-3.19-1.12-4.67.79 1.25 1.35 2.74 1.5 4.31h-2.05z" /></svg>
              Bahasa Indonesia (ID)
            </button>
            <button className="hover:underline">Rp IDR</button>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-black">FB</a>
              <a href="#" className="hover:text-black">TW</a>
              <a href="#" className="hover:text-black">IG</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;