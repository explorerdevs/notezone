import { Button } from "@/stories/button";

export default function Page() {
  return (
    <main>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-5xl text-cobalt-500 underline hover:text-cobalt-700">
          hello
        </h1>
        <Button variant="primary">Click me</Button>
        <Button variant="secondary">Click me</Button>
      </div>
    </main>
  );
}
