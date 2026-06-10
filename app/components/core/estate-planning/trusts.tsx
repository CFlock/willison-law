import { EstatePlanningPage } from "./estate-planning-page";

const title = "Trusts";
const description =
  "Trusts are powerful tools that can protect assets, manage wealth distribution, and provide for family members.";
const paragraphs: string[] = [
  "The creation of a trust can be a powerful tool during the estate planning process. These trusts can allow you to distribute your assets as you see fit after your passing while avoiding the delays and expenses common with probate court. A dedicated estate planning attorney could assist you with making a trust that meets your needs.",
  "Trusts typically fall under two categories: revocable and irrevocable. As the names imply, revocable trusts are easier to change than irrevocable trusts. Revocable trusts are created while the settlor is still alive. The creator of the trust also commonly serves as the trustee until their passing and can make changes to the trust throughout their lifetime. When the settlor passes away, the property held in the trust will be distributed according to the document. This serves as a helpful tool for the beneficiaries of the trust to avoid probate court since it can be costly and time-consuming.",
  "Irrevocable trusts are different in that they are much harder to alter or revoke. Additionally, it is difficult to remove property from these trusts once it has been transferred. While there are complications that can arise based on losing access to these assets, there are also important benefits. Transferring property to an irrevocable trust removes it entirely from the creator’s estate, which can have substantial tax benefits. Before a person creates a trust in Arizona, they should discuss their options with a local attorney to determine which type of trust is best for them. Working with seasoned legal counsel could also help people avoid complications while preserving the benefits that come with creating a trust.",
  "Establishing a trust can allow an individual to meet a variety of goals when planning their estate. In many cases, these benefits are not available through traditional wills or other estate planning tools. One of the most common goals of a trust is the avoidance of probate. The probate process requires court proceedings, which can be costly both in terms of time and money. It also places the specifics of an estate in the public record.",
  "Additionally, some trusts allow a person to better provide for a charitable cause. By listing a charity as the beneficiary of a trust, it could provide the estate with tax benefits while funding a cause that is near to the creator’s heart. There are other advantages of trusts, including reducing taxes, protection from creditors, and providing for minor children. People creating an estate plan should speak with a Prescott attorney about the benefits of including a trust.",
  "Trusts are often complex, especially in cases where they contain substantial assets. Attempting to take on the challenge of establishing these trusts can be overwhelming for most people who lack estate planning experience. If you are creating an estate plan, you should allow an attorney to assist you with every aspect of creating a trust. Contact a Prescott trusts lawyer right away to learn more.",
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
