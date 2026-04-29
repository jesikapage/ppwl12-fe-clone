import { useState } from "react";

export default function LocationSection() {
  const locationName = "Kuching, Sarawak, Malaysia";
  const [mapLoaded, setMapLoaded] = useState(false);

  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127630.63115453898!2d110.22143304701869!3d1.4966419634436494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba7c82ada73ff%3A0x1e4f12a69057386!2srumah%20murah%20kuching!5e0!3m2!1sen!2sid!4v1777465809025!5m2!1sen!2sid`;

  return (
    <section className="space-y-24 w-full container mx-auto">
      <div className="bg-gray-200 w-full h-px"></div>
      <div className="w-full max-w-4xl mx-auto px-4 py-10 font-sans">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="mb-6">
          <h2 className="text-[22px] font-medium text-black tracking-tight mb-2">
            Lokasi Anda
          </h2>
          <p className="mt-1 text-sm text-gray-500">{locationName}</p>
        </div>

        {/* ── Map Container ──────────────────────────────────────── */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
          {/* Loading skeleton shown until iframe fires onLoad */}
          {!mapLoaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100 animate-pulse">
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span className="text-sm font-medium">Memuat peta…</span>
              </div>
            </div>
          )}

          <iframe
            title={`Peta lokasi – ${locationName}`}
            src={embedUrl}
            width="100%"
            height="480"
            style={{ border: 0, display: "block", opacity: mapLoaded ? 1 : 0 }}
            className="w-full transition-opacity duration-500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
          />
        </div>
      </div>
      <div className="bg-gray-200 w-full h-px"></div>
    </section>
  );
}
