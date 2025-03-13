import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="p-4">
      <SignedIn>
        <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <p>You are not signed in. Please log in.</p>
      </SignedOut>
    </div>
  );
}
