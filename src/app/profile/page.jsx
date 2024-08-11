import { getSession } from "@auth0/nextjs-auth0";
import React from "react";
import ProfileClient from "./components/user-client";
import ProfileServer from "./components/user-server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center w-full mt-10 px-10">
      <div className="flex items-center w-full justify-between">
        <div>
          <h1 className="text-2xl mb-4">
            Client Component
            <ProfileClient />
          </h1>
        </div>
        <div>
          <h1 className="text-2xl mb-4">
            Server Component
            <ProfileServer />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
