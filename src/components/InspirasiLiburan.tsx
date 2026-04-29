// components/InsipirasiLiburan.tsx
// Section "Inspirasi untuk liburan mendatang" — ada di atas footer main page
// Menggunakan useState untuk: active tab & show more/less

import { useState } from "react";

const tabs = ["Populer", "Seni & budaya", "Pantai", "Pegunungan", "Alam terbuka", "Aktivitas"];

const destinasiData: Record<string, { kota: string; tipe: string }[]> = {
  Populer: [
    { kota: "Madrid", tipe: "Sewa tempat liburan" },
    { kota: "Chicago", tipe: "Sewa rumah" },
    { kota: "Philadelphia", tipe: "Sewa kondominium" },
    { kota: "Orange Beach", tipe: "Sewa kondominium" },
    { kota: "Charleston", tipe: "Sewa rumah" },
    { kota: "Raleigh", tipe: "Sewa kondominium" },
    { kota: "San Juan", tipe: "Sewa rumah" },
    { kota: "Washington", tipe: "Sewa kondominium" },
    { kota: "Ocean City", tipe: "Sewa apartemen" },
    { kota: "West Palm Beach", tipe: "Sewa tempat liburan" },
    { kota: "Charlotte", tipe: "Sewa kabin" },
    { kota: "Tampa", tipe: "Sewa kondominium" },
    { kota: "Port Aransas", tipe: "Sewa tempat liburan" },
    { kota: "San Jose", tipe: "Sewa kondominium" },
    { kota: "Savannah", tipe: "Sewa vila" },
    { kota: "Manhattan", tipe: "Sewa Bulanan" },
    { kota: "Kansas City", tipe: "Sewa tempat liburan" },
  ],
  "Seni & budaya": [
    { kota: "Paris", tipe: "Sewa apartemen" },
    { kota: "Rome", tipe: "Sewa apartemen" },
    { kota: "Barcelona", tipe: "Sewa kondominium" },
    { kota: "Amsterdam", tipe: "Sewa rumah" },
    { kota: "Vienna", tipe: "Sewa apartemen" },
    { kota: "Prague", tipe: "Sewa kondominium" },
  ],
  Pantai: [
    { kota: "Bali", tipe: "Sewa vila" },
    { kota: "Phuket", tipe: "Sewa vila" },
    { kota: "Miami", tipe: "Sewa kondominium" },
    { kota: "Maldives", tipe: "Sewa villa" },
    { kota: "Cancun", tipe: "Sewa resort" },
  ],
  Pegunungan: [
    { kota: "Swiss Alps", tipe: "Sewa kabin" },
    { kota: "Aspen", tipe: "Sewa chalet" },
    { kota: "Banff", tipe: "Sewa kabin" },
    { kota: "Queenstown", tipe: "Sewa rumah" },
  ],
  "Alam terbuka": [
    { kota: "Yellowstone", tipe: "Sewa kabin" },
    { kota: "Patagonia", tipe: "Sewa tenda glamping" },
    { kota: "Iceland", tipe: "Sewa rumah" },
    { kota: "New Zealand", tipe: "Sewa farm" },
  ],
  Aktivitas: [
    { kota: "Las Vegas", tipe: "Sewa kondominium" },
    { kota: "Orlando", tipe: "Sewa vila" },
    { kota: "Dubai", tipe: "Sewa apartemen" },
    { kota: "Tokyo", tipe: "Sewa apartemen" },
  ],
};

// Jumlah item yang ditampilkan sebelum "show more"
const INITIAL_SHOW = 12;

const InsipirasiLiburan = () => {
  const [activeTab, setActiveTab] = useState("Populer");
  const [showMore, setShowMore] = useState(false);

  const allItems = destinasiData[activeTab] ?? [];
  const visibleItems = showMore ? allItems : allItems.slice(0, INITIAL_SHOW);
  const hasMore = allItems.length > INITIAL_SHOW;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setShowMore(false); // reset show more saat ganti tab
  };

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">
        Inspirasi untuk liburan mendatang
      </h2>

      {/* Tab Navigation */}
      <div className="flex gap-6 border-b border-gray-300 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`pb-3 text-sm whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "border-b-2 border-black font-semibold text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid Destinasi */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6">
        {visibleItems.map((item, idx) => (
          <div key={`${item.kota}-${idx}`}>
            <a href="#" className="text-sm font-semibold text-gray-800 hover:underline">
              {item.kota}
            </a>
            <p className="text-sm text-gray-500">{item.tipe}</p>
          </div>
        ))}
      </div>

      {/* Show More / Less Button */}
      {hasMore && (
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="mt-6 flex items-center gap-1 text-sm font-semibold text-gray-800 hover:underline"
        >
          {showMore ? "Tampilkan lebih sedikit ▲" : "Tampilkan lebih banyak ▼"}
        </button>
      )}
    </section>
  );
};

export default InsipirasiLiburan;