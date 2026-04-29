import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CategoryRating {
  label: string;
  score: number;
  icon: React.ReactNode;
}

interface ReviewTag {
  emoji: string;
  label: string;
  count: number;
}

interface Review {
  id: number;
  name: string;
  avatar: string; // URL or initials fallback
  memberSince: string;
  date: string;
  rating: number;
  text: string;
}

interface RatingAndReviewSectionProps {
  overallRating?: number;
  totalReviews?: number;
  ratingBars?: number[]; // [5-star%, 4-star%, 3-star%, 2-star%, 1-star%] 0–100
  categoryRatings?: CategoryRating[];
  reviewTags?: ReviewTag[];
  reviews?: Review[];
}

// ─── Default data ─────────────────────────────────────────────────────────────

const defaultCategoryRatings: CategoryRating[] = [
  {
    label: "Kebersihan",
    score: 5.0,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v.75H9.75V3.75ZM4.5 7.5h15l-1.5 12H6L4.5 7.5Zm3.75 3v6m3.75-6v6"
        />
      </svg>
    ),
  },
  {
    label: "Keakuratan",
    score: 5.0,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Check-in",
    score: 5.0,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
  {
    label: "Komunikasi",
    score: 5.0,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
    ),
  },
  {
    label: "Lokasi",
    score: 4.7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Nilai ekonomis",
    score: 4.9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6Z"
        />
      </svg>
    ),
  },
];

const defaultReviewTags: ReviewTag[] = [
  { emoji: "🏊", label: "Kolam renang", count: 4 },
  { emoji: "🎁", label: "Keramahtamahan", count: 8 },
  { emoji: "👨‍👩‍👧", label: "Keluarga", count: 5 },
  { emoji: "🛋️", label: "Kenyamanan", count: 6 },
  { emoji: "🧹", label: "Kebersihan", count: 5 },
  { emoji: "✅", label: "Kondisi", count: 3 },
  { emoji: "📍", label: "Lokasi", count: 2 },
];

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Valerie Cheo",
    avatar: "",
    memberSince: "9 tahun bergabung di Airbnb",
    date: "Februari 2026",
    rating: 5,
    text: "Masa inap kami sangat menyenangkan di sini. Tempat ini bersih dan luas, dan dengan nyaman menampung kami semua (sekitar 30 dari kami). Ada banyak tempat tidur, yang ...",
  },
  {
    id: 2,
    name: "Nur Nadhira",
    avatar: "",
    memberSince: "2 bulan bergabung di Airbnb",
    date: "Maret 2026",
    rating: 5,
    text: "Tempat yang bagus dan luas. Tuan rumah juga sangat membantu dan mengakomodasi. Kolam renang dan area anak-anak adalah bagian terbaik dari ...",
  },
  {
    id: 3,
    name: "Acninton Adlica",
    avatar: "",
    memberSince: "1 tahun bergabung di Airbnb",
    date: "Januari 2026",
    rating: 5,
    text: "Pengalaman menginap yang luar biasa! Fasilitas lengkap dan tuan rumah sangat responsif. Akan kembali lagi di lain waktu ...",
  },
  {
    id: 4,
    name: "Daymond",
    avatar: "",
    memberSince: "3 tahun bergabung di Airbnb",
    date: "Desember 2025",
    rating: 4,
    text: "Tempat yang sangat nyaman untuk keluarga besar. Halaman luas dan bersih. Harga sangat sepadan dengan fasilitas yang ditawarkan ...",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      className="w-3.5 h-3.5 text-gray-900"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} filled={i <= rating} />
      ))}
    </div>
  );
}

