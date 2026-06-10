import { FamilyLawPage } from "./family-law-page";

const title = "Paternity";
const description =
  "Paternity actions establish legal parentage and protect the rights of both parents and children.";
const sections = [
  {
    heading: "Why establishing paternity matters",
    content:
      "Proving paternity is important for a number of legal family matters, including child visitation, custody, support, and more. If you are a father wishing to establish paternity or you are a mother who needs to dispute the paternity of your child, we can help. At Willison Law, PC, our Prescott paternity lawyer has years of experience and can help you understand your legal options. We offer compassionate, confidential legal guidance tailored to your situation.",
  },
  {
    heading: "Need for experienced counsel",
    content:
      "Whether you are attempting to establish paternity of your child or you are fighting a paternity action, it’s important that you retain assistance from an experienced paternity lawyer in Prescott. A seasoned attorney will know the relevant laws and how they apply to your situation. Establishing paternity is important for a number of reasons, including obtaining child support, securing your right to child custody and visitation, and proving a financial obligation of a parent.",
  },
  {
    heading: "How paternity is established",
    content:
      "Paternity is established if any of the following are true: genetic testing reveals paternity with at least 95% certainty, the supposed father signed the birth certificate of the child, or the supposed parents were married to one another within the previous 10 months. If paternity is not established, there is no financial obligation of the supposed father to pay child support. However, without paternity, the supposed father may also risk losing access to the child as visitation is not guaranteed.",
  },
  {
    heading: "Tailored legal support",
    content:
      "Whether you are a father wishing to fight for your rights or a mother seeking to establish paternity for the purpose of securing child support, our firm can help. We take the time to sit down with you and discuss the specifics of your case. Our Prescott paternity lawyer works to understand your unique goals and then creates a plan of legal action tailored to your circumstances. With every case we take on, we strive for optimal results for you and your family.",
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