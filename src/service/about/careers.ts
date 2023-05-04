import path from "path";
import { promises as fs } from "fs";

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
  const filePath = path.join(process.cwd(), "data/about", "careers.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}
