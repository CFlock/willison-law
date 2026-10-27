import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Header from "./components/core/header/header";
import Footer from "./components/core/footer/footer";
import React from "react";
import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE, DEFAULT_TITLE, SITE_NAME, SITE_URL } from "./seo";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_URL}${DEFAULT_IMAGE}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={DEFAULT_TITLE} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}${DEFAULT_IMAGE}`} />

        <Meta />

        <Links />
      </head>

      <body className="flex min-h-screen flex-col bg-base-100 text-base-content antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />

        <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen focus:outline-none">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />

        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  );
}
