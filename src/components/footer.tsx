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
                  <a
                    href="#"
                    className="text-[14px] text-[#222222] hover:underline decoration-[#222222]"
                  >
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
        <div className="max-w-[1280px] mx-auto px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#222222]">
          
          {/* Kiri: copyright & links */}
          <div className="flex items-center gap-1 flex-wrap justify-center md:justify-start">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="mx-1">·</span>
            <a href="#" className="hover:underline">Privasi</a>
            <span className="mx-1">·</span>
            <a href="#" className="hover:underline">Ketentuan</a>
            <span className="mx-1">·</span>
            <a href="#" className="hover:underline">Peta Situs</a>
          </div>
 
          {/* Kanan: bahasa, IDR, sosmed */}
          <div className="flex items-center gap-4 font-semibold">
            {/* Globe + Bahasa */}
            <button className="flex items-center gap-2 hover:underline">
          {/* Globe SVG — sama persis dengan Airbnb */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {/* Lingkaran luar */}
            <circle cx="12" cy="12" r="10" />
            {/* Garis horizontal tengah */}
            <path d="M2 12h20" />
            {/* Elips vertikal kiri-kanan */}
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>Bahasa Indonesia (ID)</span>
        </button>
 
            {/* IDR */}
            <button className="hover:underline">Rp IDR</button>
 
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.9v-2.89h2.538V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
 
              {/* X (Twitter) */}
              <a href="#" aria-label="X" className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
 
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default FooterLinks;