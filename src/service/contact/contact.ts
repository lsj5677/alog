import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "something wrong 🚫");
  }

  return data;
}
