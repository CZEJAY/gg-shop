"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

function Bottombar() {
  const pathname = usePathname();

  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname?.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
            const {icon: Icon} = link
          return (
            <Link
              href={link.route}
              key={link.label} 
              className={`bottombar_link ${isActive && "bg-transparent gradient"}`}
            >
                <Icon className={`text-black ${isActive && "text-white"}`} />
              <p className={`text-subtle-medium text-black ${isActive && "text-white"} max-sm:hidden`}>
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;