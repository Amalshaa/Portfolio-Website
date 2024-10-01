'use client';  // Marks this as a Client Component
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6ydnhbo', 'template_lbbpfqo', form.current!, 'eNCTnT0rMO3UOf0o7')
      .then(
        () => {
          alert('Message sent successfully!');
          window.location.reload(); 
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send the message.');
        }
      );
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let's work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Fill out the form to get in touch.
      </p>

      <form ref={form} onSubmit={sendEmail} className="mt-8 block w-full overflow-hidden">
        {/* First Name and Last Name */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            required
            className="p-3 bg-black text-white placeholder-gray-600 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            required
            className="p-3 bg-black text-white placeholder-gray-600 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="p-3 bg-black text-white placeholder-gray-600 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="p-3 bg-black text-white placeholder-gray-600 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        {/* Select an Option */}
        <div className="mt-5">
          <select
            name="option"
            required
            className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>

        {/* Message Text Area */}
        <textarea
          name="message"
          required
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
        ></textarea>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
