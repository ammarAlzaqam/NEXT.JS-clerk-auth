import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  //   UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Button from "./button";

export default function Navigation() {
  return (
    <section className="px-8 py-6 flex justify-between items-center border-b border-gray-300">
      <div className="font-semibold text-xl">
        <Link href="/">Clerk App</Link>
      </div>
      <nav className="flex gap-5">
        <Link href="/admin">Admin</Link>
      </nav>
      <div className="flex gap-2">
        <SignedIn>
          {/* <UserButton /> */}
          <Link href="/user-profile">Profile</Link>
          <SignOutButton>
            <Button>Sign out</Button>
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sing up</Button>
          </SignUpButton>
        </SignedOut>
      </div>
    </section>
  );
}
