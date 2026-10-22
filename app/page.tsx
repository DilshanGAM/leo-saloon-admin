import ProductCard from "@/components/productCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/theme-switch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[750px] h-[750px]  ">

      <input className="border"/>

      <Input />
      <Button className="bg-red-600 dark:bg-yellow-300 text-yellow-300 dark:text-red-600" >Click Me</Button>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}