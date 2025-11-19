import { products } from "@/data/products";
import ProductProfile from "@/components/ProductProfile";

export default async function ProductPage({ params }: any) {
  const { id } = await params;

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-white p-10">Товар не найден</div>;
  }

  return <ProductProfile product={product} />;
}