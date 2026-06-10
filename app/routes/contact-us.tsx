export default function Page() {
  return (
    <main className="mx-auto flex flex-col w-full max-w-6xl gap-12 px-6 pt-36 pb-24">
      <article className="prose prose-base mx-auto text-lg">
        <h1 className="text-primary text-4xl font-semibold tracking-tight">
          Contact Us
        </h1>
        <div className="mt-0.5 h-1 w-24 rounded-full bg-accent" />
        <h2 className="text-xl sm:text-2xl font-semibold text-primary text-center pb-4">
          Choose the Right Family Law Attorney to Represent You & Your Loved
          Ones
        </h2>
        <p>
          Going through a divorce? Ready to get your estate plan in place?
          Pursuing parental custody? Have you had a death in the family and need
          to update your plan? Seeking child or spousal support to relieve
          financial hardship? Attorney Stephanie Willison looks forward to
          hearing from you. Our founding lawyer has the qualifications you are
          looking for in a family law advocate fit to handle your case.
        </p>
      </article>
      <form id="contact-form">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-2xl mx-auto border p-8">
          <legend className="fieldset-legend text-lg font-semibold">
            Request a Consultation
          </legend>

          <p className="mb-4 text-sm text-base-content/70">
            Tell us about your situation and a member of our team will contact
            you.
          </p>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="label">First Name *</label>
              <input
                type="text"
                name="firstName"
                className="input w-full"
                placeholder="First Name"
                required
              />
            </div>

            <div>
              <label className="label">Last Name *</label>
              <input
                type="text"
                name="lastName"
                className="input w-full"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Contact Info */}
          <label className="label mt-4">Email *</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email Address"
            required
          />

          <label className="label mt-4">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            className="input w-full"
            placeholder="(928) 555-1234"
            required
          />

          <p className="mt-2 text-[11px] leading-5 text-base-content/60">
            By providing your phone number, you consent to receive automated
            informational and conversational SMS communications from Lawmatics
            on behalf of WILLISON LAW, P.C. Consent is not a condition of
            service. Message and data rates may apply. Message frequency varies.
            Reply STOP to unsubscribe or HELP for assistance. Privacy Policy •
            Terms of Use.
          </p>

          {/* Type of Case */}
          <label className="label mt-4">Type of Case *</label>
          <select
            name="caseType"
            className="select w-full"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a Case Type
            </option>
            <option value="Divorce">Divorce</option>
            <option value="Child Custody">Child Custody</option>
            <option value="Child Support">Child Support</option>
            <option value="Domestic Violence">Domestic Violence</option>
            <option value="Legal Separation">Legal Separation</option>
            <option value="Paternity">Paternity</option>
            <option value="Grandparents Rights">Grandparents Rights</option>
            <option value="Mediation">Mediation</option>
            <option value="Estate Planning">Estate Planning</option>
            <option value="Trusts">Trusts</option>
            <option value="Wills">Wills</option>
            <option value="Other">Other</option>
          </select>

          {/* Consultation */}
          <label className="label mt-4">
            Would you like to schedule a consultation?
          </label>
          <select
            name="consultationRequested"
            className="select w-full"
            defaultValue=""
          >
            <option value="" disabled>
              Please Select
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Message */}
          <label className="label mt-4">How Can We Help You? *</label>
          <textarea
            name="message"
            className="textarea min-h-36 w-full"
            placeholder="Briefly describe your situation and how we can help."
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary mt-6 w-full md:w-auto"
          >
            Submit Request
          </button>

          <p className="mt-4 text-xs text-base-content/60">
            Submitting this form does not create an attorney-client
            relationship.
          </p>
        </fieldset>
      </form>
    </main>
  );
}
