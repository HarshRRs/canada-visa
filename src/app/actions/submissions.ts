"use server";

import db from "@/lib/db";
import { randomUUID } from "crypto";

export async function submitEligibility(formData: any) {
  const id = randomUUID();
  
  const stmt = db.prepare(`
    INSERT INTO submissions (
      id, name, email, phone, country, age, education, experience, english, occupation, category
    ) VALUES (
      @id, @name, @email, @phone, @country, @age, @education, @experience, @english, @occupation, @category
    )
  `);

  stmt.run({
    id,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    country: formData.country,
    age: formData.age,
    education: formData.education,
    experience: formData.experience,
    english: formData.english,
    occupation: formData.occupation,
    category: formData.category,
  });

  return { success: true, id };
}

export async function submitDocuments(filesData: any[], submissionId?: string) {
  // In a real app we'd save files to S3/GCS. Here we'll just mock saving metadata to DB
  for (const file of filesData) {
    const id = randomUUID();
    const stmt = db.prepare(`
      INSERT INTO documents (id, file_name, file_url, submission_id)
      VALUES (?, ?, ?, ?)
    `);
    // mock url
    stmt.run(id, file.name, `/uploads/${file.name}`, submissionId || null);
  }
  return { success: true };
}
