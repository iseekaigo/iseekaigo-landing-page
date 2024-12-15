"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function CheckSession() {
  const { data: session, status } = useSession();

  useEffect(() => {}, [status]);

  return (
    <div>
      <h1 className="text-3xl text-red-600">
       Session: {session?.user?.name}
      </h1>
    </div>
  );
}
