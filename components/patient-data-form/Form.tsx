/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w2zo3vhWQL7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Form() {
  return (
    <div className=" my-10 px-4">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-number">Contact number</Label>
            <Input
              id="contact-number"
              placeholder="Enter your contact number"
              type="tel"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date-of-birth">Date of Birth</Label>
            <Input id="date-of-birth" type="date" />
          </div>
         
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-time">Start Time</Label>
            <Input id="start-time" type="time" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-time">End Time</Label>
            <Input id="end-time" type="time" />
          </div>
        </div>
      </div>
    </div>
  );
}
