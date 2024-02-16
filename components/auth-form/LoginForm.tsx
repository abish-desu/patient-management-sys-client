import React from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const LoginForm = () => {
  return (
    <form className="w-full max-w-md">
      <h2 className="text-3xl mb-10 text-center text-black">Login</h2>
      <div className="mb-4">
        <label className="block  text-sm mb-2" htmlFor="username">
          Email
        </label>
        <Input
          className=" text-black "
          id="email"
          placeholder="Type your email"
          type="email"
        />
      </div>
      <div className="mb-8">
        <label className="block  text-sm mb-2" htmlFor="password">
          Password
        </label>
        <Input
          className=" text-black "
          id="password"
          placeholder="Enter your password"
          type="password"
        />
        <Link
          className="inline-block align-baseline text-xs mt-1 text-black"
          href="#"
        >
          Forgot password?
        </Link>
      </div>
      <div className="mb-8">
        <Button
          className="w-full border   py-2 px-4 rounded-md  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
          type="submit"
        >
          Login
        </Button>
      </div>
      <p className="text-center text-gray-500 text-xs mb-4">Or Sign Up Using</p>
      <div className="flex items-center justify-center mb-4 text-blue-500 text-xl gap-4">
        <FaGoogle />
        <FaLinkedin />
      </div>
      <div className="text-center">
        <Link href="/sign-up">
          <Button className=" py-2 px-8 border rounded-md  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
        Create an account
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
