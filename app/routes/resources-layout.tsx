import { Outlet } from "react-router";

export default function ResourcesLayout() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pt-36 pb-24">
      <article className="prose prose-base mx-auto text-lg">
        <div className="flex flex-col items-start gap-1.5">
          <h1 className="!mb-0 text-primary text-4xl font-semibold tracking-tight">
            Resources
          </h1>
          <div className="h-1 w-24 rounded-full bg-accent" />
        </div>
        <p className="mt-6 text-lg text-base-content/80">
          Helpful resources for families navigating divorce, custody, and planning.
        </p>
      </article>

      <section className="mt-12">
        <Outlet />
      </section>
    </div>
  );
}
