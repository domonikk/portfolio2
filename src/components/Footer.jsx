import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div class="w-full mx-auto max-w-screen-xl pt-7 pb-2 md:flex md:items-stretch md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          Domonique Eccleston
        </a>
      </span>
      <span> . All Rights Reserved.</span>
    </div>
  );
};

export default Footer;
