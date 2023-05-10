"use client";

import { FormEvent } from "react";
import { ChangeEvent, useState } from "react";
import StateBanner, { StateBannerData } from "./StateBanner";

type FormProps = {
  from: string;
  subject: string;
  message: string;
};
export default function ContactForm() {
  const [form, setForm] = useState<FormProps>({
    from: "",
    subject: "",
    message: "",
  });

  const [stateBanner, setStateBanner] = useState<StateBannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setStateBanner({
      message: "Your email has been successfully sent",
      state: "success",
    });
    setTimeout(() => {
      setStateBanner(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-xl">
      {stateBanner && <StateBanner stateBanner={stateBanner} />}
      <form
        onSubmit={onSubmit}
        className="my-4 flex flex-col gap-2 sm:p-4 sm:shadow-lg"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          placeholder="Enter your email"
          className="border border-lightGray p-2"
        />
        <label htmlFor="subject" className="mt-4 font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          placeholder="Enter subject"
          className="border border-lightGray p-2"
        />
        <label htmlFor="message" className="mt-4 font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className="resize-none border border-lightGray p-2"
          placeholder="Enter your message"
        />
        <button className="bg-point py-3 font-bold text-white">Submit</button>
      </form>
    </section>
  );
}
