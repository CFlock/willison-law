export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pt-36 pb-24">
      <article className="prose prose-base mx-auto text-lg">
        <h1 className="text-primary text-4xl font-semibold tracking-tight">Blog</h1>
        <div className="mt-0.5 h-1 w-24 rounded-full bg-accent" />
        <p className="mt-6 text-lg text-base-content/80">
          Browse the latest legal insights and updates from Willison Law, PC.
        </p>
      </article>

      <section className="mt-10 space-y-8">
        <article className="rounded-3xl border border-base-200 bg-base-100 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Understanding Child Custody in Arizona</h2>
          <p className="mt-4 text-base leading-relaxed">
            Learn how courts approach custody decisions and what factors matter most.
          </p>
        </article>

        <article className="rounded-3xl border border-base-200 bg-base-100 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">What to Expect During Divorce Mediation</h2>
          <p className="mt-4 text-base leading-relaxed">
            Get practical advice for preparing your case and reaching a fair settlement.
          </p>
        </article>
      </section>
    </main>
  );
}
