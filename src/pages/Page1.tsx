import InspirationSection from '../components/InspirationSection';
import PropertyCard from '../components/PropertyCard';
import PropertyCarousel from '../components/PropertyCarousel';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/footer'; 

export default function Page1() {
    // 1. Data Dummy yang sudah disesuaikan dengan tipe 'Property'
    const dummyProperties = [
        {
            id: "1",
            title: "Villa Pemandangan Gunung",
            location: "Lembang, Bandung",
            images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"],
            price: "Rp 1.500.000",
            rating: 4.9
        },
        {
            id: "2",
            title: "Apartemen Tengah Kota",
            location: "Jakarta Selatan",
            images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
            price: "Rp 850.000",
            rating: 4.8
        },
        {
            id: "3",
            title: "Rumah Kayu Estetik",
            location: "Ubud, Bali",
            images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800"],
            price: "Rp 2.100.000",
            rating: 4.95
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SearchBar />

            <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
                
                {/* 2. Panggil Carousel dengan data lengkap */}
                <PropertyCarousel 
                    title="Inspirasi untuk perjalanan Anda berikutnya" 
                    properties={dummyProperties as any} 
                />

                {/* 3. Grid Kartu Properti */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {dummyProperties.map((property) => (
                        <PropertyCard key={property.id} {...(property as any)} />
                    ))}
                </div>

                <InspirationSection />
            </main>
        </div>
    );
}