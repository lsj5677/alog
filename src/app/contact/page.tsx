import ContactForm from "@/components/contact/ContactForm";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdPersonalVideo } from "react-icons/md";

const LINKS = [
  {
    icon: <AiFillGithub />, //
    url: "https://github.com/lsj5677", //
  },
  {
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/agnes-lee-041971189/",
  },
  {
    icon: <MdPersonalVideo />, //
    url: "http://agnespf.netlify.app/", //
  },
];

export default function ContactPage() {
  return (
    <section className="container flex min-h-[80vh] flex-col items-center gap-4 md:flex-row md:justify-between">
      <div>
        <div>
          <h2 className="my-4 text-4xl font-bold uppercase">Hello,</h2>
          <p>If you want to see my details, click the icon below {`:)`}</p>
        </div>
        <ul className="my-4 flex gap-10">
          {LINKS.map((link, index) => (
            <li>
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-point"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <h2 className="mb-4 mt-5 border-t border-lightGray pt-5 text-2xl font-bold uppercase">
            Send me an email
          </h2>
          <p>
            If you have any questions, please do not hesitate to contact me
            anytime {`:)`}
          </p>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
