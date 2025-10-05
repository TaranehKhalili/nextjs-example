"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  website: z.string().optional().default(""),
  company: z.string().optional().default(""),
  address: z.string().optional().default(""),
});

export async function addUserAction(_prevState: unknown, formData: FormData) {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    website: formData.get("website"),
    company: formData.get("company"),
    address: formData.get("address"),
  });
  if (!parsed.success) {
    return { ok: false, message: "Invalid input." };
  }

  const d = parsed.data;
  await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 0,
      name: d.name,
      email: d.email,
      phone: d.phone,
      website: d.website,
      company: { name: d.company },
      address: { city: d.address },
    }),
  });

  revalidatePath("/");
  return { ok: true, message: "User added successfully." };
}
