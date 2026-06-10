import React from "react";

interface BannerProps {
  title: string;
}

export function Banner({ title }: BannerProps) {
  return (
    <section className="relative mt-24 flex h-72 w-full items-center bg-primary">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}