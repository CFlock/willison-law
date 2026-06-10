import * as React from "react";
import { ProfArt } from "../about-us/prof-art";
import moumtain from "/app/images/image.png";
import { Link } from "react-router";
import ReviewTicker from "./review-ticker";
export function Welcome() {
  const [scrollY, setScrollY] = React.useState(0);
  const [smoothProgress, setSmoothProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      const target = Math.min(scrollY / 700, 1);

      setSmoothProgress((prev) => {
        const next = prev + (target - prev) * 0.08;
        return next;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [scrollY]);

  /*
   * Subtle Scroll Animation
   */
  const progress = smoothProgress;

  const heroScale = 1 - progress * 0.12;
  const heroTranslateY = -progress * 60;

  const stephInfo = [
    "If you need assistance with a complex family law matter, Prescott family lawyer Stephanie Willison is here to help. With an extensive legal background encompassing both criminal defense and family law, Stephanie has the experience and skill to help you navigate the legal process. As the founding attorney of Willison Law, PC, she focuses her practice on all aspects of family law, including divorce, child custody, spousal maintenance, mediation, and more. She can even help you with sensitive matters, such as paternity disputes, domestic violence, and grandparent rights. With every case she takes on, Stephanie strives to provide her clients with compassionate, personalized legal services tailored to their unique goals.",

    "Stephanie earned her Bachelor of Science in Communication from the University of Texas at Austin before going on to attend law school at the James E. Rogers College of Law at the University of Arizona. After graduating law school with her J.D. in 2003, Stephanie served as a prosecutor for Yavapai and Maricopa County. In this role, her practice focused on crimes against children, which instilled in her a strong sense of the value of family.",
  ];

  const tysonInfo = [
    "Tyson Marsh is an Arizona native with a diverse professional background, having served in the U.S. Navy and then worked as a structural welder and millwright. Tyson attended Yavapai College, earning his AAS Degree in Paralegal Studies in 2020, and earned his Bachelor of Science in Justice Studies, graduating cum laude from Arizona State University in 2022. He has worked at several law firms in the Prescott area as a paralegal, specializing in family law. Tyson has been with Willison Law since 2023 and has earned his Legal Paraprofessional license.",

    "Tyson’s family law experience enables him to represent clients in a broad range of family law matters including legal separation, divorce, modification and enforcement of court orders, child support and spousal maintenance, and child custody and parenting time issues. Tyson supports his clients through every stage – from settlement negotiations through trial litigation. He is dedicated to helping his clients through one of the most challenging and emotionally charged legal situations a person could experience.",
  ];

  return (
    <section className="bg-base-100">
      {/* Hero */}
      <section className="relative min-h-[115svh]">
        <div className="sticky top-0 flex min-h-screen items-center justify-center px-6 md:px-12">
          <div className="flex w-full flex-col items-center justify-center -translate-y-8">
            {/* Rotating Text */}
            <div
              className="origin-center will-change-transform transform-gpu"
              style={{
                transform: `translateY(${heroTranslateY}px) scale(${heroScale})`,
              }}
            >
              <div className="relative inline-flex border border-accent px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-7">
                {/* Corner decorations */}
                <div className="absolute -top-5 -left-5 w-6 h-6 border-t border-l border-primary" />
                <div className="absolute -bottom-5 -right-5 w-6 h-6 border-b border-r border-primary" />
                <span
                  className="text-rotate text-4xl font-light tracking-[0.08em] text-primary sm:text-5xl md:text-7xl lg:text-8xl"
                  style={
                    {
                      ["--duration" as any]: "7s",
                    } as React.CSSProperties
                  }
                >
                  <span className="justify-items-center">
                    <span>WISDOM</span>
                    <span>COMPASSION</span>
                    <span>RESULTS</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6 animate-pulse text-primary/80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-primary/5 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-6 text-lg font-semibold uppercase tracking-[0.25em] text-secondary md:text-xl">
              Willison Law PC
            </p>

            <h1 className="text-xl font-semibold leading-tight text-primary md:text-6xl">
              Yavapai County's Trusted Family Law & Divorce Advocate
            </h1>

            <div className="divider divider-accent max-w-32" />

            <p className="mt-8 mb-8 text-lg leading-relaxed">
              Our firm serves as the voice of reason when you have made the
              decision to file for divorce, pursue custody rights for your
              child, or proceed with other related family law matters.
            </p>

            <button className="btn btn-outline btn-accent px-10 text-primary">
              <Link to="/contact-us">Contact Us</Link>
            </button>
          </div>
        </div>
      </section>
      <>
        <ReviewTicker />

        <div className="flex justify-end pr-2">
          <button className="btn btn-outline btn-primary btn-sm">
            View More Testimonials
          </button>
        </div>
      </>

      <section className="relative z-10 bg-base-100 px-6 pb-24 pt-10 md:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <article className="prose prose-base max-w-6xl mx-auto text-lg">
            <h2 className="text-primary ">
              The Dependable Legal Advocate to Turn to When Family Dynamics
              Change
            </h2>
            <p>
              At Willison Law, PC, our top priority is offering premier-quality
              legal representation to families in limbo. Stephanie Willison, our
              founding Prescott family law Lawyer, sympathizes with the
              emotional grief that you, your children, and your loved ones have
              to deal with when divorce, legal separation, property division,
              child custody or support battles, and other related matters affect
              your family. It is for that reason that we work so hard to get our
              clients’ legal matters resolved as promptly and peacefully as
              possible, to help them move on with their lives while helping them
              protect their futures and their finances.
            </p>
            <p>
              We offer comprehensive guidance through a variety of family law
              and estate planning cases, from divorce and child custody to
              paternity and property division, to planning for your future with
              a will or trust. Our level of experience in the area of family law
              surpasses that of many other attorneys in the Prescott area.
              Families turn to Willison Law, PC when they need further legal
              assistance to help them protect what matters most to them, whether
              it be their parental rights, child or spousal support, or wealth
              preservation. By working with a Prescott Family Lawyer at our
              firm, developing a plan-of-action designed to achieve your best
              interests and keep you and your loved ones together becomes our
              first order of business.
            </p>
          </article>
          <div className="card mx-auto w-full max-w-md shadow-sm">
            <figure className="overflow-hidden rounded-3xl">
              <img
                src={moumtain}
                alt="Mountain"
                className="
          w-full
          h-auto
          rounded-3xl
          shadow-xl
          transition-transform
          duration-500
          hover:scale-105
        "
              />
            </figure>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 bg-base-100 px-6 pb-32 pt-10 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-40">
          <div className="divider divider-accent max-w-6xl"></div>
          <ProfArt
            headerTitle="Stephanie Willison"
            paragraphs={stephInfo}
            person="steph.png"
          />

          <ProfArt
            headerTitle="Tyson Marsh"
            paragraphs={tysonInfo}
            person="tyson.png"
          />
          <div className="flex flex-col items-center justify text-primary">
            <article className="prose prose-base max-w-6xl mx-auto text-lg">
              <h3 className="text-primary text-center">
                What is the Role of an Attorney in a Family Law Case?
              </h3>
              <p>
                Family lawyers commonly handle cases involving divorces, marital
                agreements, and child custody and support. These cases are all
                complex, both legally and emotionally. An experienced attorney
                could work with a party to protect their rights and work towards
                agreements that are fair for all involved.
              </p>
              <p>
                Proactive couples may benefit from an attorney’s help drafting
                prenuptial or postnuptial agreements to avoid potential conflict
                in the future. As these legal matters can be highly emotional,
                it is often helpful to have a legal professional present who
                could offer advice and counsel on difficult decisions.
              </p>
              <p>
                Additionally, legal and courtroom processes are technical and
                often confusing. Hiring a family attorney in Prescott could help
                an individual better protect their interests and rights.
              </p>
            </article>
          </div>
          <div className="flex flex-col items-center justify text-primary">
            <article className="prose prose-base max-w-6xl mx-auto text-lg">
              <h3 className="text-primary text-center">
                Family Law Cases Involving Children in Prescott Case?
              </h3>
              <p>
                The most significant consideration in family law cases involving
                children is custody. Custody may come into play in situations
                where parents are going through a divorce or were never married.
                When it comes to who should have custody of minor children, the
                court looks at the child’s interests above those of either
                parent. Some issues that courts consider will include:
              </p>
              <ul>
                <li>The mental and physical health of the parents</li>
                <li>The child’s relationship with each parent</li>
                <li>
                  The ability of the parents to provide a stable environment
                </li>
                <li>
                  Whether the parents engaged in any acts of domestic abuse or
                  violence
                </li>
                <li>
                  How well-adjusted the child is to their home and their
                  surrounding community
                </li>
              </ul>
              <p>
                Courts might appoint a representative for the child, known as a
                Guardian ad litem (GAL). The GAL represents the child, not
                either of the parents, and will work to determine the child’s
                best interests, especially in cases where the parents strongly
                disagree.
              </p>
              <p>
                Courts will also work to set child support in cases involving
                children. The state law details child support obligations in
                ARS. Section 25-501(A). A court will not have the authority to
                set these amounts as it sees fit but will need to follow the
                statute unless there is a solid argument for a deviation. A
                Prescott attorney could provide essential legal guidance on
                these family law matters.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-base-100 px-6 pb-32 pt-10 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-40">
          <div className="relative flex flex-col border border-accent px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-7">
            <article className="prose prose-base max-w-6xl mx-auto text-lg">
              <h2 className="text-primary"> - About Our Founding Lawyer</h2>
              <h3>Standing Up for What Matters Most</h3>
              <p className="mb-6">
                We offer comprehensive guidance through a variety of family law
                and estate planning cases, from divorce and child custody to
                paternity and property division, to planning for your future
                with a will or trust. Our level of experience in the area of
                family law surpasses that of many other attorneys in the
                Prescott area. Families turn to Willison Law, PC when they need
                further legal assistance to help them protect what matters most
                to them, whether it be their parental rights, child or spousal
                support, or wealth preservation. By working with a Prescott
                Family Lawyer at our firm, developing a plan-of-action designed
                to achieve your best interests and keep you and your loved ones
                together becomes our first order of business.
              </p>
            </article>
            <Link
              to="/about-us"
              className="
                btn
                btn-outline
                btn-accent
                mt-6
                w-full
                text-primary
                md:ml-auto
                md:w-auto
              "
            >
              Meet Attorney Stephanie Willison
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
