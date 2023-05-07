import path from "path";
import { readFile } from "fs/promises";

export type CareerProps = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  desc: Array<CareerProps>;
  techUsed: Array<CareerProps>;
};

export async function getCareers(): Promise<CareerProps[]> {
  const filePath = path.join(process.cwd(), "data", "about", "careers.json");
  return readFile(filePath, "utf-8") //
    .then<CareerProps[]>(JSON.parse);
}
