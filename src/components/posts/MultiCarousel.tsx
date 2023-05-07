"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

type Props = {
  children: React.ReactNode;
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel
      infinite
      autoPlay
      centerMode
      // pauseOnHover
      // autoPlaySpeed={5}
      responsive={responsive}
      itemClass="mx-2 mt-3 mb-5"
    >
      {children}
    </Carousel>
  );
}
