import * as React from "react";

export interface MoreAbout {}

export function MoreAbout() {
  return (
    <section className="flex flex-row gap-10 pb-4 align-middle">
      <section className="flex flex-col gap-y-6 [&_h4]:text-blue-900 [&_h5]:text-blue-900">
        <h3 className="text-2xl font-bold text-gray-900">
          About Attorney Stephanie Willison
        </h3>

        <div className="flex flex-col gap-1">
          <h4>Education</h4>
          <p>
            {" "}
            University of Arizona James E. Rogers College of Law: J.D.;
            2003{" "}
          </p>
          <p> University of Texas at Austin: B.S. in Communication </p>
        </div>

        <div className="flex flex-col gap-1">
          <h4>Professional Memberships</h4>
          <p> Arizona State Bar Association, Family Law </p>
          <p> Yavapai County Bar Association </p>
        </div>

        <div className="flex flex-col gap-1">
          <h4>Awards & Accolades</h4>
          <p> Avvo Rating in Family Law </p>
          <p>
            {" "}
            American Institute of Family Law Attorneys™ 10 Best in Client
            Satisfaction for 2017{" "}
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-items-center gap-y-8 [&_h4]:text-blue-900 [&_h5]:text-blue-900">
        <h3 className="text-2xl font-bold text-gray-900">
          When Prescott Needs Our Firm, We're There.
        </h3>

        <div className="flex flex-col gap-1">
          <p>
            "Stephanie is a knowledgeable and respected attorney in Northern
            Arizona."
          </p>
          <h5> Criminal Defense Attorney </h5>
        </div>

        <div className="flex flex-col gap-1">
          <p>
            "I would like to thank you and tell you how much we appreciate you
            defending our boy."
          </p>
          <h5> Client Mother </h5>
        </div>

        <div className="flex flex-col gap-1">
          <p>
            "I endorse this lawyer. Stephanie is a former prosecutor with great
            experience and knowledge."
          </p>
          <h5>  Personal Injury Lawyer  </h5>
        </div>
      </section>
    </section>
  );
}
