import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Articles = () => {
  const data = [
    {
      link: "https://www.geeksforgeeks.org/remove-duplicate-elements-from-typescript-array/",
      heading: "Remove duplicate elements from TypeScript array",
    },
    {
      link: "https://www.geeksforgeeks.org/how-to-convert-an-array-of-objects-into-object-in-typescript/",
      heading: "How to convert an array of objects into object in TypeScript",
    },
    {
      link: "https://www.geeksforgeeks.org/print-odd-numbers-in-a-javascript-array/",
      heading: "Print odd numbers in a JavaScript Array",
    },
  ];

  return (
    <div
      className="flex lg:px-24 md:px-4 py-16 flex-wrap md:flex-nowrap px-2 flex-col gap-y-6"
      id="articles"
    >
      <h2 className="text-4xl md:text-5xl text-center lg:text-start text-white ">
        Articles
      </h2>
      <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center md:justify-start">
        {data.map((article, index) => (
          <div
            key={index}
            className="max-w-[400px] md:max-w-[300px] w-full bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-700 p-1 flex flex-col"
          >
            <div className="w-full h-full">
              <Image
                src="/images/gfg_articles.png"
                alt="gfg article"
                width={400}
                height={150}
              />
              <div className="p-3 flex flex-col gap-3">
                <Link href={article.link} target="_blank">
                  <Button className="bg-white hover:bg-gray-200 text-black">
                    Article
                  </Button>
                </Link>
                <p className="text-white">{article.heading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
