import About from "@/components/about/About";

export default function AboutPage() {
  return (
    <>
      <div className="h-[20rem] bg-gradient-to-r from-default to-point"></div>
      <div className="container">
        {/* @ts-expect-error Async Server Component */}
        <About />
      </div>
    </>
  );
}
