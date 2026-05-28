import * as React from "react";
import { ProfArt } from "../about-us/prof-art";

export function Welcome() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progress = Math.min(scrollY / 500, 1);

  const scale = 1.25 - progress * 0.75;
  const opacity = 1 - progress;
  const translateY = -progress * 120;

  const stephInfo = [
    "If you need assistance with a complex family law matter, Prescott family lawyer Stephanie Willison is here to help. With an extensive legal background encompassing both criminal defense and family law, Stephanie has the experience and skill to help you navigate the legal process. As the founding attorney of Willison Law, PC, she focuses her practice on all aspects of family law, including divorce, child custody, spousal maintenance, mediation, and more. She can even help you with sensitive matters, such as paternity disputes, domestic violence, and grandparent rights. With every case she takes on, Stephanie strives to provide her clients with compassionate, personalized legal services tailored to their unique goals.",

    "Stephanie earned her Bachelor of Science in Communication from the University of Texas at Austin before going on to attend law school at the James E. Rogers College of Law at the University of Arizona. After graduating law school with her J.D. in 2003, Stephanie served as a prosecutor for Yavapai and Maricopa County. In this role, her practice focused on crimes against children, which instilled in her a strong sense of the value of family.",
  ];

  const tysonInfo = [
    "Tyson Marsh is an Arizona native with a diverse professional background, having served in the U.S. Navy and then worked as a structural welder and millwright. Tyson attended Yavapai College, earning his AAS Degree in Paralegal Studies in 2020, and earned his Bachelor of Science in Justice Studies, graduating cum laude from Arizona State University in 2022. He has worked at several law firms in the Prescott area as a paralegal, specializing in family law. Tyson has been with Willison Law since 2023 and has earned his Legal Paraprofessional license.",

    "Tyson’s family law experience enables him to represent clients in a broad range of family law matters including legal separation, divorce, modification and enforcement of court orders, child support and spousal maintenance, and child custody and parenting time issues. Tyson supports his clients through every stage – from settlement negotiations through trial litigation. He is dedicated to helping his clients through one of the most challenging and emotionally charged legal situations a person could experience.",
  ];

  return (
    <section className="space-y-40">
      {/* Hero */}
      <section className="relative h-[140vh]">
        {/* Sticky Hero */}
        <div className="sticky top-0 flex h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-12">
          <div className="flex w-full -translate-y-8 justify-center">
            <div
              className="origin-center transition-transform duration-75 ease-out"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity,
              }}
            >
              <div className="inline-flex border-2 border-accent/70 px-12 py-8">
                <span
                  className="text-rotate text-7xl font-light tracking-[0.08em] text-primary md:text-8xl"
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

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-500"
            style={{
              opacity: 1 - progress * 2,
              transform: `translateX(-50%) translateY(${progress * 20}px)`,
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6 animate-pulse text-primary/90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

              <div className="h-12 w-px bg-accent/90"></div>
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
