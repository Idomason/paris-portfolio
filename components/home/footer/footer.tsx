// import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black pb-12 pt-20">
      {/* Define Grid */}
      <div className="mx-auto grid w-4/5 grid-cols-1 items-start gap-12 border-b-[1.5px] border-white/20 pb-8 md:grid-cols-2 lg:grid-cols-4">
        {/* First Footer Section */}
        <div>
          <h1 className="mb-4 text-xl font-bold uppercase text-white">
            Okorie Favour Ijeoma
          </h1>
          {/* <Image src="/images/logo.png" width={100} height={100} alt="Logo" /> */}
          <p className="text-white/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab!
          </p>
          {/* Socials */}
          <div className="mt-6 flex items-center space-x-4">
            <FaFacebookF className="h-6 w-6 cursor-pointer text-blue-600" />
            <FaTwitter className="h-6 w-6 cursor-pointer text-sky-500" />
            <FaYoutube className="h-6 w-6 cursor-pointer text-red-700" />
            <FaInstagram className="h-6 w-6 cursor-pointer text-pink-800" />
          </div>
        </div>
        {/* Second Footer Section */}
        <div>
          <h1 className="footer__heading">Popular</h1>
          <p className="footer__link">Social Management</p>
          <p className="footer__link">Virtual Assistant</p>
          <p className="footer__link">Data Entry</p>
          <p className="footer__link">Graphic Design</p>
          <p className="footer__link">Copyrighting</p>
          <p className="footer__link">Cold Emails</p>
        </div>
        {/* Third Footer Section */}
        <div>
          <h1 className="footer__heading">Quick Links</h1>
          <p className="footer__link">Home</p>
          <p className="footer__link">About</p>
          <p className="footer__link">Blog</p>
          <p className="footer__link">Copyrighting</p>
          <p className="footer__link">Cold Emails</p>
        </div>
        {/* Newsletter */}
        <div>
          <h1 className="footer__heading">Subscribe to my newsletter</h1>
          <input
            className="w-full rounded-lg bg-gray-700 px-6 py-2 text-white outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button className="mt-4 w-full rounded-lg bg-rose-700 px-6 py-2 text-white outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
