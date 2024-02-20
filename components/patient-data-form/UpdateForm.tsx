"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w2zo3vhWQL7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into--nextjs-app
 */
import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updatePatientDataById } from "@/api/patient";
import { useEffect } from "react";
export interface PatientData {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  dob: string;
  workDays: string;
  startTime: string;
  endTime: string;
}

export default function UpdateForm({ fetched_data }: any) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PatientData>();

  const { mutate } = useMutation({
    mutationFn: updatePatientDataById,
    onSuccess: () => {
      toast.success("Data updated successfully.");
      window.location.reload();
    },
    onError: () => {
      toast.error("Error in updating data");
    },
  });
  const onSubmit = (data: any) => {
    const updatedData = { ...data, id: fetched_data.id };
    console.log("Submitting data: ", updatedData);
    mutate(updatedData);
  };
  console.log("fetched_data_in form, ", fetched_data);
  useEffect(() => {
    if (fetched_data) {
      setValue("firstName", fetched_data.firstName);
      setValue("lastName", fetched_data.lastName);
      setValue("email", fetched_data.email);
      setValue("contact", fetched_data.contact);
      setValue("dob", fetched_data.dob);
      setValue("workDays", fetched_data.workdays);
      setValue("startTime", fetched_data.startTime);
      setValue("endTime", fetched_data.endTime);
    }
  }, [fetched_data, setValue]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 px-4">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              {...register("firstName", {
                required: true,
              })}
              placeholder="Enter first name"
              defaultValue={fetched_data?.firstName}
            />

            <div className="h-[8px]">
              {errors.firstName && (
                <p className="text-xs text-red-400">This field is required</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input
              id="last-name"
              {...register("lastName", { required: true })}
              placeholder="Enter last name"
              defaultValue={fetched_data?.lastName}
            />
            <div className="h-[8px]">
              {errors.lastName && (
                <p className="text-xs text-red-400">This field is required</p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter email"
              type="email"
              defaultValue={fetched_data?.email}
            />
            <div className="h-[8px]">
              {errors.email && (
                <p className="text-xs text-red-400">This field is required</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-number">Contact number</Label>
            <Input
              id="contact-number"
              {...register("contact", { required: true })}
              placeholder="Enter contact number"
              type="tel"
              defaultValue={fetched_data?.contact}
            />
            <div className="h-[8px]">
              {errors.contact && (
                <p className="text-xs text-red-400">This field is required</p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              placeholder="Enter date of birth in format: YYYY-MM-DD"
              id="date-of-birth"
              {...register("dob", { required: true })}
              type="text"
              defaultValue={fetched_data?.dob}
            />
            <div className="h-[8px]">
              {errors.dob && (
                <p className="text-xs text-red-400">This field is required</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="workDays">Work Days</Label>
            <Input
              placeholder="Enter work days"
              id="date-of-birth"
              {...register("workDays", { required: true })}
              type="text"
              defaultValue={fetched_data?.workdays}
            />
            <div className="h-[8px]">
              {errors.dob && (
                <p className="text-xs text-red-400">This field is required</p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-time">Start Time</Label>
            <Input
              placeholder="Enter time"
              id="start-time"
              {...register("startTime", { required: true })}
              type="text"
              defaultValue={fetched_data?.startTime}
            />
            <div className="h-[8px]">
              {errors.startTime && (
                <p className="text-xs text-red-400">This field is required</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-time">End Time</Label>
            <Input
              placeholder="Enter time"
              id="end-time"
              {...register("endTime", { required: true })}
              type="text"
              defaultValue={fetched_data?.endTime}
            />
            <div className="h-[8px]">
              {errors.endTime && (
                <p className="text-xs text-red-400">This field is required</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full  mt-10 ">
        Update Data
      </Button>
    </form>
  );
}
