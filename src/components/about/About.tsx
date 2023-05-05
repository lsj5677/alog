import Careers from "@/components/about/Careers";
import { getCareers } from "@/service/about/careers";
import Summary from "./Summary";

export default async function About() {
  const careers = await getCareers();
  return (
    <>
      <div className="-mt-40 ">
        <Summary />
      </div>
      <div>
        <Careers careers={careers} />
      </div>
    </>
  );
}
