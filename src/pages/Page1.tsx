// pages/Page1.tsx
import InsipirasiLiburan from '@/components/inspirasiLiburan';
export default function Page1() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex justify-center items-center py-20">
                <h1>Konten Utama Page 1 (Main Page)</h1>
            </div>

            <InsipirasiLiburan/>
        </div>
    )
}