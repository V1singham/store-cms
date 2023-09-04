import { Button } from "@/components/ui/Button";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex gap-2">
        <Button variant={"outline"}>Button</Button>
        <Button variant={"ghost"}>Button</Button>
        <Button variant={"link"}>Button</Button>
        <Button variant={"secondary"}>Button</Button>
        <Button variant={"destructive"}>Button</Button>
        <Button variant={"outline"}>Button</Button>
        <Button variant={"outline"}>Button vks</Button>
      </div>
    </section>
  );
}
