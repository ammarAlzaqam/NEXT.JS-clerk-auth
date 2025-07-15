import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <section className="flex justify-center items-center py-8">
      <UserProfile />
    </section>
  );
}
