"use server";

import { mailOptions, transporter } from "@/app/config/email";
import { htmlData } from "@/app/templates/notification";

type Data = {
  fullName: string;
  email?: string;
  phoneNumber?: string;
  userType?: string;
  contentType?: string;
  branch?: string;
  content: string;
};

export const sendNotification = async (data: Data) => {
  const html = htmlData
    .replace("{{ fullName }}", data.fullName || "")
    .replace("{{ email }}", data.email || "")
    .replace("{{ phoneNumber }}", data.phoneNumber || "")
    .replace("{{ branch }}", data.branch || "")
    .replace("{{ userType }}", data.userType || "")
    .replace("{{ contentType }}", data.contentType || "")
    .replace("{{ content }}", data.content || "");

  await transporter.sendMail({
    ...mailOptions,
    subject: "بوابة المقترحات و الملاحظات",
    text: "رسالة جديدة",
    html,
  });
};
