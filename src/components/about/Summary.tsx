import Image from "next/image";
import ProfileImage from "/public/images/about/profile.png";
import { BsChatDots } from "react-icons/bs";
import Link from "next/link";

export default function Summary() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-between gap-10 rounded-md bg-white p-10 shadow-[2px_5px_80px_0_rgba(0,0,0,0.3)] md:flex-row">
        <Image
          src={ProfileImage}
          alt="Agnes profile image"
          width={300}
          height={300}
          className="w-full max-w-[300px] bg-lightGray"
        />
        <div className="flex-auto text-lg">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold uppercase">Agnes Lee</h2>
            <span className="text-xs text-mediumGray">{`(She/Her)`}</span>
          </div>
          <div className="my-5">
            <p className="my-5">
              I have worked in the industries such as{" "}
              <strong>E-Commerce</strong> and <strong>marketing agency</strong>.
              I experienced in a range from designing to developing and building
              websites, releasing them to customers, also maintaining as well.
            </p>
            <p>
              I have worked on <strong>E-commerce</strong>, ranging from design
              to building front-end user interfaces and websites, data fetching
              as well. With my persistent efforts to take ownership of my work,
              show initative, and be a strong team player, I have always been
              rated as a high performer in my performance reviews.
            </p>
          </div>
          <Link
            href="/contact"
            className="ml-auto flex w-full items-center justify-center gap-2 rounded-sm bg-default py-2 text-center text-white hover:bg-point hover:transition-all md:w-52 "
          >
            Contact
            <BsChatDots className="animate-[upDown_1.5s_ease-in-out_infinite] text-white" />
          </Link>
        </div>
      </div>
    </>
  );
}
