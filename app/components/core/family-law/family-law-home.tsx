import { FamilyLawPage } from "./family-law-page";

const title = "Family Law Services";
const description =
  "Willison Law, PC provides trusted, compassionate family law guidance across divorce, custody, support, and related matters.";
const sections = [
  {
    heading: "Compassionate advocacy for your family",
    content:
      "At Willison Law, PC, our top priority is offering premier-quality legal representation to families in limbo. Stephanie Willison, our founding Prescott family law Lawyer, sympathizes with the emotional grief that you, your children, and your loved ones have to deal with when divorce, legal separation, property division, child custody or support battles, and other related matters affect your family. It is for that reason that we work so hard to get our clients’ legal matters resolved as promptly and peacefully as possible, to help them move on with their lives while helping them protect their futures and their finances.",
  },
  {
    heading: "Comprehensive family law and estate planning support",
    content:
      "We offer comprehensive guidance through a variety of family law and estate planning cases, from divorce and child custody to paternity and property division, to planning for your future with a will or trust. Our level of experience in the area of family law surpasses that of many other attorneys in the Prescott area. Families turn to Willison Law, PC when they need further legal assistance to help them protect what matters most to them, whether it be their parental rights, child or spousal support, or wealth preservation. By working with a Prescott family lawyer at our firm, developing a plan-of-action designed to achieve your best interests and keep you and your loved ones together becomes our first order of business.",
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