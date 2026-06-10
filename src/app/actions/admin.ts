"use server";

import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

export async function createClient(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const ticketUrl = formData.get("ticketUrl") as string;

  if (!name || !email || !password) {
    return { error: "Name, email, and password are required." };
  }

  try {
    const id = randomUUID();
    const hash = await bcrypt.hash(password, 10);

    const insertUser = db.prepare('INSERT INTO users (id, email, password, role, name) VALUES (?, ?, ?, ?, ?)');
    insertUser.run(id, email, hash, 'client', name);

    if (ticketUrl) {
      const docId = randomUUID();
      const insertDoc = db.prepare('INSERT INTO documents (id, client_id, file_name, file_url, document_type) VALUES (?, ?, ?, ?, ?)');
      insertDoc.run(docId, id, 'Payment Ticket', ticketUrl, 'payment_ticket');
    }

    const insertProcess = db.prepare('INSERT INTO process_updates (id, client_id, update_text) VALUES (?, ?, ?)');
    insertProcess.run(randomUUID(), id, "Account created and payment received.");

    revalidatePath("/admin/clients");
    return { success: true };
  } catch (error: any) {
    if (error.message.includes("UNIQUE constraint failed")) {
      return { error: "Email already exists." };
    }
    return { error: "An error occurred." };
  }
}

export async function addProcessUpdate(formData: FormData) {
  const clientId = formData.get("clientId") as string;
  const updateText = formData.get("updateText") as string;

  if (!clientId || !updateText) {
    return { error: "Required fields missing." };
  }

  try {
    const insertProcess = db.prepare('INSERT INTO process_updates (id, client_id, update_text) VALUES (?, ?, ?)');
    insertProcess.run(randomUUID(), clientId, updateText);
    
    revalidatePath("/admin/clients");
    return { success: true };
  } catch (error) {
    return { error: "An error occurred." };
  }
}
