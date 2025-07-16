"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { Roles } from "../../../types/globals";
import { revalidatePath } from "next/cache";

export const setRole = async (formData: FormData) => {
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Not Authorized");
  }

  const { users } = await clerkClient();

  const id = formData.get("id") as string;
  const role = formData.get("role") as Roles;

  try {
    await users.updateUser(id, { publicMetadata: { role } });
    revalidatePath("/admin");
  } catch {
    throw new Error("Failed to set role");
  }
};

export const removeRole = async (id: string) => {
  if ((await auth()).sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Not Authorized");
  }

  try {
    await (
      await clerkClient()
    ).users.updateUser(id, { publicMetadata: { role: null } });
    revalidatePath("/admin");
  } catch {
    throw new Error("Failed to remove role");
  }
};
