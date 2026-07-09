import * as React from "react";

const reviews = [
  {
    text: "Stephanie was a pleasure to work with every time I left her office I felt better she’s very professional knowledgeable and prompt I’d recommend her without hesitation.",
    author: "Dave",
  },
  {
    text: "Stephanie Willison is the best attorney in Prescott! We had a tough hurdle to overcome in our case but that didn’t deter her. The original case was 4+ years old before she became involved. She took the time to review the case from the beginning not missing anything. She was so thorough in explaining the difficulties and possible outcomes of the case that we felt completely confident with our decision to ask her to handle our case after our initial meeting with her. She was even more amazing during the trial! Without Stephanie Willison we wouldn’t be celebrating a win today!",
    author: "Ginger M.",
  },
  {
    text: "Stephanie is extremely empathetic and sympathetic to the needs of her clients and wants only the best for them.\n\nOver the course of my career, I have had alot of interaction with attorneys both inside and outside of the courtroom.\n\nWillison Law firms prices are great for the services and skills that Stephanie renders.\n\nI would absolutely recommend Stephanie Willison to anyone in need of a great litigator.",
    author: "Jason K.",
  },
  {
    text: "Fair, professional and effective. Child custody case. She helped us get half time with the child. The previous order by the same Judge was every other weekend.\n\nIt was the exact result that we said that we wanted during the first consultation.\n\nThank you for your help!",
    author: "Shawn T.",
  },
  {
    text: "I am currently working on reaching the final details of my divorce agreement to file with the court. Ms. Willison represents my husband. At this point, Ms. Willison has been professional, courteous, and fair with regards to this case. The only reason I gave her a “4 Star Rating,” is that my case is not complete. I would recommend Ms. Willison if you are looking for a divorce attorney.",
    author: "Kim S.",
  },
  {
    text: "Stephanie was able to get to the point on everything very quickly. I like the way that each service is billed with a separate fee, so you know what you are getting for your money and how much each service cost.",
    author: "Nora C.",
  },
  {
    text: "Stephanie has for years been a fantastic legal resourse for me and for my family!",
    author: "Jim D.",
  },
  {
    text: "Wonderful place. The office is warm and inviting, and Stephanie is very kind, working well with all age groups in every imaginable situation.",
    author: "Brietta A.",
  },
  {
    text: "Stephanie is a very dedicated person to her community through her years of service in local Girl Scouts and in her passion for family law.",
    author: "Katrina D.",
  },
  {
    text: "Stephanie is fantastic, she is outright honest and truly puts full effort into the case, if I need a family law attorney again I will definitely without hesitation call her again she made things so much easier and offered me much guidance on what I needed to do even after her representation thank you so much Stephanie!",
    author: "Tyler O.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pt-36 pb-24">
      <article className="prose prose-base mx-auto text-lg">
        <h1 className="text-primary text-4xl font-semibold tracking-tight">Testimonials</h1>
        <div className="mt-0.5 h-1 w-24 rounded-full bg-accent" />

        <div className="mt-10 grid gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="card bg-base-100 shadow-sm border border-base-200">
              <div className="card-body">
                <blockquote className="mb-4 text-base whitespace-pre-line">{r.text}</blockquote>
                <div className="card-actions justify-end">
                  <span className="text-sm font-semibold text-primary">- {r.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
