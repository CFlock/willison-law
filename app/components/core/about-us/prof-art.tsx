import React from "react";
import { getImageUrl } from "../../../utils";

type ProfArtProps = {
  headerTitle: string;
  paragraphs: string[];
  person: string;
};

export function ProfArt({ headerTitle, paragraphs, person }: ProfArtProps) {
  return (
    <section className="flex flex-col md:flex-row gap-6 pb-4">
      <article className="flex-1">
        <h3 className="pb-4 text-2xl font-bold text-gray-900">{headerTitle}</h3>

        <ul className="space-y-4">
          {paragraphs.map((item, index) => (
            <li key={index} className="leading-7 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </article>
      <img
        src={getImageUrl(person)}
        alt="Stephanie Willison"
        className="w-full md:w-64 min-w-55 object-cover rounded-xl"
      />
    </section>
  );
}
