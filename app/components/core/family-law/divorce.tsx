import { FamilyLawPage } from "./family-law-page";

const title = "Divorce";
const description =
  "Divorce proceedings are complex; having an experienced family law attorney helps protect your rights and preserve your future.";
const sections = [
  {
    heading: "Divorce can involve many issues",
    content:
      "With any divorce, there are numerous issues involved. Depending on the nature of your situation—whether or not you and your partner have any children, the number of shared assets between the two of you, if you own a business or other property, etc.—these issues can complicate divorce proceedings.",
  },
  {
    heading: "Comprehensive case management",
    content:
      "We can handle every aspect of your case, including but not limited to division of assets, child custody, child support, spousal support/alimony, modifications, and property division. It’s wise to enlist the assistance of an experienced Prescott divorce attorney who could help you navigate the process and advocate for your best interests.",
  },
  {
    heading: "Arizona’s no-fault divorce law",
    content:
      "Arizona is a so-called “No-Fault” state. This means that only one party has to state to the court that their marriage is irretrievably broken with no reasonable prospect of reconciliation.",
  },
  {
    heading: "How dissolution of marriage works",
    content:
      "State law refers to divorces as “dissolution of marriage.” When parties choose to end their marriage, one of the individuals will need to file their petition and send that document to the other party through a process server or the sheriff. The party who files the petition is known as the petitioner, and the party who receives the documents is the respondent. The respondent will have about 20 days to file their response or longer in cases where the person lives outside of the state. If the respondent fails to respond, the court can enter a default judgment and complete the divorce.",
  },
  {
    heading: "Navigating the divorce process",
    content:
      "Beginning the divorce process and knowing the steps to take can be confusing and intimidating. A local divorce attorney could guide individuals through the system and make the process less stressful.",
  },
  {
    heading: "Temporary orders and discovery",
    content:
      "After the petitioner files their paperwork and the respondent replies, the court may set a temporary order. Temporary orders will establish certain matters while the divorce is in process. For instance, the court may set visitation schedules for minor children, require that one party pay the mortgage on the family home, and other issues in order to prevent confusion, waste, and conflict. The Prescott attorneys will likely engage in the discovery process, in which the parties need to exchange documents and other information relevant to the divorce. Parties and others involved might need to sit for depositions, which are formal interviews that lawyers take while the subject is under oath. At any point in the process, the parties can mediate their disputes and reach agreements to avoid further litigation. Sometimes mediation, which is a less formal process, can help individuals work through their disputes. If all efforts to settle fail, the individuals will go to trial, where a judge will get to have the final say on asset division, custody, and other matters related to the divorce.",
  },
  {
    heading: "Sensitive issue support",
    content:
      "Our team can help you navigate sensitive issues in your divorce as well, including domestic violence or paternity disputes. Our Prescott divorce lawyer understands how difficult divorce is for all parties involved. She is committed to providing you with the compassionate, personalized legal counsel you need. You can rely on our firm for wisdom, guidance, and a dedication to striving for optimal results.",
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
