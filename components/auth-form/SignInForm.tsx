"use client";
import React from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { addSignUpData } from "@/api/user";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export interface IFormInput {
  email: string;
  password: string;
}
const SignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { mutate } = useMutation({
    mutationFn: addSignUpData,
    onSuccess: () => {
      toast.success("Account created successfully. Please login");
      router.push("/login");
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl mb-10 text-center text-black">
        Create an Account
      </h2>
      <div className="mb-4">
        <label className="block  text-sm mb-2" htmlFor="username">
          Email
        </label>
        <Input
          className=" text-black "
          id="email"
          placeholder="Enter your email"
          {...register("email", {
            pattern: {
              value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
              message: "Invalid email",
            },
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        <div className="h-[8px]">
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email?.message}</p>
          )}
        </div>
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
          {...register("password", { required: true })}
        />
        <div className="h-[8px]">
          {errors.password && (
            <p className="text-xs text-red-400">This field is required</p>
          )}
        </div>
      </div>
      <div className="mb-8">
        <Button
          className="w-full border   py-2 px-4 rounded-md  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
          type="submit"
        >
          Create an account
        </Button>
      </div>
      <p className="text-center text-gray-500 text-xs mb-4">Or Sign Up Using</p>
      <div className="flex items-center justify-center mb-4 text-blue-500 text-xl gap-4">
        <FaGoogle />
        <FaLinkedin />
      </div>
      <div className="text-center">
        <Link href="/login">
          <Button className=" py-2 px-8 border rounded-md  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Login
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
