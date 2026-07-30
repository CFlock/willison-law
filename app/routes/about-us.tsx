import type { Route } from "./+types/home";
import { AboutUs } from "~/components/core/about-us/about-us";
import { buildPageMeta } from "../seo";

export function meta({}: Route.MetaArgs) {
  return buildPageMeta({
    title: "About Willison Law, PC",
    description:
      "Meet Stephanie Willison and learn how our Prescott family law firm provides compassionate, strategic guidance for complex legal matters.",
    path: "/about-us",
  });
}

export default function AboutUS() {
  return <AboutUs />;
}
