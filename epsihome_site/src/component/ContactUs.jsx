import React from "react";

const ContactUs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <section id="contact" className="contact h-screen bg-white ">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form
          action="https://formspree.io/f/mrgvvzwv"
          method="POST"
          // onSubmit={handleSubmit}
          className="w-full max-w-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="text-[#030303] block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-gray-700 block mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="form-control w-full"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
