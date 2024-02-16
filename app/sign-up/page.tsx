/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HamGQ41WuVa
 *
 */
import Image from "next/image";
import logo from "@/public/login.jpg";
import SignInForm from "@/components/auth-form/SignInForm";


export default function Component() {
  return (
    <div className="xl:container mx-auto px-4  2xl:px-28 w-full h-screen flex items-center justify-center">
      <div className=" flex w-full  ">
        <div className=" basis-full sm:basis-1/2 flex items-center justify-center ">
          <SignInForm />
        </div>
        <div className="basis-1/2 sm:flex items-center justify-center hidden ">
          <Image src={logo} alt="job logo" className="w-[544px] py-2 " />
        </div>
      </div>
    </div>
  );
}
