import { Button } from "@/stories/button";

import type { Route } from "./+types/_index";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Page() {
  return (
    <main>
      <div className="flex items-center justify-center gap-3">
        <h1 className="flex items-center text-5xl text-cobalt-500 underline hover:text-cobalt-700">
          hello
        </h1>
        <Button variant="primary">Click me</Button>
        <Button variant="ghost">Click me</Button>
      </div>
    </main>
  );
}
