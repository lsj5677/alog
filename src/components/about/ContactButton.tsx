"use client";

import { useRouter } from "next/navigation";
import { BsChatDots } from "react-icons/bs";

export default function ContactButton() {
  const router = useRouter();

  return (
    <button
      className="ml-auto flex w-52 items-center justify-center gap-2 rounded-sm bg-default py-2 text-center text-white hover:bg-point hover:transition-all"
      onClick={() => {
        router.push("/contact");
      }}
    >
      Contact{" "}
      <BsChatDots className="animate-[upDown_1.5s_ease-in-out_infinite] text-white" />
    </button>
  );
}
