import React from "react";
import { getImageUrl } from "../../../utils";

type ProfArtProps = {
  headerTitle: string;
  paragraphs: string[];
  person: string;
};

export function ProfArt({ headerTitle, paragraphs, person }: ProfArtProps) {
  return (
    <section className="flex flex-col md:flex-row items-start gap-14 pb-8">
      <article className="flex-1 max-w-3xl prose prose-slate prose-base prose-headings:underline prose-ul:list-none">
        <h3 className="pb-4 text-2xl font-bold text-gray-900">{headerTitle}</h3>

        <ul className="space-y-4">
          {paragraphs.map((item, index) => (
            <li key={index} className="leading-7">
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </article>

      <div className="relative shrink-0 w-full md:w-72">
        {/* outlined square behind */}
        <div className="absolute top-5 left-5 h-full w-full border-2 border-accent/40 rounded-xl" />

        {/* actual image */}
        <img
          src={getImageUrl(person)}
          alt="Stephanie Willison"
          className="relative z-10 w-full h-auto object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
