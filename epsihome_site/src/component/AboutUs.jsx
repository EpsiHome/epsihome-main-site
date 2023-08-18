import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="about-us h-screen bg-white justify-center">
      <h1 className="text-3xl text-center my-4 text-gray-800 uppercase font-bold">about us</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700 mb-4">
            We are a proptech company that provides a suite of services to help
            people buy, sell, and rent homes. Our mission is to make the real estate
            process more efficient and transparent for everyone involved.
          </p>
          <p className="text-gray-700 mb-4">
            We believe that everyone should have access to affordable housing, and
            we are committed to using our technology to make that a reality. We are
            also passionate about creating a more sustainable real estate industry,
            and we are working to implement innovative solutions to reduce our
            environmental impact.
          </p>
        </div>
        <div>
          <ul className="list-disc mb-4">
            <li className="text-gray-700">
              We provide a platform for buyers and sellers to connect with each
              other.
            </li>
            <li className="text-gray-700">
              We offer a variety of tools to help people find the right home for
              their needs.
            </li>
            <li className="text-gray-700">
              We provide transparent pricing and terms so that people can make
              informed decisions.
            </li>
            <li className="text-gray-700">
              We are committed to customer service and satisfaction.
            </li>
            <li className="text-gray-700">
              We are committed to helping develop our economy by providing
              employment and revolutionizing the way real estate related activities
              are carried out in Cameroon and Africa.
            </li>
            <li className="text-gray-700">
              We offer real estate investment tools to help people grow their
              wealth.
            </li>
            <li className="text-gray-700">
              We provide mortgages to help people own their own homes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
