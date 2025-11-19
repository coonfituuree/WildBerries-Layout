"use client";

import { Star, ShoppingCart, Heart, Share2, TrendingUp } from "lucide-react";
import { Product } from "@/types/product";

interface Props {
  className?: string;
  product: Product;
}

export default function ProductProfile({ className, product }: Props) {
  return (
    <main
      className={`bg-linear-to-br from-[#0f0a1a] via-[#1b1628] to-[#1a0f2e] min-h-screen text-white ${
        className || ""
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Decorative gradient orbs */}
        <div className="fixed top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-12 items-start relative">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-linear-to-br from-[#2a1f3d] to-[#1f1630] rounded-3xl p-8 backdrop-blur-xl border border-white/10">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating badges */}
                <div className="absolute top-4 left-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-md">
                  <TrendingUp size={16} /> Популярный выбор
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <Heart size={20} />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Title & Rating */}
            <div>
              <h1 className="text-5xl font-bold bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight mb-4">
                {product.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  <span className="text-xl font-bold text-yellow-400">
                    {product.rating}
                  </span>
                  <span className="text-white/60 text-sm">/5.0</span>
                </div>
                <span className="text-white/60">2,847 отзывов</span>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-linear-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {product.price}₸
                </span>
              </div>
              <p className="text-emerald-400 text-sm font-medium">
                ✓ Бесплатная доставка при заказе от 50,000₸
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-3 text-purple-200">
                Описание продукта
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Гарантия 2 года",
                "Оригинальный товар",
                "Быстрая доставка",
                "Возврат 30 дней",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <p className="text-sm font-medium text-white/90">{feature}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <ShoppingCart size={22} /> Добавить в корзину
              </button>
              <button className="sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white py-4 px-8 rounded-xl text-lg font-semibold border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]">
                Купить сейчас
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />{" "}
                В наличии
              </div>
              <div className="text-white/60 text-sm">🚚 Доставка 1-3 дня</div>
              <div className="text-white/60 text-sm">🔒 Безопасная оплата</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
