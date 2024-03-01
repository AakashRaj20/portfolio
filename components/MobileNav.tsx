import { Button } from "@/components/ui/button";
import { nav } from "@/utils/nav";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className="bg-transparent top-4 left-4 absolute"
            src="/images/menu_bar.svg"
            alt="Menu"
            width={40}
            height={40}
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] flex flex-col pt-16 bg-black border-none"
        >
          {nav.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className="bg-black text-white"
              >
                <Button variant="ghost" className="text-xl hover:bg-black hover:text-white">
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
