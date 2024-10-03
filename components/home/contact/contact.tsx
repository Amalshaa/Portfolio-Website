import React from 'react';
import ContactForm from './contactform';
import Contactinfo from './contactinfo';

const Contact = () => {
  return (
    <section id="contact">
    <div className="pt-16 pb-16 bg-[#050709]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        {/* Left side: Contact Form */}
        <div data-aos = "fade-left" data-aos-anchor-placement="top-center" >
          <ContactForm />
        </div>

        {/* Right side: Contact Information */}
        <div data-aos = "fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <Contactinfo />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
