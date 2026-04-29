import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import PropertyCarousel from "@/components/PropertyCarousel";
import InspirationSection from "@/components/InspirationSection";
import Footer from "@/components/Footer";

// Sample property data
const portlandProperties = [
  {
    id: "1",
    images: [
      "https://ext.same-assets.com/1938912415/3856034971.jpeg",
      "https://ext.same-assets.com/1938912415/1865612228.jpeg",
    ],
    title: "Apartemen di Woodlawn",
    price: "Rp3.488.120 untuk 2 malam",
    rating: 4.85,
    isGuestFavorite: true,
  },
  {
    id: "2",
    images: [
      "https://ext.same-assets.com/1938912415/1315121115.jpeg",
      "https://ext.same-assets.com/1938912415/134786913.jpeg",
    ],
    title: "Kamar di Boise",
    price: "Rp2.709.395 untuk 2 malam",
    rating: 4.99,
    isGuestFavorite: true,
  },
  {
    id: "3",
    images: [
      "https://ext.same-assets.com/1938912415/1800368228.jpeg",
      "https://ext.same-assets.com/1938912415/1064807672.jpeg",
    ],
    title: "Hotel di Portland Pusat Kota",
    price: "Rp4.057.536 untuk 2 malam",
    rating: 4.77,
    isGuestFavorite: false,
  },
  {
    id: "4",
    images: [
      "https://ext.same-assets.com/1938912415/4249794509.jpeg",
      "https://ext.same-assets.com/1938912415/805373595.jpeg",
    ],
    title: "Kamar di Richmond",
    price: "Rp2.794.676 untuk 2 malam",
    rating: 4.86,
    isGuestFavorite: true,
  },
  {
    id: "5",
    images: [
      "https://ext.same-assets.com/1938912415/1178997127.jpeg",
      "https://ext.same-assets.com/1938912415/1009206812.jpeg",
    ],
    title: "Suite tamu di Lents",
    price: "Rp3.182.139 untuk 2 malam",
    rating: 4.94,
    isGuestFavorite: true,
  },
  {
    id: "6",
    images: [
      "https://ext.same-assets.com/1938912415/719238225.jpeg",
      "https://ext.same-assets.com/1938912415/3820712329.jpeg",
    ],
    title: "Rumah di Alberta Arts District",
    price: "Rp5.250.000 untuk 2 malam",
    rating: 4.92,
    isGuestFavorite: true,
  },
];

const seattleProperties = [
  {
    id: "7",
    images: [
      "https://ext.same-assets.com/1938912415/1159747883.jpeg",
      "https://ext.same-assets.com/1938912415/2800860553.jpeg",
    ],
    title: "Townhouse di Roosevelt",
    price: "Rp8.507.847 untuk 2 malam",
    rating: 4.95,
    isGuestFavorite: true,
  },
  {
    id: "8",
    images: [
      "https://ext.same-assets.com/1938912415/2559873913.jpeg",
      "https://ext.same-assets.com/1938912415/3867612725.jpeg",
    ],
    title: "Townhouse di Queen Anne",
    price: "Rp8.041.901 untuk 2 malam",
    rating: 4.98,
    isGuestFavorite: true,
  },
  {
    id: "9",
    images: [
      "https://ext.same-assets.com/1938912415/3973792884.jpeg",
      "https://ext.same-assets.com/1938912415/186198876.jpeg",
    ],
    title: "Kondominium di Wallingford",
    price: "Rp6.711.285 untuk 2 malam",
    rating: 4.95,
    isGuestFavorite: true,
  },
  {
    id: "10",
    images: [
      "https://ext.same-assets.com/1938912415/3532159397.jpeg",
      "https://ext.same-assets.com/1938912415/3150818949.jpeg",
    ],
    title: "Suite tamu di Seattle",
    price: "Rp3.692.110 untuk 2 malam",
    rating: 4.79,
    isGuestFavorite: true,
  },
  {
    id: "11",
    images: [
      "https://ext.same-assets.com/1938912415/1045135490.jpeg",
      "https://ext.same-assets.com/1938912415/2206084683.jpeg",
    ],
    title: "Townhouse di Seattle",
    price: "Rp8.973.795 untuk 2 malam",
    rating: 4.76,
    isGuestFavorite: true,
  },
  {
    id: "12",
    images: [
      "https://ext.same-assets.com/1938912415/503971525.jpeg",
      "https://ext.same-assets.com/1938912415/1427557322.jpeg",
    ],
    title: "Apartemen di Capitol Hill",
    price: "Rp4.125.000 untuk 2 malam",
    rating: 4.88,
    isGuestFavorite: false,
  },
];

