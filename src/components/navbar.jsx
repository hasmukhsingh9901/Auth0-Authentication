"use client";
import { navLinks } from "@/utils";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";



const Navbar = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="py-4 flex w-full justify-between   items-center">
      <div className="flex gap-8 justify-center items-center  w-full p-5 border-b border-zinc-600">
        {navLinks &&
          navLinks.map((item, index) => (
            <a href={item.href} key={index}>
              {item.text}
            </a>
          ))}
      </div>

      {user && !isLoading && (
        <>
          {/* <SignupButton /> */}
          {/* <LoginButton /> */}
        </>
      )}
      {user && !isLoading && <>{/* LogoutButton */}</>}
    </div>
  );
};

export default Navbar;
