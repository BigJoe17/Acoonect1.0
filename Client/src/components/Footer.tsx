import Logo from "./extra/Logo";

import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      {/* Generate the Footer for 3 columns and with all links with contacts and social media links */}
      <footer className="bg-[#f1f1f1] pt-20 pb-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <Logo />
              <p className="text-lg text-[#0e161b] mt-4 text-center">
                Acoonect brings together the best of professional networking and
                academic collaboration. Join study groups, share resources,
                showcase your projects, and build lasting connections with peers
                from your university and beyond
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-inter font-bold text-[#0e161b]">
                Contact Us
              </h1>
              <p className="text-lg text-[#0e161b] mt-4">
                Email:
                <a href="mailto:" className="text-[#0e161b]">
                  acoonect@gmail.com
                </a>
              </p>
              <p className="text-lg text-[#0e161b] mt-4">
                Phone:
                <a href="tel:" className="text-[#0e161b]">
                  1234567890
                </a>
              </p>
            </div>
            {/* Third Column for Social Media Links */}
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-inter font-bold text-[#0e161b]">
                Follow Us
              </h1>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-[#0e161b]">
                  <IoLogoFacebook
                    size={24}
                    className="text-gray-700 hover:text-gray-800"
                  />
                </a>
                <a href="#" className="text-[#0e161b]">
                  <IoLogoTwitter
                    size={24}
                    className="text-gray-700 hover:text-gray-800"
                  />
                </a>
                <a href="#" className="text-[#0e161b]">
                  <IoLogoInstagram
                    size={24}
                    className="text-gray-700 hover:text-gray-800"
                  />
                </a>
                <a href="#" className="text-[#0e161b]">
                  <IoLogoLinkedin
                    size={24}
                    className="text-gray-700 hover:text-gray-800"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
