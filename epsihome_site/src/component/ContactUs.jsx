import React from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const {t} = useTranslation()

  return (
    <section id="contact" className="contact pt-6 min-h-screen bg-white ">
      <h1 className="text-3xl text-center my-4 text-gray-800 uppercase font-bold">
        {t("contactUs.title")}
      </h1>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form
          action="https://formspree.io/f/xleybrwj"
          method="POST"
          // onSubmit={handleSubmit}
          className="w-full max-w-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="text-[#030303] block mb-2">
              {t("contactUs.label1")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              min={6}
              className="form-control w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 block mb-2">
              {t("contactUs.label2")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-control w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-gray-700 block mb-2">
              {t("contactUs.label3")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="form-control w-full"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn bg-gray-600 btn-primary w-full">
            {t("contactUs.button")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
