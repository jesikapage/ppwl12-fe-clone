
const FooterLinks = () => {
  const columns = [
    {
      title: "Dukungan",
      links: [
        "Pusat Bantuan",
        "Bantuan terkait keselamatan",
        "AirCover",
        "Anti-diskriminasi",
        "Dukungan disabilitas",
        "Opsi pembatalan",
        "Laporkan masalah lingkungan",
      ],
    },
    {
      title: "Menjadi Tuan Rumah",
      links: [
        "Jadikan tempat Anda Airbnb",
        "Jadikan pengalaman Anda Airbnb",
        "Jadikan layanan Anda Airbnb",
        "AirCover untuk Tuan Rumah",
        "Sumber informasi menerima tamu",
        "Forum komunitas",
        "Menerima tamu dengan bijak",
        "Ikuti kelas menerima tamu secara gratis",
        "Temukan rekan tuan rumah",
        "Rekomendasikan tuan rumah",
      ],
    },
    {
      title: "Airbnb",
      links: [
        "Update Mei 2025",
        "Ruang Berita",
        "Karier",
        "Investor",
        "Penginapan darurat Airbnb.org",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 border-t border-gray-300">
      {/* 3-column links */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{col.title}</h3>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:underline"
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
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privasi</a>
            <span>·</span>
            <a href="#" className="hover:underline">Ketentuan</a>
            <span>·</span>
            <a href="#" className="hover:underline">Peta Situs</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:underline">
              🌐 <span>Bahasa Indonesia (ID)</span>
            </button>
            <span>Rp IDR</span>
            <div className="flex items-center gap-3">
              {/* Social icons (placeholder text) */}
              <a href="#" aria-label="Facebook" className="hover:text-gray-900">f</a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-900">𝕏</a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-900">ig</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;