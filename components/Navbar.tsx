import { Button } from "./ui/button";
import { nav } from "@/utils/nav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-5 md:px-4 lg:px-24 bg-white hidden md:flex">
      {nav.map((item, index) => {
        return (
          <Link href={item.href} key={index} className="bg-white">
            <Button className="text-xl lg:text-2xl" variant="ghost">
              {item.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
