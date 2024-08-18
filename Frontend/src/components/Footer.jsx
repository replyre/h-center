import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 ">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h4 className="font-bold mb-4">Abstract</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Branches
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Release Notes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Community</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Podcast
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="md:mt-40 text-sm md:text-base">
            <img src="logo.png" alt="" className="mb-2" />© Copyright 2022
            Abstract Studio Design, Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
