import { clerkClient } from "@clerk/nextjs/server";
import { Roles } from "../../../types/globals";
import ActionButton from "@/components/button";
import { removeRole, setRole } from "./actions";

export default async function Admin() {
  const { users } = await clerkClient();
  const usersData = (await users.getUserList()).data;

  const getUserBg = (index: number) =>
    index % 2 === 0 ? "bg-neutral-800" : "bg-neutral-900";
  return (
    <>
      {usersData.map((u, i) => (
        <div
          key={u.id}
          className={`flex items-center justify-between py-6 px-8 ${getUserBg(
            i
          )}`}
        >
          {/*//! User Info */}
          <div className="flex gap-5">
            <p>
              {
                u.emailAddresses.find((e) => e.id === u.primaryEmailAddressId)
                  ?.emailAddress
              }
            </p>
            <p>{u.publicMetadata?.role as Roles}</p>
          </div>
          {/*//! User Actions */}
          <div className="flex items-center gap-2">
            <form action={setRole}>
              <input type="hidden" name="id" value={u.id} />
              <input type="hidden" name="role" value="admin" />
              <ActionButton type="submit">Make Admin</ActionButton>
            </form>

            <form action={setRole}>
              <input type="hidden" name="id" value={u.id} />
              <input type="hidden" name="role" value="moderator" />
              <ActionButton type="submit">Make Moderator</ActionButton>
            </form>

            <form action={removeRole.bind(null, u.id)}>
              {/* <input type="hidden" name="id" value={u.id} />
              <input type="hidden" name="role" value="admin" /> */}
              <ActionButton type="submit">Remove Role</ActionButton>
            </form>
          </div>
        </div>
      ))}
    </>
  );
}
