import React, { useState } from "react";
import Form from "../ui/Form";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    if (email === "admin@admin" && password === "12345") {
      alert("Login success");
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl lg:text-2xl font-bold text-black">
          Welcome to Admin Panel!
        </h1>
        <p className="text-gray-500  text-sm">Sign in to your account</p>
      </div>
      <div className="flex flex-col gap-5">
        <Form
          labelName="Email"
          type="email"
          placeholder="Input your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col gap-2">
          <Form
            labelName="Password"
            type="password"
            placeholder="Input your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex flex-row justify-between gap-2">
            <Checkbox
              labelName="Remember me"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
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

      <div className="pointer-events-auto">
        <Button
          labelButton="Sign In"
          variant="blue"
          type="submit"
          onClick={() => {
            handleLogin();
          }}
        />
      </div>
    </div>
  );
}
