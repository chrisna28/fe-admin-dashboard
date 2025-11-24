import React from "react";
import Form from "../ui/Form";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

export default function LoginForm() {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="block lg:hidden w-full">
        <div className="flex justify-center items-center">
          <Logo logo="/assets/logo-demo.png" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-black">
          Welcome to Admin Panel!
        </h1>
        <p className="text-gray-500  text-sm">Sign in to your account</p>
      </div>
      <div className="flex flex-col gap-5">
        <Form labelName="Email" type="email" placeholder="Input your email" />
        <div className="flex flex-col gap-2">
          <Form
            labelName="Password"
            type="password"
            placeholder="Input your password"
          />
          <div className="flex flex-row justify-between gap-2">
            <Checkbox labelName="Remember me" />
            <a className="text-blue-500 text-sm hover:underline" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        You are agreed with our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
      </p>

      <Button labelButton="Sign In" variant="blue" />
    </div>
  );
}
