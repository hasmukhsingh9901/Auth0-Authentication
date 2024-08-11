"use client";
import { navLinks } from "@/utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import SignUpButton from "./signup-button";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  console.log("User:", user);
  console.log("Error:", error);
  console.log("Is Loading:", isLoading);
  return (
    <div className="py-4 flex w-full justify-between bg-zinc-700  items-center">
      <div className="flex gap-8 px-6">
        {navLinks &&
          navLinks.map((item, index) => (
            <a href={item.href} key={index} className="text-white">
              {item.text}
            </a>
          ))}
          
            <LoginButton />
        <div className="flex gap-4">
          <div className="flex gap-4">
            {!user && !isLoading && (
              <>
                <SignUpButton />
              
              </>
            )}
            {user && !isLoading && (
              <>
                <LogoutButton />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
