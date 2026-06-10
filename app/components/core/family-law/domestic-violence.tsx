import { FamilyLawPage } from "./family-law-page";

const title = "Domestic Violence";
const description =
  "If you are facing domestic violence issues, you need legal support that addresses both safety and family law rights.";
const sections = [
  {
    heading: "Defense for domestic violence allegations",
    content:
      "If you have been accused of domestic violence, Willison Law, PC can help you fight for your rights. Domestic violence is a serious accusation and it’s important that you seek guidance from a seasoned Prescott domestic violence lawyer in order to defend your reputation, future, and in some cases, your freedom. With an extensive legal background in criminal defense, Stephanie knows how to help you navigate the system and work toward an optimal outcome.",
  },
  {
    heading: "Consequences of a conviction",
    content:
      "A conviction for domestic violence can jeopardize your ability to obtain work, spend time with your children, or even secure housing. In some cases, you may even face imprisonment. Domestic violence convictions carry a range of consequences, including restrictions on child custody or visitation, mandatory counseling, jail or prison time, restrictions on gun ownership, probation, fines, and court fees. At Willison Law, PC, our Prescott domestic violence attorney can help you fight for your rights.",
  },
  {
    heading: "Assistance for victims",
    content:
      "If you are a victim of domestic violence, Willison Law, PC can help you work toward the immediate relief you need. We have experience helping individuals obtain restraining orders, both temporary and long-term, and can help you understand your legal options. Our Prescott domestic violence lawyer can fight to keep you and your family safe.",
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