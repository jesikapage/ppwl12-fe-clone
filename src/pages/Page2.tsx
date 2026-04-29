import AirbnbImages from "../components/SectionImages";
import AirbnbRoomDetail from "../components/SectionDetailRoom"; // 1. Import dengan nama ini
import RatingAndReviewSection from "../components/RatingAndReviewSection";
import LocationSection from "../components/LocationSection";
import SectionTuanRumah from "../components/SectionTuanRumah";
import TelusuriLainnya from "../components/footerRooms";

export default function Page2() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      {/* 1. Bagian Foto */}
      <AirbnbImages />

      {/* 2. Bagian Detail (PASTIKAN NAMANYA <AirbnbRoomDetail />) */}
      <div className="border-b border-gray-200">
        <AirbnbRoomDetail /> 
      </div>

      {/* 3. Rating */}
      <div className="border-b border-gray-200 py-12">
        <RatingAndReviewSection />
      </div>

      {/* 4. Lokasi */}
      <div className="border-b border-gray-200 py-12">
        <LocationSection />
      </div>

      {/* 5. Tuan Rumah */}
      <div className="border-b border-gray-200 py-12">
        <SectionTuanRumah />
      </div>

      {/* 6. Footer Room */}
      <div className="py-12">
        <TelusuriLainnya />
      </div>
    </div>
  );
}