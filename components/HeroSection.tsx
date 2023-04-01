"use client";

import Image from "next/image";
import { useState } from "react";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {};

interface Article {
  title: string;
  desc: string;
  imgUrl: string;
  id: number;
}

const heroArticles: Article[] = [
  {
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imgUrl: "/desktop-image-hero-1.jpg",
    id: 1,
  },
  {
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imgUrl: "/desktop-image-hero-2.jpg",
    id: 2,
  },
  {
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imgUrl: "/desktop-image-hero-3.jpg",
    id: 3,
  },
];

const HeroSection = (props: Props) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      return setIndex(heroArticles.length - 1);
    }
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (index === heroArticles.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  return (
    <main>
      <section className="grid grid-cols-4 grid-rows-[6fr_.75fr_10fr] bg-white md:grid-cols-7 md:grid-rows-[10fr_1fr]">
        <div className="col-start-1 col-end-5 row-start-1 row-end-3 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-3">
          <Image
            src={heroArticles[index].imgUrl}
            alt="hero-img"
            width={600}
            height={600}
            className="h-full w-full object-cover object-center"
            priority
          />
        </div>
        <article className="col-start-1 col-end-5 row-start-3 row-end-4 px-8 py-14 md:col-start-5 md:col-end-8 md:row-start-1 md:row-end-3 md:px-36 md:py-24">
          <h1 className="mb-8 text-4xl font-bold">
            {heroArticles[index].title}
          </h1>
          <p className="mb-8 text-sm text-darkGray">
            {heroArticles[index].desc}
          </p>
          <button className="flex items-center gap-3 hover:text-darkGray">
            shop now
            <BsArrowRight />
          </button>
        </article>
        <div className="col-start-4 col-end-5 row-start-2 row-end-3 flex bg-black text-white md:col-start-5 md:col-end-6 md:row-start-2 md:row-end-3">
          <div className="flex h-full w-full cursor-pointer items-center justify-center hover:bg-veryDarkGray">
            <BsChevronLeft onClick={handlePrev} />
          </div>
          <div className="flex h-full w-full cursor-pointer items-center justify-center hover:bg-veryDarkGray">
            <BsChevronRight onClick={handleNext} />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-7">
        <div className="md:col-start-1 md:col-end-3">
          <Image
            src="/image-about-dark.jpg"
            alt="img-about-dark"
            width={600}
            height={600}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <article className="bg-white px-8 py-14 md:col-start-3 md:col-end-6 md:px-24 md:py-20">
          <h2 className="mb-5 text-2xl font-bold uppercase tracking-widest">
            About our furniture
          </h2>
          <p className="text-sm text-darkGray">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>
        <div className="md:col-start-6 md:col-end-8">
          <Image
            src="/image-about-light.jpg"
            alt="img-about-dark"
            width={800}
            height={800}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
