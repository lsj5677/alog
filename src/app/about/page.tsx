import Careers from "@/components/about/Careers";
import Hero from "@/components/about/Hero";
import { getCareers } from "@/service/about/careers";

export default async function AboutPage() {
  const careers = await getCareers();

  return (
    <>
      <div className="h-[20rem] bg-gradient-to-r from-default to-point"></div>
      <div className="container">
        <Hero />
        <div>
          {careers.map(
            ({ id, role, company, period, location, desc, techUsed }) => (
              <Careers
                id={id}
                role={role}
                company={company}
                period={period}
                location={location}
                desc={desc}
                techUsed={techUsed}
                key={id}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
