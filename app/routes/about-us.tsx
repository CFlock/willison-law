import type { Route } from "./+types/home";
import { AboutUs } from "~/components/core/about-us/about-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AboutUS() {
  return <AboutUs />;
}
