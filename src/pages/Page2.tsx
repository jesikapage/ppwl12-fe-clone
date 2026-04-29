<<<<<<< HEAD
import TelusuriLainnya from '../components/footerRooms';

export default function Page2() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex justify-center items-center py-20">
                <h1>Konten Utama Halaman Room (Page 2)</h1>
            </div>

            <TelusuriLainnya />
        </div>
    )
}
=======
import LocationSection from "@/components/LocationSection";
import RatingAndReviewSection from "@/components/RatingAndReviewSection";

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-white items-center space-y-24">
      <LocationSection />
      <RatingAndReviewSection />
    </div>
  );
}
>>>>>>> origin/rating-dan-review
