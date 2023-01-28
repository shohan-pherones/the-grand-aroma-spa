import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section className="contact container mx-auto py-20" id="contact">
      <SectionTitle title="Contact" />

      <div className="contact-wrapper flex gap-10 items-start flex-wrap">
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
            <span className="text-2xl font-semibold">Opening Hours:</span>
            <li className="text-secondary-focus">
              * Monday - Friday: 9am - 8pm
            </li>
            <li className="text-secondary-focus">* Saturday: 9am - 6pm</li>
            <li className="text-secondary-focus">* Sunday: Closed</li>
          </ul>
          <p className="text-2xl font-semibold flex gap-5 items-center">
            Follow Us on <span className="cursor-pointer">Facebook</span>{" "}
            <span className="cursor-pointer">Instagram</span>
          </p>
        </div>
        <div className="contact-right flex-1"></div>
      </div>
    </section>
  );
};

export default Contact;