function AvatarFallback({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const colors = [
    "bg-rose-400",
    "bg-amber-400",
    "bg-teal-400",
    "bg-indigo-400",
    "bg-violet-400",
  ];
  const color = colors[name.charCodeAt(0) % colors.length];

  return (
    <div
      className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.includes("...");

  return (
    <div className="flex flex-col gap-3">
      {/* Reviewer info */}
      <div className="flex items-center gap-3">
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <AvatarFallback name={review.name} />
        )}
        <div>
          <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
          <p className="text-xs text-gray-500">{review.memberSince}</p>
        </div>
      </div>

      {/* Stars + date */}
      <div className="flex items-center gap-2">
        <StarRating rating={review.rating} />
        <span className="text-xs text-gray-500">· {review.date}</span>
      </div>

      {/* Text */}
      <p className="text-sm text-gray-700 leading-relaxed">
        {expanded ? review.text.replace("...", "") : review.text}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded((p) => !p)}
          className="text-sm font-semibold text-gray-900 underline underline-offset-2 text-left hover:text-rose-500 transition-colors w-fit"
        >
          {expanded ? "Tampilkan lebih sedikit" : "Tampilkan lebih banyak"}
        </button>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function RatingAndReviewSection({
  overallRating = 4.95,
  totalReviews = 33,
  ratingBars = [95, 4, 1, 0, 0],
  categoryRatings = defaultCategoryRatings,
  reviewTags = defaultReviewTags,
  reviews = defaultReviews,
}: RatingAndReviewSectionProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const displayedReviews = activeTag
    ? reviews.filter((r) =>
        r.text.toLowerCase().includes(activeTag.toLowerCase()),
      )
    : reviews;

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* ── Overall Rating Hero ─────────────────────────────────── */}
      <div className="flex flex-col items-center text-center mb-10">
        {/* Laurel + number */}
        <div className="flex items-center gap-3 mb-3">
          {/* Left laurel */}

          <img src="/public/leaf-left.png" alt="leaf" className="w-24" />

          <span className="text-8xl font-bold tracking-tight text-gray-900 pb-8">
            {overallRating.toFixed(2).replace(".", ",")}
          </span>

          {/* Right laurel (mirrored) */}
          <img src="/public/leaf-right.png" alt="leaf" className="w-24" />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          Pilihan tamu
        </h2>
        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
          Rumah ini menjadi favorit tamu berdasarkan penilaian, ulasan, dan
          keandalannya
        </p>
        <button className="mt-3 text-sm text-gray-700 underline underline-offset-2 hover:text-rose-500 transition-colors">
          Cara kerja ulasan
        </button>
      </div>

      {/* ── Rating Breakdown ────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-6 border-t border-gray-200 pt-8 pb-8">
        {/* Bar chart */}
        <div className="flex-shrink-0 w-full sm:w-52">
          <p className="text-sm font-semibold text-gray-900 mb-3">
            Nilai keseluruhan
          </p>
          <div className="flex flex-col gap-1.5">
            {[5, 4, 3, 2, 1].map((star, i) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-xs text-gray-500 w-2">{star}</span>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-800 rounded-full transition-all duration-700"
                    style={{ width: `${ratingBars[i]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px bg-gray-200 self-stretch" />

        {/* Category ratings */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-6 gap-x-4 gap-y-5">
          {categoryRatings.map((cat) => (
            <div key={cat.label} className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-900">{cat.label}</p>
              <p className="text-lg font-semibold text-gray-900">
                {cat.score.toFixed(1).replace(".", ",")}
              </p>
              <div className="text-gray-500 mt-12">{cat.icon}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Review Tags ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2.5 border-t border-gray-200 pt-6 pb-8">
        {reviewTags.map((tag) => (
          <button
            key={tag.label}
            onClick={() =>
              setActiveTag(activeTag === tag.label ? null : tag.label)
            }
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all ${
              activeTag === tag.label
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-gray-600"
            }`}
          >
            <span>{tag.emoji}</span>
            <span>{tag.label}</span>
            <span
              className={
                activeTag === tag.label ? "text-gray-300" : "text-gray-400"
              }
            >
              {tag.count}
            </span>
          </button>
        ))}
      </div>

      {/* ── Reviews Grid ────────────────────────────────────────── */}
      <div className="border-t border-gray-200 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {(displayedReviews.length > 0 ? displayedReviews : reviews).map(
            (review) => (
              <ReviewCard key={review.id} review={review} />
            ),
          )}
        </div>

        {/* Show all button */}
        <button className="mt-10 px-6 py-3 rounded-xl border border-gray-900 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
          Tampilkan semua {totalReviews} ulasan
        </button>
      </div>
    </section>
  );
}
