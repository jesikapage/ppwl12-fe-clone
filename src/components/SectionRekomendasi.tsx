import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const listings = [
  { id: 1, title: "Vila 55 di Kuching", price: "Rp19.618.347", rating: "4.9", img: "https://a0.muscache.com/im/pictures/miso/Hosting-48130393/original/676f2597-9e4a-4361-b5cb-1941434c9c74.jpeg" },
  { id: 2, title: "3BR Podium 7pax Menawan", price: "Rp4.519.255", rating: "4.94", img: "https://a0.muscache.com/im/pictures/miso/Hosting-53346513/original/c4149021-0e6d-40e1-8859-e93297a7a584.jpeg" },
  { id: 3, title: "Armadale 3R 4 Tempat Tidur", price: "Rp5.623.457", rating: "4.9", img: "https://a0.muscache.com/im/pictures/miso/Hosting-646731053164993188/original/f659d18c-3004-4c4c-8f43-851f50a86b11.jpeg" },
  { id: 4, title: "3008 The Echelon Apartment", price: "Rp3.019.403", rating: "5.0", img: "https://a0.muscache.com/im/pictures/miso/Hosting-51205317/original/354d2e7d-f442-4981-b54b-d7798380e9f0.jpeg" }
];

const SectionRekomendasi: React.FC = () => {
  return (
    <section className="py-12 border-t border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Penginapan lainnya di sekitar</h2>
        <div className="flex gap-2">
            <span className="text-sm mr-2">1 / 2</span>
            <button className="p-2 border border-gray-300 rounded-full hover:shadow-md"><ChevronLeft size={16}/></button>
            <button className="p-2 border border-gray-300 rounded-full hover:shadow-md"><ChevronRight size={16}/></button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-xl mb-3">
              <img src={item.img} alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-[15px] leading-5">{item.title}</h3>
              <div className="flex items-center gap-1 text-sm">
                <Star size={12} className="fill-current" /> <span>{item.rating}</span>
              </div>
            </div>
            <p className="text-gray-900 mt-1 font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionRekomendasi;