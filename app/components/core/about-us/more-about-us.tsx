import * as React from "react";

export interface MoreAboutProps {}

export function MoreAbout() {
  return (
    <section className="flex w-full flex-col gap-8 sm:gap-12 lg:flex-row">
      {/* Left Column */}
      <article className="flex-1 max-w-none prose prose-slate prose-base">
        <section className="flex flex-col gap-y-1 [&_h4]:text-primary [&_h5]:text-primary">
          <h3 className="mb-1 text-xl sm:text-2xl font-bold text-base-content">
            About Attorney Stephanie Willison
          </h3>

          <div className="flex flex-col gap-y-.5">
            <div className="flex flex-col">
              <h4>Education</h4>

              <ul>
                <li>
                  University of Arizona James E. Rogers College of Law: J.D.;
                  2003
                </li>

                <li>University of Texas at Austin: B.S. in Communication</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4>Professional Memberships</h4>

              <ul>
                <li>Arizona State Bar Association, Family Law</li>

                <li>Yavapai County Bar Association</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4>Awards & Accolades</h4>

              <ul>
                <li>Avvo Rating in Family Law</li>

                <li>
                  American Institute of Family Law Attorneys™ 10 Best in Client
                  Satisfaction for 2017
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      {/* Vertical Divider */}
      <div className="hidden lg:flex pt-12 px-2">
        <div className="w-0.5 self-stretch rounded-full bg-accent/40"></div>
      </div>

      {/* Right Column */}
      <article className="flex-1 max-w-none prose prose-slate prose-base">
        <section className="flex flex-col gap-y-2 [&_h4]:text-primary [&_h5]:text-primary">
          <h3 className="mb-1 text-xl sm:text-2xl font-bold text-base-content">
            When Prescott Needs Our Firm, We're There
          </h3>

          <div className="flex flex-col gap-1">
            <div className="flex flex-col">
              <p className="mb-1 leading-relaxed">
                "Stephanie is a knowledgeable and respected attorney in  Northern
                Arizona."
              </p>

              <h5 className="mt-0 text-sm text-primary">
                Criminal Defense Attorney
              </h5>
            </div>

            <div className="flex flex-col gap-0">
              <p className="mb-1 leading-relaxed">
                "I would like to thank you and tell you how much we appreciate
                you defending our boy."
              </p>

              <h5 className="mt-0 text-sm text-primary">Client Mother</h5>
            </div>

            <div className="flex flex-col gap-0">
              <p className="mb-1 leading-relaxed">
                "I endorse this lawyer. Stephanie is a former prosecutor with
                great experience and knowledge."
              </p>

              <h5 className="mt-0 text-sm text-primary">Personal Injury Lawyer</h5>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}
