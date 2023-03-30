import Image from "next/image";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <main>
      <section className="bg-white grid grid-cols-1 md:grid-cols-7 md:grid-rows-[10fr_1fr]">
        <div className="md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-3">
          <Image
            src="/desktop-image-hero-1.jpg"
            alt="hero-img"
            width={1600}
            height={1600}
            className="object-cover w-full h-full object-center"
          />
        </div>
        <article className="md:col-start-5 md:col-end-8 md:px-36 md:pb-24 md:pt-24">
          <h1 className="mb-8 text-4xl font-bold">
            Discover innovative ways to decorate
          </h1>
          <p className="mb-8 text-sm text-darkGray">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <button className="flex items-center gap-3 hover:text-darkGray">
            shop now
            <BsArrowRight />
          </button>
        </article>
        <div className="flex bg-black text-white md:col-start-5 md:col-end-6 md:row-start-2 md:row-end-3">
          <div className="flex h-full w-full cursor-pointer items-center justify-center hover:bg-veryDarkGray">
            <BsChevronLeft className="" />
          </div>
          <div className="flex h-full w-full cursor-pointer items-center justify-center hover:bg-veryDarkGray">
            <BsChevronRight />
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
            className="object-cover w-full h-full object-center"
          />
        </div>
        <article className="bg-white px-10 py-14 md:col-start-3 md:col-end-6">
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
            className="object-cover w-full h-full object-center"
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
