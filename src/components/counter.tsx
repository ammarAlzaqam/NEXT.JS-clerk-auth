"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  // if (!isLoaded || !userId) return null;

  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}
