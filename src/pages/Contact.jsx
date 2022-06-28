import { ContactHeader, ContactForm, ContactHelp } from "../Components";

const Contact = () => {
  return (
    <section id="contact" className="p-10 lg:p-16 relative">
      <div className="absolute top-0 left-0 z-[-1] w-full h-1/2 lg:h-[45%] xl:h-1/2 bg-blue-200"></div>
      <div className="container px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="px-4 w-full lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <ContactHeader />
              <ContactHelp />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
