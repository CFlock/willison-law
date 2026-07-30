import React from "react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Page, { getLawmaticsPayload } from "./contact-us";

declare global {
  interface Window {
    lm_intake?: (...args: any[]) => void;
  }
}

describe("Contact page", () => {
  const originalHref = window.location.href;

  beforeEach(() => {
    vi.stubGlobal("location", {
      ...window.location,
      search: "",
    });

    document.head.innerHTML = "";
    document.body.innerHTML = "";
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    window.history.replaceState({}, "", originalHref);
  });

  it("renders the contact page content", () => {
    render(<Page />);

    expect(screen.getByRole("heading", { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByText(/request a consultation/i)).toBeInTheDocument();
    expect(screen.getByText(/loading contact form/i)).toBeInTheDocument();
  });

  it("returns default payload values when no URL params are present", () => {
    const payload = getLawmaticsPayload();

    expect(payload).toEqual({
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      source: "website",
    });
  });

  it("parses utm query parameters from the URL search string", () => {
    vi.stubGlobal("location", {
      ...window.location,
      search: "?utm_source=google&utm_medium=cpc&utm_campaign=family-law&source=website",
    });

    expect(getLawmaticsPayload()).toEqual({
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "family-law",
      source: "website",
    });
  });

  it("injects the Lawmatics script into document.head on mount", async () => {
    render(<Page />);

    const injectedScript = document.head.querySelector("script#lm-embedded-script");
    expect(injectedScript).toBeInTheDocument();
    expect(injectedScript).toHaveTextContent("lm_intake");
  });
});
