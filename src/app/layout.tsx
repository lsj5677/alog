import "./globals.css";
import { Roboto } from "next/font/google";
import { Open_Sans } from "next/font/google";
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

const sans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "A_LOG",
  description: "This is Agnes Blog and you can see her daily life.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={sans.className}>
      <body className="tracking-tight">
        <Header />
        <main className="mx-auto mt-20 w-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
