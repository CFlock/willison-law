import { EstatePlanningPage } from "./estate-planning-page";

const title = "Estate Planning";
const description =
  "Estate planning helps protect your legacy, minimize taxes, and ensure your wishes are honored for your family.";
const sections = [
  {
    heading: "Protect your family’s future",
    content:
      "For many individuals, the thought of leaving their loved ones with unresolved debt, inheritance disputes, and surprise tax obligations is unthinkable. A proper estate plan can help a person ensure that their assets are distributed as they see fit and done so in a way that is efficient and fair.",
  },
  {
    heading: "Work with a seasoned estate attorney",
    content:
      "A seasoned estate attorney could assist with the important work of developing an estate plan. From drafting a will to making decisions about your medical care when you are incapacitated, working with a Prescott estate planning lawyer could be highly beneficial.",
  },
  {
    heading: "Choose the right estate planning tools",
    content:
      "A Prescott attorney has multiple tools at their disposal during the estate planning process. There are a variety of options available to each person considering their final wishes. Some of these legal options will work better than others, depending on the specific circumstances. A well-practiced lawyer could provide guidance on what elements of an estate plan could work best for each person.",
  },
  {
    heading: "Maintain control of your property",
    content:
      "Do not leave your assets in the hands of the court. Call a Prescott estate planning lawyer today to maintain control of your property through the end of your life.",
  },
];

export default function Page() {
  return (
    <EstatePlanningPage title={title} description={description}>
      {sections.map((section, index) => (
        <section key={index}>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            {section.heading}
          </h2>
          <p className="mt-4">{section.content}</p>
        </section>
      ))}
    </EstatePlanningPage>
  );
}
