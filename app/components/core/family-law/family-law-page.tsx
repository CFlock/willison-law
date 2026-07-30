import type { ReactNode } from "react";

interface FamilyLawPageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function FamilyLawPage({ title, description, children }: FamilyLawPageProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pt-36 pb-24">
      <article className="prose prose-base mx-auto text-lg">
        <div className="flex flex-col items-start gap-1.5">
          <h1 className="!mb-0 text-primary text-4xl font-semibold tracking-tight">
            {title}
          </h1>
          <div className="h-1 w-24 rounded-full bg-accent" />
        </div>
        {description && <p className="mt-6">{description}</p>}
        <div className="mt-10 space-y-8 sm:space-y-6">{children}</div>
      </article>
    </main>
  );
}
