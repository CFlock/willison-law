import type { Route } from "./+types/home";
import { Welcome } from "../components/core/welcome/welcome";
import { buildPageMeta } from "../seo";

export function meta({}: Route.MetaArgs) {
  return buildPageMeta({
    title: "Prescott Family Law Attorney",
    description:
      "Trusted family law representation in Prescott, Arizona for divorce, child custody, support, mediation, and estate planning matters.",
    path: "/",
  });
}

export default function Home() {
  return <Welcome />;
}
