import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/contact-us";
import { buildPageMeta } from "../seo";

const LAWMACTICS_SCRIPT_ID = "lm-embedded-script";
const LAWMACTICS_TARGET_ID = "lm-embedded-target";
const LAWMACTICS_SCRIPT_SRC = "https://navi.lawmatics.com/intake.min.js";
const LAWMACTICS_SITE_KEY = "42b9f80b-6c13-42e2-9feb-83ee5d074dba";
const LAWMACTICS_SCRIPT_TTL = 864e5;
const LAWMACTICS_WIDGET_SELECTOR = "iframe[src*='lawmatics.com/forms/embedded']";
const LAWMACTICS_FORM_SELECTOR = "form, input, button, textarea, select";
const LAWMACTICS_BUTTON_SELECTOR =
  "button, input[type='submit'], input[type='button'], a, [role='button'], .lm-button, .button, .submit, .submit-button";
const LAWMACTICS_LOAD_ERROR =
  "Unable to load the contact form. Please refresh the page or contact us directly.";

declare global {
  interface Window {
    lm_intake?: (...args: any[]) => void;
  }
}

function getThemeColor(variableName: string, fallback: string) {
  if (typeof document === "undefined") {
    return fallback;
  }

  return document.documentElement.style.getPropertyValue(variableName).trim() || fallback;
}

export function getLawmaticsPayload() {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      source: "website",
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    source: params.get("source") ?? "website",
  };
}

export function meta({}: Route.MetaArgs) {
  return buildPageMeta({
    title: "Contact a Prescott Family Law Attorney",
    description:
      "Schedule a consultation with Willison Law, PC for divorce, child custody, support, mediation, and estate planning guidance.",
    path: "/contact-us",
  });
}

export default function Page() {
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const loadedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container || loadedRef.current) return;
    loadedRef.current = true;

    const config = getLawmaticsPayload();
    const targetId = LAWMACTICS_TARGET_ID;
    const primaryColor = getThemeColor("--color-primary", "#0c306e");
    const primaryContentColor = getThemeColor("--color-primary-content", "#ffffff");
    const widgetRegion = container.parentElement ?? container;

    const applyWidgetStyles = () => {
      container.style.minHeight = "0";
      container.style.height = "auto";
      container.style.padding = "0";
      container.style.margin = "0";

      container.querySelectorAll<HTMLElement>(LAWMACTICS_BUTTON_SELECTOR).forEach((element) => {
        element.style.backgroundColor = primaryColor;
        element.style.borderColor = primaryColor;
        element.style.color = primaryContentColor;
        element.style.background = primaryColor;
        element.style.backgroundImage = "none";
        element.style.boxShadow = "none";
        element.style.textShadow = "none";
        element.style.borderRadius = "0.25rem";
        element.style.borderStyle = "solid";
      });

      container.querySelectorAll<HTMLElement>("*").forEach((element) => {
        if (!element.style.marginBottom) {
          const computed = getComputedStyle(element).marginBottom;
          if (computed && computed !== "0px") {
            element.style.marginBottom = "0";
          }
        }
        if (!element.style.paddingBottom) {
          const computed = getComputedStyle(element).paddingBottom;
          if (computed && computed !== "0px") {
            element.style.paddingBottom = "0";
          }
        }
      });
    };

    const bootstrap = () => {
      const wrapper = `!function(e,t,n,a,s,c,i){if(!e[s]){i=e[s]=function(){i.process?i.process.apply(i,arguments):i.queue.push(arguments)},i.queue=[],i.t=1*new Date;var o=t.createElement(n);o.async=1,o.src=a+"?t="+Math.ceil(new Date/c)*c;var r=t.getElementsByTagName(n)[0];r.parentNode.insertBefore(o,r)}}(window,document,"script","${LAWMACTICS_SCRIPT_SRC}","lm_intake",${LAWMACTICS_SCRIPT_TTL}),lm_intake("${LAWMACTICS_SITE_KEY}","${targetId}",${JSON.stringify(config)});`;

      const script = document.createElement("script");
      script.id = LAWMACTICS_SCRIPT_ID;
      script.type = "text/javascript";
      script.textContent = wrapper;
      script.onerror = () => {
        setIsLoading(false);
        setLoadError(LAWMACTICS_LOAD_ERROR);
      };
      document.head.appendChild(script);

      return script;
    };

    const isWidgetLoaded = () => {
      if (!widgetRegion) return false;
      const hasEmbedIframe = Boolean(widgetRegion.querySelector(LAWMACTICS_WIDGET_SELECTOR));
      const hasFormFields = Boolean(widgetRegion.querySelector(LAWMACTICS_FORM_SELECTOR));
      return hasEmbedIframe || hasFormFields;
    };

    const updateLoadingState = () => {
      if (isWidgetLoaded()) {
        setIsLoading(false);
      }
    };

    const script = bootstrap();
    const observer = new MutationObserver(() => {
      applyWidgetStyles();
      updateLoadingState();
    });
    observer.observe(widgetRegion, { childList: true, subtree: true });
    applyWidgetStyles();
    updateLoadingState();

    const intervalId = window.setInterval(() => {
      applyWidgetStyles();
      updateLoadingState();
    }, 200);

    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
      script.remove();
      container.innerHTML = "";
    };
  }, []);

  return (
    <main className="mx-auto flex flex-col w-full max-w-6xl gap-12 px-6 pt-36 pb-24">
      <article className="prose prose-base mx-auto text-lg">
        <div className="flex flex-col items-start gap-1.5">
          <h1 className="!mb-0 text-primary text-4xl font-semibold tracking-tight">Contact Us</h1>
          <div className="h-1 w-24 rounded-full bg-accent" />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-primary text-center pb-0">
          Choose the Right Family Law Attorney to Represent You
        </h2>
        <h2 className="text-xl sm:text-2xl font-semibold text-primary text-center pb-4">
          & Your Loved Ones
        </h2>
        <p>
          Going through a divorce? Ready to get your estate plan in place? Pursuing
          parental custody? Have you had a death in the family and need to update
          your plan? Seeking child or spousal support to relieve financial hardship?
          Attorney Stephanie Willison looks forward to hearing from you. Our founding
          lawyer has the qualifications you are looking for in a family law advocate
          fit to handle your case.
        </p>
      </article>

      <section className="w-full max-w-2xl mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-8">
          <legend className="fieldset-legend text-lg font-semibold">Request a Consultation</legend>

          <p className="mb-4 text-sm text-base-content/70">
            Tell us about your situation and a member of our team will contact you.
          </p>

          <div className="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm">
            <div
              id="lm-embedded-target"
              ref={widgetRef}
              className="lawmatics-widget"
            />

            {isLoading && !loadError ? (
              <div className="flex h-full items-center justify-center text-base-content/50">
                Loading contact form...
              </div>
            ) : null}

            {loadError ? (
              <div className="rounded-box border border-error bg-error/10 p-4 text-sm text-error">
                {loadError}
              </div>
            ) : null}
          </div>

          <p className="mt-4 text-xs text-base-content/60">
            Submitting this form does not create an attorney-client relationship.
          </p>
        </fieldset>
      </section>
    </main>
  );
}
