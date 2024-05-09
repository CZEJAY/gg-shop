import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./NavBarActions";
import Image from "next/image";
import SearchBar from "./searchBar";
import StarGrid from "./StarGrid";
import { ShoppingCart } from "lucide-react";

const NavBar = async () => {
  const categories = await getCategories();
  return (
    <header className="sticky top-0 w-full z-50 bg-white">
      <nav className="sticky top-0 border-b  py-4 w-full bg-gradient-to-b from-transparent via-transparent to-gray-100">
        <div className="relative">
          <StarGrid />
        </div>
        <div className="relative w-full px-4 py-4 flex items-center justify-between h-20 gap-4">
          <div className="shrink-0">
            <Link
              href={"/"}
              className="font-bold rounded-full w-16 md:w-20 text-xl ml-4 flex lg:ml-0 gap-x-2"
            >
              <Image
                src="/gg-logo.jpg"
                alt="logo"
                width={150}
                height={50}
                className="object-contain rounded-full shrink-0"
              />
            </Link>
          </div>
          <SearchBar />
          <div className="">
            <Link
              href={"/cart"}
              className="border-[3px] rounded-lg p-1 px-3 h-12 flex items-center justify-center"
            >
              <ShoppingCart size={22} />
            </Link>
          </div>
        </div>
      </nav>
      <MainNav data={categories} />
    </header>
  );
};

export default NavBar;
