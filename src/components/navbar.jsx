"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/profile", text: "Server Protected Profile" },
  { href: "/protected", text: "Middleware Protected" },
  { href: "/auth-protected", text: "Auth Protected" },
  { href: "/api/data", text: "Protected Api" },
];

const Navbar = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="py-4 flex w-full justify-between   items-center">
      <div className="flex gap-8 justify-center items-center  w-full p-5 border-b border-zinc-600">
        {navLinks &&
          navLinks.map((item, index) => (
            <a  href={item.href} key={index}>
              {item.text}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
