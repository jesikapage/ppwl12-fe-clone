import TelusuriLainnya from '../components/footerRooms';
import LocationSection from "@/components/LocationSection";
import RatingAndReviewSection from "@/components/RatingAndReviewSection";

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col bg-white items-center space-y-24 py-20">
      {/* Konten Utama */}
      <div className="flex flex-col items-center">
        <h1>Konten Utama Halaman Room (Page 2)</h1>
      </div>

      {/* Fitur Baru */}
      <LocationSection />
      <RatingAndReviewSection />

      {/* Footer Khusus Room */}
      <TelusuriLainnya />
    </div>
  );
}