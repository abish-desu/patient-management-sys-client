import api from "@/lib/api";
import { IFormInput } from "@/components/auth-form/LoginForm";
export const addLoginData = async (data:IFormInput) => {
  console.log(data);
  return api.post("/auth/signin",data);
};
export const addSignUpData = async (data:IFormInput) => {
  return api.post("/auth/signup",data); 
};
