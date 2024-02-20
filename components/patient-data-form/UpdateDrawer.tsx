import * as React from "react";
import UpdateForm from "./UpdateForm";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useQuery } from "@tanstack/react-query";
import { getPatientDataById } from "@/api/patient";
export function UpdateDrawer(id: any) {
  const { data, refetch } = useQuery({
    queryKey: ["patientData", id],
    queryFn: () => getPatientDataById(id),
    enabled: false, // disables the query from automatically running
  });

  const handleUpdateClick = async () => {
    await refetch();
  };
  console.log("id_data", data);
  const fetched_data = data?.data;
  console.log("fetched_data", fetched_data);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          onClick={handleUpdateClick}
          className="w-full text-black bg-white font-normal hover:bg-slate-100 justify-between p-2"
        >
          Update
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-5xl">
          <UpdateForm fetched_data={fetched_data} />
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
