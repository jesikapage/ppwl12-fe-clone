"use client";

import { useState } from "react";

interface Destination {
  city: string;
  type: string;
}

const destinations: Destination[] = [
  { city: "Bali", type: "Sewa villa" },
  { city: "Jakarta", type: "Sewa apartemen" },
  { city: "Yogyakarta", type: "Sewa rumah" },
  { city: "Bandung", type: "Sewa villa" },
  { city: "Surabaya", type: "Sewa apartemen" },
  { city: "Lombok", type: "Sewa cottage" },
  { city: "Malang", type: "Sewa rumah" },
  { city: "Semarang", type: "Sewa tempat liburan" },
  { city: "Ubud", type: "Sewa villa" },
  { city: "Seminyak", type: "Sewa villa" },
  { city: "Canggu", type: "Sewa rumah pantai" },
  { city: "Nusa Dua", type: "Sewa resort" },
  { city: "Kuta", type: "Sewa apartemen" },
  { city: "Sanur", type: "Sewa villa" },
  { city: "Gili Islands", type: "Sewa cottage" },
  { city: "Raja Ampat", type: "Sewa resort" },
  { city: "Labuan Bajo", type: "Sewa tempat liburan" },
  { city: "Medan", type: "Sewa rumah" },
  { city: "Makassar", type: "Sewa apartemen" },
  { city: "Manado", type: "Sewa villa" },
  { city: "Batam", type: "Sewa resort" },
  { city: "Bintan", type: "Sewa cottage" },
  { city: "Palembang", type: "Sewa rumah" },
  { city: "Solo", type: "Sewa tempat liburan" },
  { city: "Bogor", type: "Sewa villa" },
  { city: "Puncak", type: "Sewa villa" },
  { city: "Lembang", type: "Sewa cottage" },
  { city: "Garut", type: "Sewa rumah" },
  { city: "Cianjur", type: "Sewa villa" },
  { city: "Sukabumi", type: "Sewa cottage" },
  { city: "Anyer", type: "Sewa rumah pantai" },
  { city: "Pangandaran", type: "Sewa cottage" },
  { city: "Karimunjawa", type: "Sewa resort" },
  { city: "Tanjung Lesung", type: "Sewa villa" },
  { city: "Thousand Islands", type: "Sewa cottage" },
  { city: "Derawan", type: "Sewa resort" },
];

export default function InspirationSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedDestinations = showAll ? destinations : destinations.slice(0, 12);

  return (
    <section className="py-8 border-t border-gray-200">
      <h2 className="text-xl md:text-2xl font-semibold text-[#222222] mb-6">
        Inspirasi untuk liburan mendatang
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-4">
        {displayedDestinations.map((dest, idx) => (
          <a
            key={idx}
            href="#"
            className="group block"
          >
            <p className="text-[15px] font-medium text-[#222222] group-hover:underline">
              {dest.city}
            </p>
            <p className="text-sm text-[#717171]">{dest.type}</p>
          </a>
        ))}
      </div>

      {!showAll && destinations.length > 12 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 text-[15px] font-semibold text-[#222222] underline hover:text-[#717171] transition-colors"
        >
          Tampilkan lebih banyak
        </button>
      )}
    </section>
  );
}
