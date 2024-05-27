import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 w-full">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to next level?
        </h1>
        <p className="text-white-200 md:my-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you to
          achiev your goals.
        </p>
        <a href="mailto:tarunkumbhar1998@gmail.com">
          <MagicButton
            title="let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Tarun
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((Profile) => (
            <a
              key={Profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              href={Profile.link}
              target="_blank"
            >
              <img src={Profile.img} alt={Profile.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
