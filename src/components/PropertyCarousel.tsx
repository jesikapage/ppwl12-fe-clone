"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  images: string[];
  title: string;
  price: string;
  rating: number;
  isGuestFavorite?: boolean;
}

interface PropertyCarouselProps {
  title: string;
  properties: Property[];
  showArrow?: boolean;
}

export default function PropertyCarousel({
  title,
  properties,
  showArrow = true,
}: PropertyCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <a href="#" className="group flex items-center gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-[#222222]">{title}</h2>
          {showArrow && (
            <ArrowRight className="w-5 h-5 text-[#222222] group-hover:translate-x-1 transition-transform" />
          )}
        </a>

        {/* Navigation Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
              canScrollLeft
                ? "hover:border-gray-900 cursor-pointer"
                : "opacity-40 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-4 h-4 text-[#222222]" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
              canScrollRight
                ? "hover:border-gray-900 cursor-pointer"
                : "opacity-40 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-4 h-4 text-[#222222]" />
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2"
      >
        {properties.map((property) => (
          <div key={property.id} className="flex-shrink-0 w-[280px]">
            <PropertyCard
              images={property.images}
              title={property.title}
              price={property.price}
              rating={property.rating}
              isGuestFavorite={property.isGuestFavorite}
            />
          </div>
        ))}
      </div>

      {/* Items count indicator */}
      <p className="text-sm text-[#717171] mt-2">
        Menampilkan {Math.min(5, properties.length)} dari {properties.length} item
      </p>
    </section>
  );
}
