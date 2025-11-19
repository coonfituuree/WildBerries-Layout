import { Main } from "@/components/Main";

const Home = () => {
  return (
    <div className="bg-[#1b1628]">
      <Main
        products={[
          {
            id: 1,
            title: "Носки Adidas",
            price: 39990,
            image: "/adidas_socks.avif",
            url: "/product/1",
          },
          {
            id: 2,
            title: "Носки Nike",
            price: 39990,
            image: "/nike_socks.webp",
          },
          {
            id: 3,
            title: "Носки Adidas",
            price: 39990,
            image: "/adidas_socks.avif",
            url: "/product/1"
          },
          {
            id: 4,
            title: "Носки Nike",
            price: 39990,
            image: "/nike_socks.webp",
          },
          {
            id: 5,
            title: "Носки Adidas",
            price: 39990,
            image: "/adidas_socks.avif",
            url: "/product/1"
          },
          {
            id: 6,
            title: "Носки Nike",
            price: 39990,
            image: "/nike_socks.webp",
          },
          
        ]}
      />
    </div>
  );
};

export default Home;
