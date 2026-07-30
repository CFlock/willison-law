export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pt-36 pb-24">
      <article className="prose prose-base mx-auto text-lg">
        <div className="flex flex-col items-start gap-1.5">
          <h1 className="!mb-0 text-primary text-4xl font-semibold tracking-tight">
            Parent Planning Guide
          </h1>
          <div className="h-1 w-24 rounded-full bg-accent" />
        </div>
        <p className="mt-6 text-lg text-base-content/80">
          A step-by-step guide to help parents prepare for custody and family law matters.
        </p>
      </article>

      <section className="mt-10 space-y-8">
        <article className="rounded-3xl border border-base-200 bg-base-100 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Create a Parenting Plan</h2>
          <p className="mt-4 text-base leading-relaxed">
            Learn how to structure parenting time, decision-making, and communication.
          </p>
        </article>

        <article className="rounded-3xl border border-base-200 bg-base-100 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Know Your Rights and Responsibilities</h2>
          <p className="mt-4 text-base leading-relaxed">
            Understand the legal obligations that affect custody, support, and family finances.
          </p>
        </article>
      </section>
    </main>
  );
}
