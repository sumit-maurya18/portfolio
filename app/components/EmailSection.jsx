"use client";
import React, { useState } from 'react';
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // State to control the circular loading indicator
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage(null);

    // Start loader when request begins
    setLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    // Stop loader when response returns
    setLoading(false);

    if (response.status === 200) {

      console.log("Message sent.");

      // Show confirmation message
      setEmailSubmitted(true);

      // Reset form fields
      e.target.reset();

      // Refresh after 3 seconds
      setTimeout(() => {
        window.location.reload();
      }, 3000);

    } else {

      console.error(resData?.error || "Unknown error");

      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>

      <div>
        <h5 className='text-4xl font-bold text-white my-2'>
          Let's Connect
        </h5>

        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best 
          to get back to you!
        </p>

        {/* Social Links */}
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/sumit-maurya18" target="_blank">
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>

          <Link href="https://www.linkedin.com/in/sumitm620" target="_blank">
            <Image src={LinkedinIcon} alt='Linkedin Icon' />
          </Link>
        </div>
      </div>

      <div className="max-w-md">
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

          <div>
            <label htmlFor="email" className='text-white mb-1 block text-sm font-medium'>
              Your email
            </label>

            <input
              name='email'
              type='email'
              id='email'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-md block w-full px-3 py-2'
              placeholder='youremail@gmail.com'
            />
          </div>

          <div>
            <label htmlFor="subject" className='text-white mb-1 block text-sm font-medium'>
              Subject
            </label>

            <input
              name='subject'
              type='text'
              id='subject'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-md block w-full px-3 py-2'
              placeholder='Just dropping a hi!'
            />
          </div>

          <div>
            <label htmlFor='message' className='text-white block text-sm mb-1 font-medium'>
              Message
            </label>

            <textarea
              name='message'
              id='message'
              rows="4"
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-md block w-full px-3 py-2 resize-none'
              placeholder='Please leave your message.....'
            />
          </div>

          {/* Send Button */}
          <button
            type='submit'
            disabled={loading}
            className='bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-md w-full flex items-center justify-center gap-2'
          >

            {/* Circular progress indicator while message is being sent */}
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              "Send Message"
            )}

          </button>

          {/* Confirmation message */}
          {emailSubmitted && (
            <p className='text-green-500 text-sm'>
              Email sent successfully!
            </p>
          )}

          {/* Error message */}
          {errorMessage && (
            <p className='text-red-500 text-sm'>
              {errorMessage}
            </p>
          )}

        </form>
      </div>

    </section>
  );
};

export default EmailSection;