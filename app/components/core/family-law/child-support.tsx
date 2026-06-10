import { FamilyLawPage } from "./family-law-page";

const title = "Child Support";
const description =
  "Child support issues can have lasting financial impact, so it’s important to understand your rights and the law.";
const sections = [
  {
    heading: "Child support obligations",
    content:
      "When parents are either unmarried or going through a divorce, a family law court may assign an order for the support and care of any minor child. This may require either parent to provide regular financial support, based on the needs of the child and the parent’s ability to pay.",
  },
  {
    heading: "Arizona support calculation guidelines",
    content:
      "Arizona has put in place guidelines for determining child support. This amount is a calculated share of a parent’s income, based on the number of children they have. Almost all earned income will be considered in these calculations, including hourly or salaried wages from working, any commissions, tips, or bonuses, investments, income from self-employment, workers’ compensation, disability, or other social service benefits, retirement benefits, alimony, and interest payments. A knowledgeable lawyer in Prescott could help a parent calculate how much child support they may be required to pay.",
  },
  {
    heading: "Adjustments and exceptions",
    content:
      "Guidelines are also generally based on typical circumstances but there can be exceptions, such as proven extraordinary expenses and other adjustments. Support payments can also be terminated when the child turns 18 and finishes high school, for example. High-income households also may not pay the same support percentages as other families. If the parents’ combined income is more than $20,000 a month, the court may not follow the guidelines.",
  },
  {
    heading: "Consequences of nonpayment",
    content:
      "Child support is a serious obligation, and can result in criminal consequences if neglected. A parent who does not receive the ordered child support can file a petition with the court to hold the other party in contempt. If the court finds that the other parent had the funds to make the payment but willfully refused, then the court can send the non-paying party to jail for this offense. If the parent who failed to pay does not appear in court, the judge can find them in contempt and issue a warrant for their arrest. In addition to facing jail time, a parent can have their driver’s license or professional licenses suspended, and the court can order that the parent’s employer withhold the child support amount from their paycheck.",
  },
  {
    heading: "Talk to an experienced attorney",
    content:
      "Our Prescott child support lawyer can work closely with you, whether you have been asked to pay or if you are seeking support. We will seek an outcome that supports your child’s upbringing and development. Do not wait, call our office today for guidance.",
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