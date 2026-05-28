import * as React from "react";
import { ProfArt } from "../about-us/prof-art";

export function Welcome() {
  const [scrolled, setScrolled] = React.useState(false);

  const stephInfo = [
    "If you need assistance with a complex family law matter, Prescott family lawyer Stephanie Willison is here to help. With an extensive legal background encompassing both criminal defense and family law, Stephanie has the experience and skill to help you navigate the legal process. As the founding attorney of Willison Law, PC, she focuses her practice on all aspects of family law, including divorce, child custody, spousal maintenance, mediation, and more. She can even help you with sensitive matters, such as paternity disputes, domestic violence, and grandparent rights. With every case she takes on, Stephanie strives to provide her clients with compassionate, personalized legal services tailored to their unique goals.",

    "Stephanie earned her Bachelor of Science in Communication from the University of Texas at Austin before going on to attend law school at the James E. Rogers College of Law at the University of Arizona. After graduating law school with her J.D. in 2003, Stephanie served as a prosecutor for Yavapai and Maricopa County. In this role, her practice focused on crimes against children, which instilled in her a strong sense of the value of family.",
  ];

  const tysonInfo = [
    "Tyson Marsh is an Arizona native with a diverse professional background, having served in the U.S. Navy and then worked as a structural welder and millwright. Tyson attended Yavapai College, earning his AAS Degree in Paralegal Studies in 2020, and earned his Bachelor of Science in Justice Studies, graduating cum laude from Arizona State University in 2022. He has worked at several law firms in the Prescott area as a paralegal, specializing in family law. Tyson has been with Willison Law since 2023 and has earned his Legal Paraprofessional license.",

    "Tyson’s family law experience enables him to represent clients in a broad range of family law matters including legal separation, divorce, modification and enforcement of court orders, child support and spousal maintenance, and child custody and parenting time issues. Tyson supports his clients through every stage – from settlement negotiations through trial litigation. He is dedicated to helping his clients through one of the most challenging and emotionally charged legal situations a person could experience.",
  ];

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 120);

      // Reset timer every scroll
      clearTimeout(timeout);

      // If user hasn't scrolled far enough to reveal content,
      // gently return them to the top after a pause
      if (y > 0 && y < 1000) {
        timeout = setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 1200);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="space-y-40">
      {/* Hero */}
      <section className="relative h-[140vh]">
        {/* Sticky Hero */}
        <div className="sticky top-0 flex h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-12">
          <div className="flex w-full -translate-y-8 justify-center">
            <div
              className={`
                origin-center
                transition-all
                duration-500
                ease-[cubic-bezier(0.77,0,0.175,1)]
                ${
                  scrolled
                    ? "-translate-y-24 scale-90 opacity-70"
                    : "translate-y-0 scale-125 opacity-100"
                }
              `}
            >
              <div
                className={`
                  inline-flex
                  border-2
                  border-accent/70
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.77,0,0.175,1)]
                  ${scrolled ? "px-8 py-4" : "px-12 py-8"}
                `}
              >
                <span
                  className={`
                    text-rotate
                    font-light
                    tracking-[0.08em]
                    text-primary
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.77,0,0.175,1)]
                    ${scrolled ? "text-5xl" : "text-7xl md:text-8xl"}
                  `}
                  style={{ "--duration": "9s" } as React.CSSProperties}
                >
                  <span className="justify-items-start">
                    <span>WISDOM.</span>
                    <span>COMPASSION.</span>
                    <span>RESULTS.</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="space-y-40 px-12 pb-32">
        <div className="mx-auto w-full max-w-6xl px-6 grid gap-24">
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
        </div>
      </section>
    </section>
  );
}
