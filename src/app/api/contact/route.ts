import { sendEmail } from "@/service/contact/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: "Your email was not sent" }),
      { status: 400 }
    );
  }

  return sendEmail(body) //
    .then(() => {
      return new Response(
        JSON.stringify({ message: "Your email has been successfully sent" }),
        { status: 200 }
      );
    })
    .catch((error) => {
      console.error(`error : ${error}`);
      return new Response(
        JSON.stringify({ message: "Your email was not sent" }),
        { status: 500 }
      );
    });
}
