import { EstatePlanningPage } from "./estate-planning-page";

const title = "Wills";
const description =
  "Wills provide clear direction on how your property should be distributed and who will manage your estate.";
const sections = [
  {
    heading: "Direct how your property is distributed",
    content:
      "You have the right to direct how your property is divided upon your death. To do so, you must establish an estate plan that meets the basic requirements under state law. The simplest way to make these final arrangements is through the use of a last will and testament.",
  },
  {
    heading: "Build your will with experience",
    content:
      "An experienced estate attorney could walk you through every step of establishing a will. During this process, you can identify your beneficiaries and determine what assets each of them should inherit. With the help of a Prescott wills lawyer, you could ensure your selected beneficiaries enjoy the property you have accumulated in life without unnecessary cost or delay.",
  },
  {
    heading: "Arizona will requirements",
    content:
      "As with all jurisdictions, state law requires wills in Prescott and throughout Arizona to meet certain conditions before they are valid. While meeting the standards of writing a will might seem simple, many wills have been contested over the years due to the failure of a will to comply with each requirement. Only an adult may execute a valid will and these documents must be in writing. Any purported will created by a person under the age of 18 will not be valid under the eyes of the law. Additionally, the creator of the will must be of sound mind. This is known as having testamentary capacity.",
  },
  {
    heading: "Testamentary intent and execution",
    content:
      "A will must also have clear testamentary intent. This intent is created with some form of instructions on what a person wants to happen to their assets upon their death. Finally, the testator must sign the will or have someone sign it in their direction. This entire process must occur without any undue influence or pressure on the person creating the will.",
  },
  {
    heading: "Guidance on required wills",
    content:
      "There are other requirements that can come with the creation of a will, depending on the type of will in question. A local attorney could provide reliable guidance on the technical requirements for the different types of wills that are available under the law.",
  },
  {
    heading: "Types of wills under Arizona law",
    content:
      "There are three general types of wills under state law: self-proven, non-self-proven, and holographic. Experienced attorneys typically rely on self-proven wills when creating an estate plan for people in Prescott.",
  },
  {
    heading: "Peace of mind through planning",
    content:
      "A strong last will and testament can provide peace of mind. Additionally, by addressing these issues during your life, you can eliminate many of the challenges that your loved ones will face after your passing. If you meet the basic requirements for creating a will, it is in your best interest to do so right away. Contact a Prescott wills lawyer for more information.",
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
