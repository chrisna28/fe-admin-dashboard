import Image from "next/image";
import React from "react";
import Logo from "../ui/Logo";

export default function LoginIllustration() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/assets/bg-login-page.jpg"
        alt="Login Image"
        width={1000}
        height={600}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="absolute top-1 left-1 z-10 p-4 ">
        <Logo logo="/assets/logo-demo-w.png" />
      </div>
    </div>
  );
}
