import React from "react";
import { ProfArt } from "./prof-art";
import { Banner } from "../banner/banner";
import { MoreAbout } from "./more-about-us";

export function AboutUs() {
  return (
    <main>
      <div className="mx-auto w-full max-w-6xl px-6 grid gap-24 pt-36">
        <MoreAbout/>
      </div>
    </main>
  );
}

export default AboutUs;
