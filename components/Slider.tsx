"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const data = [
    {
      review:
        '"Aakash is an absolutely disciplined and motivated individual. While his internship at Lenskart, he undertook the entire ownership of shifting the frontend of our contact lens vertical from Shopify to React, while learning and figuring out most of the things on his own. He set the foundation on top of which the whole new frontent of contact lens website would be built. He was also always good at communicating any roadblocks and was always eager to help others."',
      name: "DS Aman",
      position: "Head of Product & Technology for Aqualens",
      image: "/images/dsAman.jpeg",
      link: "https://www.linkedin.com/in/dsamanmishra/",
    },
    {
      review:
        '"I highly recommend Aakash Raj for his exceptional work as a front-end developer intern at Aqualens. He successfully transitioned our website from Shopify to Next.js, showcasing remarkable technical skills and dedication. Aakash strong teamwork and communication ensured seamless collaboration with our design and back-end teams. He possesses the technical expertise, problem-solving abilities, and work ethic that are invaluable to any development team."',
      name: "Aniruddha Jaiswal",
      position: "Software Engineer at Lenskart",
      image: "/images/anirudha.jpeg",
      link: "https://www.linkedin.com/in/aniruddha-jaiswal/",
    },
    {
      review:
        '"I had the pleasure of working with Aakash on a project where he led Redux implementation and API integration for our Electron app. His expertise ensured smooth data management and communication with external services. Aakash consistently met project deadlines with precision, contributing significantly to its success. I highly recommend him for roles requiring React, Redux, and REST API expertise. His commitment to timely delivery and technical excellence make him an invaluable asset to any team."',
      name: "Siddharth Gupta",
      position: "Fullstack Developer at YourToken",
      image: "/images/sid.jpeg",
      link: "https://www.linkedin.com/in/cyddharth/",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-[700px] w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((test, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="testimonial-card">
                  <div className="w-full h-full bg-black px-3 py-6 md:p-6 flex flex-col gap-y-12">
                    <p className="text-xl">{test.review}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-x-4">
                        <Image
                          className="rounded-full"
                          src={test.image}
                          alt="client's image"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col">
                          <h5 className="font-medium text-lg">{test.name}</h5>
                          <p className="text-sm md:text-base">
                            {test.position}
                          </p>
                        </div>
                      </div>
                      <Link href={test.link} target="_blank">
                        <Image
                          className="bg-white"
                          src="/images/linkedin.svg"
                          alt="linkedin"
                          width={40}
                          height={40}
                        />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
