import React from "react"
import { useTranslation } from "react-i18next"
import { trackEvent } from "../lib/analytics"

const ContactUs = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [reason, setReason] = React.useState("General")
  const [investorDetails, setInvestorDetails] = React.useState("")
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      className="py-16 bg-epsi-bg-dark text-white border-t border-slate-900/40"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          {t("contactUs.title", "Contact us")}
        </h2>
        <p className="text-sm text-slate-300 text-center mb-8">
          {t(
            "contactUs.subtitle",
            "Share a bit about who you are and how we can help — whether you are a customer, partner, or investor.",
          )}
        </p>
        <form
          action="https://formspree.io/f/xleybrwj"
          method="POST"
          className="space-y-4"
          onSubmit={() =>
            trackEvent("contact_form_submit", {
              reason,
            })
          }
        >
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-slate-100 mb-1"
            >
              {t("contactUs.reason", "Reason for contacting us")}
            </label>
            <select
              id="reason"
              name="reason"
              className="w-full rounded-md border border-slate-600 bg-transparent px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-epsi-secondary focus:border-epsi-secondary"
              value={reason}
              onChange={(e) => {
                const next = e.target.value
                setReason(next)
                trackEvent("contact_reason_change", { reason: next })
              }}
            >
              <option value="General">
                {t("contactUs.reasonGeneral", "General")}
              </option>
              <option value="Partnership">
                {t("contactUs.reasonPartnership", "Partnership")}
              </option>
              <option value="Investor">
                {t("contactUs.reasonInvestor", "Investor")}
              </option>
              <option value="Support">
                {t("contactUs.reasonSupport", "Support")}
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-100 mb-1"
            >
              {t("contactUs.label1")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              min={6}
              className="w-full rounded-md border border-slate-600 bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-epsi-secondary focus:border-epsi-secondary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {reason === "Investor" && (
            <div>
              <label
                htmlFor="investorDetails"
                className="block text-sm font-medium text-slate-100 mb-1"
              >
                {t(
                  "contactUs.investorDetails",
                  "Fund name / ticket size / profile link (optional)",
                )}
              </label>
              <input
                type="text"
                id="investorDetails"
                name="investorDetails"
                className="w-full rounded-md border border-slate-600 bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-epsi-secondary focus:border-epsi-secondary"
                value={investorDetails}
                onChange={(e) => setInvestorDetails(e.target.value)}
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-100 mb-1"
            >
              {t("contactUs.label2")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-slate-600 bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-epsi-secondary focus:border-epsi-secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-100 mb-1"
            >
              {t("contactUs.label3")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full rounded-md border border-slate-600 bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-epsi-secondary focus:border-epsi-secondary"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md bg-epsi-secondary px-4 py-2.5 text-sm font-semibold text-epsi-bg-dark shadow-sm hover:bg-amber-400 transition-colors"
          >
            {t("contactUs.button")}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
