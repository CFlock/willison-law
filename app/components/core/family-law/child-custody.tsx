import { FamilyLawPage } from "./family-law-page";

const title = "Child Custody";
const description =
  "Child custody disputes require careful legal guidance to protect your child’s best interests and your parental rights.";
const sections = [
  {
    heading: "When agreement is not possible",
    content:
      "While it is always better for a family to come to an amicable decision regarding custody matters, sometimes that is not possible. Arizona family law courts will then make a custody decision based on the best interests of the child. This means that a judge will look at certain issues when putting a parenting plan into place.",
  },
  {
    heading: "Factors the court considers",
    content:
      "These matters include the child’s desires if they are old enough, the relationship between the child, parents, and relatives, the child’s living conditions, their schooling and other needs in the community, potential contact with either or both parents, and any allegations of neglect, domestic violence, abuse, or fraud.",
  },
  {
    heading: "Custody types in Arizona",
    content:
      "There are two types of custody in the state of Arizona, which are legal decision-making and parenting time. Legal decision making refers to a parent’s ability to make decisions for their child regarding certain matters, such as religion, healthcare, and more. This type of custody can be split between the parents or given to just one parent. Parenting time refers to the amount of time a parent gets to spend with their child. This, too, can either be split jointly or awarded to a sole parent. Arizona law states that each parent should have frequent, meaningful, and continuing parenting time.",
  },
  {
    heading: "How we help protect your child",
    content:
      "Our Prescott child custody lawyer always starts with an honest evaluation of your situation and then works with you to protect the best interests of your child. We will discuss all your legal options and help you decide on the legal path that is best for your circumstances. Contact Willison Law, PC to schedule your initial consultation. Our Prescott Child Custody Attorneys are ready to help.",
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