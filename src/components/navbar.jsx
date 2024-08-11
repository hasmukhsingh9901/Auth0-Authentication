"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const navLinks = [
  { href: "/", text: Home },
  { href: "/profile", text: "Server Protected Profile" },
  { href: "/protected", text: "Middleware Protected" },
  { href: "/auth-protected", text: "Auth Protected" },
  { href: "/api/data", text: "Protected Api" },
];

const Navbar = () => {
  const { user, error, isLoading } = useUser();

  return <div></div>;
};

export default Navbar;
