import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageSlider from '@/components/ImageSlider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';




function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 to bg-blue-500 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center">
      <div className="w-full h-[500px] mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Courses for You
        </h1>
        <p className=" text-2xl font-semibold text-gray-200 dark:text-gray-400 mb-5">
        Jump into learning for less
      </p>
      <form className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto ">
          <Input
            type="text"
            value="input"
            // onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Courses"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
          <Button type="submit" className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-4 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800">Search</Button>
        </form>
        <ImageSlider />
      </div>
    </div>
  );
}

export default Hero;
