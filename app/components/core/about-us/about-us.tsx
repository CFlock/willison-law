import React from "react";
import { ProfArt } from "./prof-art";
import { Banner } from "../banner/banner";
import { MoreAbout } from "./more-about-us";

export function AboutUs() {
  const stephInfo = [
    "If you need assistance with a complex family law matter, Prescott family lawyer Stephanie Willison is here to help. With an extensive legal background encompassing both criminal defense and family law, Stephanie has the experience and skill to help you navigate the legal process. As the founding attorney of Willison Law, PC, she focuses her practice on all aspects of family law, including divorce, child custody, spousal maintenance, mediation, and more. She can even help you with sensitive matters, such as paternity disputes, domestic violence, and grandparent rights. With every case she takes on, Stephanie strives to provide her clients with compassionate, personalized legal services tailored to their unique goals.",
    "Stephanie earned her Bachelor of Science in Communication from the University of Texas at Austin before going on to attend law school at the James E. Rogers College of Law at the University of Arizona. After graduating law school with her J.D. in 2003, Stephanie served as a prosecutor for Yavapai and Maricopa County. In this role, her practice focused on crimes against children, which instilled in her a strong sense of the value of family.",
  ];

  const tysonInfo = [
    "Tyson Marsh is an Arizona native with a diverse professional background, having served in the U.S. Navy and then worked as a structural welder and millwright. Tyson attended Yavapai College, earning his AAS Degree in Paralegal Studies in 2020, and earned his Bachelor of Science in Justice Studies, graduating cum laude from Arizona State University in 2022. He has worked at several law firms in the Prescott area as a paralegal, specializing in family law. Tyson has been with Willison Law since 2023 and has earned his Legal Paraprofessional license.",
    "Tyson’s family law experience enables him to represent clients in a broad range of family law matters including legal separation, divorce, modification and enforcement of court orders, child support and spousal maintenance, and child custody and parenting time issues. Tyson supports his clients through every stage – from settlement negotiations through trial litigation. He is dedicated to helping his clients through one of the most challenging and emotionally charged legal situations a person could experience.",
  ];
  return (
    <main>
      <Banner/>
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
        <MoreAbout/>
      </div>
    </main>
  );
}

export default AboutUs;
