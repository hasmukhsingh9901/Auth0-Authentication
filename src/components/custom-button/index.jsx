"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { useRouter } from "next/navigation";

const CombinedAuthButton = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const handleAuthAction = () => {
    if (isLoading) return;

    if (user) {
      router.push("/api/auth/logout");
    } else {
      router.push("/api/auth/login");
    }
  };

  return (
    <button
      onClick={handleAuthAction}
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      {isLoading ? "Loading..." : user ? "Logout" : "Login/Signup"}
    </button>
  );
};

export default CombinedAuthButton;