const bendProperties = [
  {
    id: "13",
    images: [
      "https://ext.same-assets.com/1938912415/3199564461.jpeg",
      "https://ext.same-assets.com/1938912415/2047422734.jpeg",
    ],
    title: "Bungalo di River West",
    price: "Rp6.961.594 untuk 2 malam",
    rating: 4.86,
    isGuestFavorite: true,
  },
  {
    id: "14",
    images: [
      "https://ext.same-assets.com/1938912415/2640789033.jpeg",
      "https://ext.same-assets.com/1938912415/2300230212.jpeg",
    ],
    title: "Rumah di River West",
    price: "Rp8.730.655 untuk 2 malam",
    rating: 4.99,
    isGuestFavorite: true,
  },
  {
    id: "15",
    images: [
      "https://ext.same-assets.com/1938912415/3758822215.jpeg",
      "https://ext.same-assets.com/1938912415/2415549912.jpeg",
    ],
    title: "Rumah di Larkspur",
    price: "Rp2.407.023 untuk 2 malam",
    rating: 4.90,
    isGuestFavorite: true,
  },
  {
    id: "16",
    images: [
      "https://ext.same-assets.com/1938912415/2403617910.jpeg",
      "https://ext.same-assets.com/1938912415/3215184182.jpeg",
    ],
    title: "Townhouse di River West",
    price: "Rp9.456.999 untuk 2 malam",
    rating: 4.95,
    isGuestFavorite: true,
  },
  {
    id: "17",
    images: [
      "https://ext.same-assets.com/1938912415/1520106891.jpeg",
      "https://ext.same-assets.com/1938912415/964534935.jpeg",
    ],
    title: "Chalet di Bend",
    price: "Rp9.077.339 untuk 2 malam",
    rating: 4.94,
    isGuestFavorite: true,
  },
  {
    id: "18",
    images: [
      "https://ext.same-assets.com/1938912415/2799092939.jpeg",
      "https://ext.same-assets.com/1938912415/438997153.jpeg",
    ],
    title: "Kabin di Deschutes River Woods",
    price: "Rp7.500.000 untuk 2 malam",
    rating: 4.91,
    isGuestFavorite: true,
  },
];

const lincolnCityProperties = [
  {
    id: "19",
    images: [
      "https://ext.same-assets.com/1938912415/3202580813.jpeg",
      "https://ext.same-assets.com/1938912415/3531019893.jpeg",
    ],
    title: "Apartemen di Lincoln City",
    price: "Rp7.144.521 untuk 2 malam",
    rating: 5.0,
    isGuestFavorite: true,
  },
  {
    id: "20",
    images: [
      "https://ext.same-assets.com/1938912415/4084436051.jpeg",
      "https://ext.same-assets.com/1938912415/319203769.jpeg",
    ],
    title: "Apartemen di Lincoln City",
    price: "Rp9.888.431 untuk 2 malam",
    rating: 4.87,
    isGuestFavorite: true,
  },
  {
    id: "21",
    images: [
      "https://ext.same-assets.com/1938912415/1254846360.jpeg",
      "https://ext.same-assets.com/1938912415/1334973548.jpeg",
    ],
    title: "Rumah di Lincoln Beach",
    price: "Rp9.954.583 untuk 2 malam",
    rating: 4.97,
    isGuestFavorite: true,
  },
  {
    id: "22",
    images: [
      "https://ext.same-assets.com/1938912415/2548598829.jpeg",
      "https://ext.same-assets.com/1938912415/2844049875.jpeg",
    ],
    title: "Pondok di Lincoln City",
    price: "Rp8.873.484 untuk 2 malam",
    rating: 4.96,
    isGuestFavorite: true,
  },
  {
    id: "23",
    images: [
      "https://ext.same-assets.com/1938912415/2953885471.jpeg",
      "https://ext.same-assets.com/1938912415/2799092939.jpeg",
    ],
    title: "Rumah di Lincoln City",
    price: "Rp16.229.454 untuk 2 malam",
    rating: 5.0,
    isGuestFavorite: false,
  },
  {
    id: "24",
    images: [
      "https://ext.same-assets.com/1938912415/438997153.jpeg",
      "https://ext.same-assets.com/1938912415/3202580813.jpeg",
    ],
    title: "Cottage di Oceanfront",
    price: "Rp12.500.000 untuk 2 malam",
    rating: 4.93,
    isGuestFavorite: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SearchBar />

      <main className="flex-grow">
        <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 py-6">
          <PropertyCarousel
            title="Penginapan populer di Portland"
            properties={portlandProperties}
          />

          <PropertyCarousel
            title="Tersedia di Seattle akhir pekan ini"
            properties={seattleProperties}
          />

          <PropertyCarousel
            title="Penginapan di Bend"
            properties={bendProperties}
          />

          <PropertyCarousel
            title="Tersedia di Lincoln City akhir pekan ini"
            properties={lincolnCityProperties}
          />

          <InspirationSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
