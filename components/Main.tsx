"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart, Star, TrendingUp, Zap } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface Props {
  className?: string;
  products: Product[];
}

export const Main: React.FC<Props> = ({ className, products }) => {
  const displayProducts = products?.length
    ? products
    : [
        {
          id: 1,
          title: "Носки Adidas",
          price: 89990,
          image: "/adidas_socks.avif",
        },
        {
          id: 2,
          title: "Носки Nike",
          price: 129990,
          image: "/nike_socks.webp",
        },
      ];

  return (
    <main
      className={`min-h-screen bg-linear-to-br from-[#0f0a1a] via-[#1b1628] to-[#1a0f2e] py-16 ${
        className || ""
      }`}>
      {/* Decorative background elements */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">
              Товары
            </h1>
            <p className="text-white/60 text-lg">
              Откройте для себя премиальную коллекцию
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-3 rounded-full border border-white/10">
            <Zap className="text-yellow-400" size={20} />
            <span className="text-white/80 text-sm font-medium">
              {displayProducts.length} товаров
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {displayProducts.map((product, index) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div
                className="group relative cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}>
                {/* Card glow effect */}
                <div className="absolute -inset-px bg-linear-to-br from-purple-500/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                <div className="relative bg-linear-to-br from-[#2c2440] to-[#241d35] rounded-2xl p-4 flex flex-col gap-3 border border-white/10 hover:border-white/20 transition-all duration-300 h-full overflow-hidden">
                  {/* Trending badge */}
                  {index % 3 === 0 && (
                    <div className="absolute top-2 right-2 z-10 bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <TrendingUp size={12} />
                      ХИТ
                    </div>
                  )}

                  {/* Image */}
                  <div className="w-full h-[220px] relative rounded-xl overflow-hidden bg-linear-to-br from-purple-900/20 to-blue-900/20">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <Star
                      className="fill-yellow-400 text-yellow-400"
                      size={14}
                    />
                    <span className="text-yellow-400 text-sm font-semibold">
                      4.{Math.floor(Math.random() * 3 + 6)}
                    </span>
                    <span className="text-white/40 text-xs">
                      ({Math.floor(Math.random() * 500 + 100)})
                    </span>
                  </div>

                  {/* Title */}
                  <div className="text-base text-zinc-100 font-medium line-clamp-2 leading-snug group-hover:text-white transition-colors">
                    {product.title}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      {product.price.toLocaleString("ru-KZ")}₸
                    </span>
                  </div>

                  {/* Add to cart button */}
                  <button className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2.5 rounded-xl text-sm font-semibold mt-auto flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-[1.02]">
                    <ShoppingCart size={16} />В корзину
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more button */}
        <div className="mt-16 text-center">
          <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
            Загрузить ещё товары
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
};
