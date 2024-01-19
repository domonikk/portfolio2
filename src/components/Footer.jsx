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
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-med font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
        <li>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white me-4 md:me-6 "
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span class="sr-only">Instagram page</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white me-4 md:me-6"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span class="sr-only">Linkedin page</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white me-4 md:me-6"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span class="sr-only">Github page</span>
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            domonique.eccleston@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
