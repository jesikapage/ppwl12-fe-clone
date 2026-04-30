"use client";

import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  images: string[];
  title: string;
  price: string;
  rating: number;
  isGuestFavorite?: boolean;
}

export default function PropertyCard({
  images,
  title,
  price,
  rating,
  isGuestFavorite = false,
}: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link
      to="/room" 
      className="block group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        <div
          className="flex transition-transform duration-300 ease-out h-full"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${title} - Image ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {isGuestFavorite && (
          <div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-full shadow-sm">
            <span className="text-xs font-semibold text-[#222222]">Pilihan tamu</span>
          </div>
        )}

        {/* Heart Button */}
        <button
          onClick={toggleLike}
          className="absolute top-3 right-3 p-1.5 transition-transform hover:scale-110 z-10"
        >
          <Heart
            className={`w-6 h-6 transition-colors ${
              isLiked
                ? "fill-[#FF385C] text-[#FF385C]"
                : "fill-black/30 text-white stroke-[1.5]"
            }`}
          />
        </button>

        {/* Navigation Arrows */}
        {isHovered && images.length > 1 && (
          <div className="z-10">
            {currentImage > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-105 transition-transform"
              >
                <ChevronLeft className="w-4 h-4 text-[#222222]" />
              </button>
            )}
            {currentImage < images.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-105 transition-transform"
              >
                <ChevronRight className="w-4 h-4 text-[#222222]" />
              </button>
            )}
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentImage ? "bg-white w-2" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-[15px] text-[#222222] line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-3.5 h-3.5 fill-[#222222] text-[#222222]" />
            <span className="text-sm text-[#222222]">{rating.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-sm text-[#717171] mt-0.5">{price}</p>
      </div>
    </Link>
  );
}