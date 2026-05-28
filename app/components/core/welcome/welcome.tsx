import * as React from "react";
import { ProfArt } from "../about-us/prof-art";

export function Welcome() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Scroll Progress
   */
  const progress = Math.min(scrollY / 500, 1);

  /*
   * Hero Animation
   */
  const heroScale = 1.2 - progress * 0.7;
  const heroOpacity = 1 - progress * 1.15;
  const heroTranslateY = -progress * 140;

  /*
   * Floating Logo
   */
  const logoOpacity = Math.max(1 - progress * 1.1, 0);

  /*
   * Scroll Indicator
   */
  const indicatorOpacity = Math.max(1 - progress * 2, 0);

  const stephInfo = [
    "If you need assistance with a complex family law matter, Prescott family lawyer Stephanie Willison is here to help. With an extensive legal background encompassing both criminal defense and family law, Stephanie has the experience and skill to help you navigate the legal process. As the founding attorney of Willison Law, PC, she focuses her practice on all aspects of family law, including divorce, child custody, spousal maintenance, mediation, and more. She can even help you with sensitive matters, such as paternity disputes, domestic violence, and grandparent rights. With every case she takes on, Stephanie strives to provide her clients with compassionate, personalized legal services tailored to their unique goals.",

    "Stephanie earned her Bachelor of Science in Communication from the University of Texas at Austin before going on to attend law school at the James E. Rogers College of Law at the University of Arizona. After graduating law school with her J.D. in 2003, Stephanie served as a prosecutor for Yavapai and Maricopa County. In this role, her practice focused on crimes against children, which instilled in her a strong sense of the value of family.",
  ];

  const tysonInfo = [
    "Tyson Marsh is an Arizona native with a diverse professional background, having served in the U.S. Navy and then worked as a structural welder and millwright. Tyson attended Yavapai College, earning his AAS Degree in Paralegal Studies in 2020, and earned his Bachelor of Science in Justice Studies, graduating cum laude from Arizona State University in 2022. He has worked at several law firms in the Prescott area as a paralegal, specializing in family law. Tyson has been with Willison Law since 2023 and has earned his Legal Paraprofessional license.",

    "Tyson’s family law experience enables him to represent clients in a broad range of family law matters including legal separation, divorce, modification and enforcement of court orders, child support and spousal maintenance, and child custody and parenting time issues. Tyson supports his clients through every stage – from settlement negotiations through trial litigation. He is dedicated to helping his clients through one of the most challenging and emotionally charged legal situations a person could experience.",
  ];
  return (
    <section>
      {/* Hero Section */}
      <section className="relative h-[160vh]">
        <div className="sticky top-0 flex min-h-svh items-center justify-center overflow-hidden px-6">
          {/* Floating Logo */}
          <div
            className="absolute top-8 left-1/2 z-20"
            style={{
              opacity: logoOpacity,
              transform: `translateX(-50%) translateY(${progress * -20}px)`,
            }}
          >
            <img
              src="/logo.png"
              alt="Willison Law"
              className="h-16 w-auto opacity-90"
            />
          </div>

          {/* Hero Content */}
          <div
            className="origin-center will-change-transform"
            style={{
              transform: `translateY(${heroTranslateY}px) scale(${heroScale})`,
              opacity: heroOpacity,
            }}
          >
            <div className="inline-flex border-2 border-accent shadow-[0_0_40px_rgba(0,0,0,0.03)] px-10 py-6 md:px-14 md:py-8">
              <span
                className="text-rotate font-light tracking-[0.08em] text-primary md:text-8xl text-4xl sm:text-5xl lg:text-8xl"
                style={
                  {
                    "--duration": "6s",
                  } as React.CSSProperties
                }
              >
                <span className="justify-items-start">
                  <span>WISDOM.</span>
                  <span>COMPASSION.</span>
                  <span>RESULTS.</span>
                </span>
              </span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-10 left-1/2"
            style={{
              opacity: indicatorOpacity,
              transform: `translateX(-50%) translateY(${progress * 18}px)`,
            }}
          >
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

              <div className="h-12 w-px bg-accent/80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 bg-base-100 px-6 pb-32 pt-10 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-40">
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
