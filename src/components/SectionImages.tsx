export function AirbnbImages() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {/* Translation Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <h1 className="text-2xl font-semibold text-gray-900">Rumah Kolam Renang Pribadi untuk 15 orang</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Share Button */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span className="text-sm font-medium underline">Bagikan</span>
          </button>
          {/* Save Button */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm font-medium underline">Simpan</span>
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-xl overflow-hidden">
        {/* Large Image (Left Side - spans 2 columns and 2 rows) */}
        <div className="col-span-2 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
            alt="Villa dengan kolam renang"
            className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-all"
          />
        </div>

        {/* Top Right Image 1 */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
            alt="Teras villa"
            className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-all"
          />
        </div>

        {/* Top Right Image 2 */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
            alt="Ruang tamu"
            className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-all"
          />
        </div>

        {/* Bottom Right Image 1 */}
        <div className="col-span-1 row-span-1">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop"
            alt="Kamar tidur"
            className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-all"
          />
        </div>

        {/* Bottom Right Image 2 */}
        <div className="col-span-1 row-span-1 relative">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop"
            alt="Area outdoor"
            className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition-all"
          />
        </div>

        {/* Show All Photos Button */}
        <button className="absolute bottom-4 right-4 flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-800 font-medium text-sm hover:bg-gray-100 transition-colors shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="3" cy="3" r="1.5" />
            <circle cx="8" cy="3" r="1.5" />
            <circle cx="13" cy="3" r="1.5" />
            <circle cx="3" cy="8" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="13" cy="8" r="1.5" />
            <circle cx="3" cy="13" r="1.5" />
            <circle cx="8" cy="13" r="1.5" />
            <circle cx="13" cy="13" r="1.5" />
          </svg>
          Tampilkan semua foto
        </button>
      </div>
    </div>
  );
}