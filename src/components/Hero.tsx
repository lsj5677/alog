import Image from "next/image";
import ProfileImage from "/public/images/profile-img.png";
import { Allura } from "next/font/google";

const allura = Allura({ weight: "400", subsets: ["latin"] });

const SNS_LAYOUT_STYLE = "flex gap-3 my-1";
const SNS_TITLE_STYLE = "sm:w-[20%] font-semibold";

export default function Hero() {
  return (
    <section className="container">
      <div className="flex flex-col items-center justify-center gap-10 pt-10 sm:flex-row">
        <Image
          src={ProfileImage}
          alt="Agnes profile image"
          width={300}
          height={300}
          className="w-full max-w-[300px]"
        />
        <div>
          <h2
            className={`text-center text-6xl opacity-30 sm:text-left ${allura.className}`}
          >
            Hello, I am Agnes.
          </h2>
          <ul className="mt-5 flex flex-col items-center gap-1 md:block">
            <li className={SNS_LAYOUT_STYLE}>
              <span className={SNS_TITLE_STYLE}>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/agnes-lee-041971189/"
                target="_blank"
                rel="noreferrer"
              >
                agnes-lee-041971189
              </a>
            </li>
            <li className={SNS_LAYOUT_STYLE}>
              <span className={SNS_TITLE_STYLE}>Github</span>
              <a
                href="https://github.com/lsj5677"
                target="_blank"
                rel="noreferrer"
              >
                github.com/lsj5677
              </a>
            </li>
            <li className={SNS_LAYOUT_STYLE}>
              <span className={SNS_TITLE_STYLE}>Portfolio</span>
              <a
                href="http://agnespf.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                agnespf.netlify.app
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
