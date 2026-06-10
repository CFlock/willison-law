import { EstatePlanningPage } from "./estate-planning-page";

const title = "Estate Planning Process";
const description =
  "Learn the estate planning process, from identifying goals and assets to creating documents that reflect your wishes.";
const sections = [
  {
    heading: "Estate planning options",
    content:
      "A Prescott attorney has multiple tools at their disposal during the estate planning process. There are a variety of options available to each person considering their final wishes. Some of these legal options will work better than others, depending on the specific circumstances.",
  },
  {
    heading: "Choosing the right documents",
    content:
      "A well-practiced lawyer could provide guidance on what elements of an estate plan could work best for each person. Planning your estate should include selecting the right combination of wills, trusts, powers of attorney, and living wills based on your goals, assets, and family situation.",
  },
  {
    heading: "Attention to detail matters",
    content:
      "The best estate plans are built with careful attention to detail, including beneficiary designations, tax consequences, guardianship provisions, and healthcare directives. Working with counsel can help ensure your documents are drafted properly and your final wishes are enforced.",
  },
  {
    heading: "Start the conversation today",
    content:
      "Discussing your estate planning goals with a Prescott attorney is the best way to make sure your plan works for your family. Call our office to get started.",
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
