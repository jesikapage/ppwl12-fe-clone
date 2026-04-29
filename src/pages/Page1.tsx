import { AirbnbImages } from '../components/SectionImages';
import { AirbnbRoomDetail } from '../components/SectionDetailRoom';

export default function Page1() {
    return (
        // Menghapus 'h-screen flex justify-center items-center' 
        // Menggantinya dengan padding bawah (pb-20) agar saat di-scroll mentok bawah tidak terlalu mepet
        <div className="pb-20">
            
            {/* Memanggil komponen Images */}
            <AirbnbImages />
            
            {/* Garis pemisah tipis pemanis (opsional) */}
            <div className="max-w-6xl mx-auto px-6">
                <hr className="border-gray-200 my-4" />
            </div>

            {/* Memanggil komponen Detail Room */}
            <AirbnbRoomDetail />
            
        </div>
    )
}