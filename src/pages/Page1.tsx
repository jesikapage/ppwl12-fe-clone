import SectionTuanRumah from '../components/SectionTuanRumah';
import SectionRekomendasi from '../components/SectionRekomendasi';
import Footer from '../components/footer'; // Sesuaikan folder & huruf besar/kecilnya

export default function Page1() {
    return (
        <div className="min-h-screen bg-white">
            {/* Bungkus dalam container agar rapi ke tengah */}
            <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
                
                {/* 1. Section Tuan Rumah (Tugas Kamu) */}
                <SectionTuanRumah />

                {/* 2. Section Rekomendasi (Tugas Kamu) */}
                <SectionRekomendasi />

                {/* 3. Section Footer (Tugas Temanmu) */}
                <Footer />
                
            </main>
        </div>
    );
}