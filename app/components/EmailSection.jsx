"use client";
import React, { useState } from 'react';
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

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

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
      e.target.reset();

      // Refresh after 3 seconds
      setTimeout(() => {
        window.location.reload();
    }, 
    
    3000);

    } else {
      console.error(resData?.error || "Unknown error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id = "contact"className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>
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
          {/* Uncomment if using Discord */}
          {/* <Link href="https://discord.com" target="_blank">
            <Image src={DiscordIcon} alt='Discord Icon' />
          </Link> */}
        </div>
      </div>

      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor="email" className='text-white mb-2 block text-sm font-medium'>
              Your email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='youremail@gmail.com'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor="subject" className='text-white mb-2 block text-sm font-medium'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Just dropping a hi!'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Please leave your message.....'
            />
          </div>

          <button
            type='submit'
            className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
            Send a Message
          </button>

          {emailSubmitted && (
            <p className='text-green-500 text-sm mt-2'>
              Email sent successfully!
            </p>
          )}

          {errorMessage && (
            <p className='text-red-500 text-sm mt-2'>
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
