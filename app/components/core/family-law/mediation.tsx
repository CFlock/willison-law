import { FamilyLawPage } from "./family-law-page";

const title = "Mediation";
const description =
  "Mediation offers a collaborative path for resolving family law disagreements without going to court.";
const sections = [
  {
    heading: "Mediation as an alternative",
    content:
      "When two spouses can agree to the terms of a divorce—including aspects such as child custody, spousal maintenance, and the division of assets—mediation may offer an effective and mutually beneficial alternative to going to court. There are a number of reasons to opt for alternative dispute resolution, and our Prescott mediation lawyer can help you determine if this might be the right option for you and your family.",
  },
  {
    heading: "Benefits of mediation",
    content:
      "Going to court in order to resolve your divorce can result in unnecessary stress, costly court fees, and a long divorce process. In many cases, mediation can speed along the process and offer an agreeable way to resolve your family law matter. The advantages of choosing mediation can include an expedited divorce process, a less expensive and stressful process, mutually agreeable resolutions, and solutions tailored to your family.",
  },
  {
    heading: "When mediation is appropriate",
    content:
      "In order to pursue mediation, you and your spouse must agree on every aspect of the divorce. If you are unable to agree on issues such as child support, alimony, or how property should be divided, mediation is not the right choice. If, however, you wish to expedite the divorce process and save yourself time, money, and stress, alternative dispute resolution could be the answer. At Willison Law, PC, we have helped countless individuals find solutions that work for their unique family dynamic. Our Prescott mediation attorney has extensive experience handling a wide range of family law issues and can help you determine if mediation can benefit you and your family.",
  },
  {
    heading: "Personalized mediation advocacy",
    content:
      "Our Prescott mediation attorney offers compassionate, one-on-one attention and honest communication as we advocate for your best interests every step of the way. Call Willison Law, PC to find out how we can help you.",
  },
];

export default function Page() {
  return (
    <FamilyLawPage title={title} description={description}>
      {sections.map((section, index) => (
        <section key={index}>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            {section.heading}
          </h2>
          <p className="mt-4">{section.content}</p>
        </section>
      ))}
    </FamilyLawPage>
  );
}