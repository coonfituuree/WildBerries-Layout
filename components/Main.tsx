import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "./Container";

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
  return (
    <main className={cn("py-10 min-h-screen", className)}>
      <Container>
        <div className="text-2xl font-semibold text-white mb-8 mt-2">Товары</div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#2c2440] rounded-2xl p-4 flex flex-col gap-3 hover:scale-[1.02] transition">
              <div className="w-full h-[220px] relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="text-base text-zinc-100 font-medium line-clamp-2">
                {product.title}
              </div>

              <div className="text-lg text-white font-semibold">
                {product.price}₸
              </div>

              <button className="bg-[#4b2bb8] hover:bg-[#5a36d6] text-white py-2 rounded-xl text-sm mt-auto">
                В корзину
              </button>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
};
