import { CareerProps } from "@/service/about/careers";
import CareerList from "./CareerList";

type Props = { careers: CareerProps[] };

export default function Careers({ careers }: Props) {
  return (
    <>
      {careers.map((career) => (
        <div className="mt-5 cursor-default border-t border-lightGray pt-5">
          <CareerList career={career} />
        </div>
      ))}
    </>
  );
}
