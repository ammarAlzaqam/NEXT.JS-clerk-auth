import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
//   UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Navigation() {
  return (
    <section className="px-8 py-6 flex justify-between items-center border-b border-gray-300">
      <div className="font-semibold text-xl">
        <Link href="/">Clerk App</Link>
      </div>
      <div className="flex gap-4">
        <SignedIn>
          {/* <UserButton /> */}
          <Link href="/user-profile">Profile</Link>
          <SignOutButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </section>
  );
}
