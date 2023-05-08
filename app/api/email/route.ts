import { sendEnquiryEmail } from "@/utils/email";

export async function POST(request: Request) {
  const res = await request.json();
  await sendEnquiryEmail(res);
}
