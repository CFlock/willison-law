import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-us", "./components/core/about-us/about-us.tsx"),

  route("family-law", "./components/core/family-law/family-law-layout.tsx", [
    index("./components/core/family-law/family-law-home.tsx"),

    route("divorce", "./components/core/family-law/divorce.tsx"),

    route("child-custody", "./components/core/family-law/child-custody.tsx"),

    route("child-support", "./components/core/family-law/child-support.tsx"),

    route(
      "domestic-violence",
      "./components/core/family-law/domestic-violence.tsx",
    ),

    route(
      "legal-separation",
      "./components/core/family-law/legal-separation.tsx",
    ),

    route(
      "grandparents-rights",
      "./components/core/family-law/grandparents-rights.tsx",
    ),

    route("mediation", "./components/core/family-law/mediation.tsx"),

    route("paternity", "./components/core/family-law/paternity.tsx"),
  ]),

  route(
    "estate-planning",
    "./components/core/estate-planning/estate-planning-layout.tsx",
    [
      index("./components/core/estate-planning/estate-planning-home.tsx"),
      route("issues", "./components/core/estate-planning/issues.tsx"),
      route("process", "./components/core/estate-planning/process.tsx"),
      route("trusts", "./components/core/estate-planning/trusts.tsx"),
      route("wills", "./components/core/estate-planning/wills.tsx"),
    ],
  ),

  route("contact-us", "./routes/contact-us.tsx"),
] satisfies RouteConfig;