import "./globals.css";
import { Roboto } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const gothic = Nanum_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "A_LOG",
  description: "This is Agnes Blog and you can see her daily life.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="mt-20 flex w-screen justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
