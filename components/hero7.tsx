import { Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TextLoop } from "./ui/text-loop";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const Hero7 = ({ 
  heading = "Beauty of Bulukumba",
  description = "Explore the beauty of Bulukumba, a hidden gem in South Sulawesi, Indonesia. From stunning beaches to rich cultural heritage, discover why Bulukumba is a must-visit destination for travelers seeking adventure and tranquility.",
  button = {
    text: "Discover all components",
    url: "https://www.github.com/kahfi10",
  },
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: Hero7Props) => {
  return (
    <section className="py-50 flex w-full items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container flex flex-col items-center justify-center text-center">
      <h1 className="inline-flex flex-wrap justify-center whitespace-pre-wrap text-5xl font-extrabold leading-tight text-gray-700 text-shadow-2xs lg:text-6xl h-full mb-5">
        {heading.split(' ').slice(0, 2).join(' ')}{' '}
        <TextLoop
        className='overflow-y-clip'
        transition={{
          type: 'spring',
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
          y: 20,
          rotateX: 90,
          opacity: 0,
          filter: 'blur(4px)',
          },
          animate: {
          y: 0,
          rotateX: 0,
          opacity: 1,
          filter: 'blur(0px)',
          },
          exit: {
          y: -20,
          rotateX: -90,
          opacity: 0,
          filter: 'blur(4px)',
          },
        }}
        >
        <span>Boelekoemba</span>
        <span>Bulukumba</span>
        </TextLoop>
      </h1>
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <p className="text-gray-800 font-media text-lg lg:text-xl">
        {description}
        </p>
      </div>
      <Button asChild size="lg" className="mt-10 bg-gray-700 text-white">
        <a href={button.url}>{button.text}</a>
      </Button>
      <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
        <span className="mx-4 inline-flex items-center -space-x-4">
        {reviews.avatars.map((avatar, index) => (
          <Avatar key={index} className="size-14 border">
          <AvatarImage src={avatar.src} alt={avatar.alt} />
          </Avatar>
        ))}
        </span>
        <div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className="size-5 fill-yellow-400 text-yellow-400"
          />
          ))}
          <span className="mr-1 font-semibold">
          {reviews.rating?.toFixed(1)}
          </span>
        </div>
        <p className="text-muted-foreground text-left font-medium">
          from {reviews.count}+ reviews
        </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export { Hero7 };
