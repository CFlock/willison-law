import { FamilyLawPage } from "./family-law-page";

const title = "Legal Separation";
const description =
  "Legal separation can be an option for families who need a formal agreement without dissolving the marriage.";
const sections = [
  {
    heading: "When legal separation is the right choice",
    content:
      "In many instances, two spouses may wish to pursue a legal separation rather than divorce. There are a number of reasons to choose legal separation—perhaps you are unable to get a divorce for religious reasons, your spouse may require health insurance through your employer, or you may simply wish to live separately but not get divorced. No matter the reason you are considering a legal separation, it’s wise to have a seasoned Prescott legal separation lawyer on your side to help you navigate the process. At Willison Law, PC, our legal team can help you understand your options and weigh the pros and cons of a legal separation in your unique situation.",
  },
  {
    heading: "Arizona legal separation requirements",
    content:
      "Eligibility for legal separation in Arizona requires at least one spouse to currently reside in the state or be stationed in Arizona if he or she is a military service member, the spouses must state that the marriage is irretrievably broken, and the opposing party must agree to the separation. Similar to a divorce, the two separating spouses must make decisions regarding child custody, the division of assets, and more. Should one spouse object to the separation and instead request a divorce, the court will likely grant a divorce. It is also possible to convert a legal separation into a divorce at a later date.",
  },
  {
    heading: "Personalized guidance for your situation",
    content:
      "If you’re considering a legal separation, or your spouse has requested a separation and you are concerned about various aspects of the separation, such as child custody or support, Willison Law, PC can help you clearly understand your options. Our Prescott legal separation lawyer offers compassionate, personalized guidance suited to your unique situation. She has been recognized by prestigious national organizations, including Avvo and the American Institute of Family Law Attorneys™ for her commitment to outstanding services and ethical practices. No matter how complicated your situation may be, we’re ready to advocate for you every step of the way.",
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