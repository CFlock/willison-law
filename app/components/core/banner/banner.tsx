import React from "react";
import { getImageUrl } from "../../../utils";

export function Banner() {
  return (
    <section className="relative mb-16 h-87.5 w-full overflow-hidden">
      <img
        src={getImageUrl("about-banner.png")}
        alt="About banner"
        className="h-full w-full object-cover"
      />

      {/* Shared container */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>
    </section>
  );
}
