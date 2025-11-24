"use client";

import LoginIllustration from "@/components/login/LoginIllustration";
import LoginForm from "@/components/login/LoginForm";

export default function Login() {
  return (
    <div className="px-4">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col lg:flex-row lg:w-full rounded-2xl shadow-2xl overflow-hidden max-w-5xl">
          <div className="hidden lg:block lg:w-[60%] bg-black">
            <LoginIllustration />
          </div>
          <div className="w-full lg:w-[40%] flex p-6 lg:p-12 bg-white min-w-[300px] lg:min-w-[400px] max-w-lg">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
