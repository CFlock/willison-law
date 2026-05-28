import * as React from "react";
import { ProfArt } from "../about-us/prof-art";

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
              <div className="inline-flex border border-accent px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-7">
                <span
                  className="text-rotate text-4xl font-light tracking-[0.08em] text-primary sm:text-5xl md:text-7xl lg:text-8xl"
                  style={
                    {
                      ["--duration" as any]: "6s",
                    } as React.CSSProperties
                  }
                >
                  <span className="justify-items-start">
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
