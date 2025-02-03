import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function LinkSpan({ children, href, color }: { children: React.ReactNode, href: string, color: string }) {
  return <span className={`mx-2 ${color}`}>
    <a href={href} target="_blank">{children}</a>
  </span>;
}

export default function Footer() {
  return (
    <div className="bg-zinc-950 py-3 text-center text-xl xl:text-2xl flex justify-center items-center">
      <span className="mx-2 font-medium">All rights reserved</span>|
      <LinkSpan href="https://www.instagram.com/jo_cyber_club/" color="hover:text-pink-700">
        <FaInstagram />
      </LinkSpan>
      <LinkSpan href="https://www.facebook.com/profile.php?id=61561579136900&mibextid=ZbWKwL" color="hover:text-blue-700">
        <FaFacebookF />
      </LinkSpan>
      <LinkSpan href="https://www.linkedin.com/company/jordan-cyber-club/" color="hover:text-sky-700">
        <FaLinkedin />
      </LinkSpan>
      <LinkSpan href="https://www.youtube.com/@jordan_cyber_club" color="hover:text-rose-700">
        <FaYoutube />
      </LinkSpan>
      <LinkSpan href="https://chat.whatsapp.com/Iyd4K2JPDtdGVOLITZCsJk" color="hover:text-lime-700">
        <FaWhatsapp />
      </LinkSpan>
      <LinkSpan href="https://t.me/JordanCyberClub" color="hover:text-sky-700">
        <FaTelegramPlane />
      </LinkSpan>
    </div>
  );
}
