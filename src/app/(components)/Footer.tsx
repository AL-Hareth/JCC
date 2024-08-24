import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto mt-8 px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6">
            <Link
              className="flex items-center text-gray-200 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              <Image src="/favicon.ico" alt="logo" width={100} height={100} />
              <span className="ml-2">JCC</span>
            </Link>
          </div>

          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-300 md:mb-6">
              Company
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/soon"
                  className="font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                >Official Blog</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/about"
                  className="font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                >About Us</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/contact-us"
                  className="font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                >Contact</Link>
              </li>
            </ul>
          </div>
          {/*
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                  >Terms</a
                  >
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                  >Privacy</a
                  >
                </li>
              </ul>
            </div>
            */}
          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-300 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="https://www.instagram.com/jo_cyber_club"
                  className="mr-5 font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                ><InstagramIcon /></a
                >
                <a
                  target="_blank"
                  href="https://t.me/JordanCyberClub"
                  className="font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                ><TelegramIcon /></a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/jordan-cyber-club/"
                  className="mr-5 font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                ><LinkedInIcon /></a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@jordan_cyber_club"
                  className="font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                ><YouTubeIcon /></a
                >
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="https://chat.whatsapp.com/Iyd4K2JPDtdGVOLITZCsJk"
                  className="mr-5 font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                ><WhatsAppIcon /></a
                >
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61561579136900&mibextid=ZbWKwL"
                  className="font-light no-underline hover:underline text-gray-300 hover:text-yellow-500"
                ><FacebookIcon /></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
