import SectionTitle from "./SectionTitle";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact container mx-auto py-20" id="contact">
      <SectionTitle title="Contact" />

      <div className="contact-wrapper flex flex-col lg:flex-row gap-10 justify-center items-start flex-wrap px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <div className="contact-left flex-1 flex flex-col gap-5">
          <p>
            We would love to hear from you! Please use the form below to send us
            a message or you can reach us at the following information.
          </p>
          <address className="not-italic">
            <p>Address: 1234 Example Street, City, State 12345 </p>
            <p>Phone: (123) 456-7890</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@thegrandaroma.com"
                className="underline text-secondary-focus"
              >
                info@thegrandaroma.com
              </a>
            </p>
          </address>
          <ul>
            <span className="text-2xl font-semibold">Opening Hours</span>
            <li className="text-secondary-focus">
              * Monday - Friday: 9am - 8pm
            </li>
            <li className="text-secondary-focus">* Saturday: 9am - 6pm</li>
            <li className="text-secondary-focus">* Sunday: Closed</li>
          </ul>
          <p className="text-2xl font-semibold flex gap-5 items-center">
            Follow Us on{" "}
            <a
              href="https://www.facebook.com/spectra.shohan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary duration-300"
            >
              <span>
                <BsFacebook />
              </span>
            </a>{" "}
            <a
              href="https://www.instagram.com/spectra.shohan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary duration-300"
            >
              <span>
                <BsInstagram />
              </span>
            </a>
          </p>
          <p>
            Thank you for considering The Grand Aroma for your beauty needs. Our
            team is dedicated to providing you with the highest level of
            service. Contact us for any questions, appointments or feedback.
          </p>
        </div>
        <div className="contact-right flex-1 flex flex-col gap-5 w-full">
          <span className="text-2xl font-semibold">Send us message</span>

          <form className="flex flex-col gap-3 w-full">
            <div className="form-control w-full">
              <label className="label" htmlFor="full-name">
                <span className="label-text">Full name</span>
              </label>
              <input
                required
                id="full-name"
                name="full-name"
                type="text"
                placeholder="Natasha Momosha"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label" htmlFor="email">
                <span className="label-text">Email address</span>
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                placeholder="hello@example.com"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="message">
                <span className="label-text">Message</span>
              </label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Write your message..."
                className="textarea textarea-bordered h-24 resize-none"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
