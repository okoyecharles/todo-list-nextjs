"use client";

import { signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../element/button";
import { useEffect } from "react";
import Image from "next/image";

export default function Navigation({ user }) {
  const profile = user ? (
    <div className="profile flex items-center gap-4">
      <Image src={user?.image} className="rounded-full select-none" width={24} height={24} />
      <Button
        onClick={() => signOut()}
        className="bg-dark-primary text-light-primary ring-[0.5px] ring-line rounded flex items-center gap-2 hover:bg-dark-primary hover:ring-blue"
      >
        Sign out
      </Button>
    </div>
  ) : (
    <Button
      className="bg-dark-primary text-light-primary ring-[0.5px] ring-line rounded flex items-center gap-2 hover:bg-dark-primary hover:ring-blue"
      onClick={() => signIn("google")}
    >
      <FcGoogle className="text-xl" />
      Sign in with Google
    </Button>
  );

  return (
    <nav className="py-4 px-6 flex mb-8">
      <a
        href="https://github.com/okoyecharles/todo-list-nextjs"
        target="blank"
        rel="noreferrer noopener"
      >
        <FaGithub className="text-[1.5rem] text-light-primary" />
      </a>
      <div className="profile-container ml-auto">{profile}</div>
    </nav>
  );
}
