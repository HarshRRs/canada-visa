"use server";

import db from "@/lib/db";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

export async function sendTicket(formData: FormData) {
  const clientId = formData.get("clientId") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const senderRole = formData.get("senderRole") as string;

  if (!clientId || !subject || !message || !senderRole) {
    return { error: "Missing required fields" };
  }

  const stmt = db.prepare(`
    INSERT INTO tickets (id, client_id, subject, message, sender_role)
    VALUES (?, ?, ?, ?, ?)
  `);

  stmt.run(randomUUID(), clientId, subject, message, senderRole);

  if (senderRole === "admin") {
    revalidatePath("/admin/support");
  } else {
    revalidatePath("/dashboard/support");
  }

  return { success: true };
}
