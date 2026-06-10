import { FamilyLawPage } from "./family-law-page";

const title = "Grandparents' Rights";
const description =
  "Grandparents may need legal representation when seeking visitation or custody rights on behalf of their grandchildren.";
const sections = [
  {
    heading: "Understanding grandparents’ rights",
    content:
      "The state of Arizona grants certain rights to grandparents in regards to their grandchildren. However, these rights tend to be limited as parents’ rights usually take priority. If you believe that your rights as a grandparent have been compromised or you wish to learn more about grandparent visitation or custody, our firm can help. The Prescott grandparents’ rights lawyer at Willison Law, PC has years of experience helping families work toward peaceable resolutions to an array of family law matters. She can help you understand your options and fight for your grandchild’s best interests.",
  },
  {
    heading: "How courts decide visitation",
    content:
      "Like most states, Arizona courts focus on the best interests of the child in any grandparent rights matter. You may be granted court-ordered visitation rights if the child’s parents have been divorced for at least three months, one of the parents has been deceased or missing for at least three months, or the parents were never married. If one or more of these conditions is met, you must also show that visitation with you is in the child’s best interests. When determining the best interests of the child, the court will look at whether there is an existing relationship between the grandparent and child, the amount of time requested for visitation, the motives of both the grandparents and parents when requesting visitation, whether it will benefit the child to maintain a relationship with the grandparent, and the wishes of the parents regarding visitation.",
  },
  {
    heading: "Compassionate guidance throughout the process",
    content:
      "At Willison Law, PC, we understand that navigating your rights as a grandparent can be an emotional and difficult process. In most cases, individuals who come to us wishing to learn more about their rights are involved in complex and contentious situations. With this in mind, our Prescott grandparents’ rights lawyer offers compassionate guidance and attentive, one-on-one communication. We can provide you with honest, sound counsel and represent you throughout the process.",
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