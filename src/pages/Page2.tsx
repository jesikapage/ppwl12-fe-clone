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
