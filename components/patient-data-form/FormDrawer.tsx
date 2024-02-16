import * as React from "react";
import { CiCirclePlus } from "react-icons/ci";
import Form from "./Form";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function FormDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="flex items-center  gap-4 ">
          Add <CiCirclePlus className="text-xl" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-5xl">
          <Form />
          <DrawerFooter>
            <Button>Add Data</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
