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
          <Button className="top-4 left-4 absolute bg-black">
            <Image
              className="bg-transparent"
              src="/images/menu_bar.svg"
              alt="Menu"
              width={40}
              height={40}
            />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] flex flex-col pt-16">
          {nav.map((item, index) => {
            return (
              <Link href={item.href} key={index} className="bg-white">
                <Button variant="ghost" className="text-xl">
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
