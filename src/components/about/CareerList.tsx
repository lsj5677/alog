import { CareerProps } from "@/service/about/careers";

type Props = { career: CareerProps };

export default function CareerList({
  career: { role, period, company, location, desc, techUsed },
}: Props) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold">{role}</h4>
        <span className="text-sm">{period}</span>
      </div>
      <div className="text-sm italic opacity-50">
        <span>{company}</span>
        <span className="mx-2 inline-block">|</span>
        <span>{location}</span>
      </div>
      <ul className="mt-3">
        {desc.map((item: any, id) => (
          <li key={id} className="my-1">
            - {item}
          </li>
        ))}

        <li className="mt-3">
          <span className="block text-sm font-bold">Technology used: </span>
          {techUsed.map((item: any, id) => (
            <span
              key={id}
              className="mr-1.5 inline-block rounded-sm bg-lightGray px-1.5 text-xs dark:text-black"
            >
              {item}
            </span>
          ))}
        </li>
      </ul>
    </>
  );
}
