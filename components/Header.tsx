import { cn } from "@/lib/utils";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { MapPin, UserRound, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({ className, children }) => {
  return (
    <header className={cn("bg-[#231d30]", className)}>
      <Container className="flex items-center justify-between py-4 md:py-6 px-4 ">
        <Link href="/" className="flex items-center justify-center gap-4">
          <Image
            src="/wb_logo.jpg"
            alt="Logo"
            width={58}
            height={58}
            className="rounded-2xl"
          />
          <div className="text-xl text-zinc-200">WildBerries</div>
        </Link>

        <div>
          <input
            type="text"
            placeholder="Найти на Wildberries"
            className="bg-white outline-none rounded-xl w-[924px] h-[58px] px-6"
          />
        </div>

        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex flex-col items-center justify-center text-white">
            <MapPin className="text-white" />
            <span className="text-[#FFFFFF99]">Адреса</span>
          </div>

          <div className="flex flex-col items-center justify-center text-white">
            <UserRound />
            <span className="text-[#FFFFFF99]">Войти</span>
          </div>

          <div className="flex flex-col items-center justify-center text-white">
            <ShoppingCart />
            <span className="text-[#FFFFFF99]">Корзина</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
