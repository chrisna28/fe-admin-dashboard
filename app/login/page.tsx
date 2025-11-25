"use client";

import LoginIllustration from "@/components/login/LoginIllustration";
import LoginForm from "@/components/login/LoginForm";

export default function Login() {
  return (
    <div className="lg:p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:w-full lg:rounded-2xl lg:shadow-2xl overflow-hidden max-w-5xl">
          <div className="lg:w-[60%] h-[350px] lg:h-auto bg-black">
            <LoginIllustration />
          </div>
          <div className="w-full lg:w-[40%] flex p-8 lg:p-12 bg-white min-w-[300px] lg:min-w-[400px] max-w-lg">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
