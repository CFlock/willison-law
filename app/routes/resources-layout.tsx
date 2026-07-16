import { Outlet } from "react-router";

export default function ResourcesLayout() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pt-36 pb-24">
      <article className="prose prose-base mx-auto text-lg">
        <h1 className="text-primary text-4xl font-semibold tracking-tight">
          Resources
        </h1>
        <div className="mt-0.5 h-1 w-24 rounded-full bg-accent" />
        <p className="mt-6 text-lg text-base-content/80">
          Helpful resources for families navigating divorce, custody, and planning.
        </p>
      </article>

      <section className="mt-12">
        <Outlet />
      </section>
    </main>
  );
}
