import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function ContactUs() {
  return (
    <div>
      <h1 className="text-5xl text-center font-medium leading-normal mb-12 text-gray-200 arabic-medium">تواصل معنا</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-7 mb-12">
        <InstagramCard />
        <FacebookCard />
        <LinkedInCard />
        <WhatsAppCard />
        <YoutubeCard />
        <TelegramCard />  
      </div>
    </div>
  );
}

function InstagramCard() {
  return (
    <div className="text-gray-800 w-[300px] h-[200px] text-center bg-[#F49D04] p-[1.5em] rounded-[5px] relative overflow-hidden [transition:.3s_cubic-bezier(.6,.4,0,1),transform_.15s_ease] flex flex-col justify-center items-center gap-[1em] group hover:bg-[#FFE5F4]">
      <div className="icon [transition:.3s_cubic-bezier(.6,.4,0,1)] group-hover:opacity-0">
        <InstagramIcon className="w-[50px] h-[50px]" />
      </div>
      <strong className="group-hover:opacity-0 [transition:.3s_cubic-bezier(.6,.4,0,1)] block text-3xl tracking-[-.035em]">
        Instagram
      </strong>
      <a className="text-[#E50087] group-hover:top-[0] group-hover:text-[1.2em] absolute w-full h-full flex justify-center items-center rounded-[5px] font-bold top-full [transition:all_.3s_cubic-bezier(.6,.4,0,1)]"
        href="https://instagram.com/jo_cyber_club"
        target="_blank"
      >Follow us</a>
    </div>
  );
}

function FacebookCard() {
  return (
    <div className="text-gray-800 w-[300px] h-[200px] text-center bg-[#F49D04] p-[1.5em] rounded-[5px] relative overflow-hidden [transition:.3s_cubic-bezier(.6,.4,0,1),transform_.15s_ease] flex flex-col justify-center items-center gap-[1em] group hover:bg-[#e5eaff]">
      <div className="icon [transition:.3s_cubic-bezier(.6,.4,0,1)] group-hover:opacity-0">
        <FacebookIcon className="w-[50px] h-[50px]" />
      </div>
      <strong className="group-hover:opacity-0 [transition:.3s_cubic-bezier(.6,.4,0,1)] block text-3xl tracking-[-.035em]">
        Facebook
      </strong>
      <a className="text-[#0033e5] group-hover:top-[0] group-hover:text-[1.2em] absolute w-full h-full flex justify-center items-center rounded-[5px] font-bold top-full [transition:all_.3s_cubic-bezier(.6,.4,0,1)]"
        href="https://www.facebook.com/profile.php?id=61561579136900&mibextid=ZbWKwL"
        target="_blank"
      >Follow us</a>
    </div>
  );
}

function LinkedInCard() {
  return (
    <div className="text-gray-800 w-[300px] h-[200px] text-center bg-[#F49D04] p-[1.5em] rounded-[5px] relative overflow-hidden [transition:.3s_cubic-bezier(.6,.4,0,1),transform_.15s_ease] flex flex-col justify-center items-center gap-[1em] group hover:bg-[#e5edff]">
      <div className="icon [transition:.3s_cubic-bezier(.6,.4,0,1)] group-hover:opacity-0">
        <LinkedInIcon className="w-[50px] h-[50px]" />
      </div>
      <strong className="group-hover:opacity-0 [transition:.3s_cubic-bezier(.6,.4,0,1)] block text-3xl tracking-[-.035em]">
        LinkedIn
      </strong>
      <a className="text-[#008de5] group-hover:top-[0] group-hover:text-[1.2em] absolute w-full h-full flex justify-center items-center rounded-[5px] font-bold top-full [transition:all_.3s_cubic-bezier(.6,.4,0,1)]"
        href="https://www.linkedin.com/company/jordan-cyber-club/"
        target="_blank"
      >Follow us</a>
    </div>
  );
}

function WhatsAppCard() {
  return (
    <div className="text-gray-800 w-[300px] h-[200px] text-center bg-[#F49D04] p-[1.5em] rounded-[5px] relative overflow-hidden [transition:.3s_cubic-bezier(.6,.4,0,1),transform_.15s_ease] flex flex-col justify-center items-center gap-[1em] group hover:bg-[#d5ffd2]">
      <div className="icon [transition:.3s_cubic-bezier(.6,.4,0,1)] group-hover:opacity-0">
        <WhatsAppIcon className="w-[50px] h-[50px]" />
      </div>
      <strong className="group-hover:opacity-0 [transition:.3s_cubic-bezier(.6,.4,0,1)] block text-3xl tracking-[-.035em]">
        Whatsapp Group
      </strong>
      <a className="text-[#03bf09] group-hover:top-[0] group-hover:text-[1.2em] absolute w-full h-full flex justify-center items-center rounded-[5px] font-bold top-full [transition:all_.3s_cubic-bezier(.6,.4,0,1)]"
        href="https://chat.whatsapp.com/Iyd4K2JPDtdGVOLITZCsJk"
        target="_blank"
      >Join Us</a>
    </div>
  );
}

function YoutubeCard() {
  return (
    <div className="text-gray-800 w-[300px] h-[200px] text-center bg-[#F49D04] p-[1.5em] rounded-[5px] relative overflow-hidden [transition:.3s_cubic-bezier(.6,.4,0,1),transform_.15s_ease] flex flex-col justify-center items-center gap-[1em] group hover:bg-[#FDB2B2]">
      <div className="icon [transition:.3s_cubic-bezier(.6,.4,0,1)] group-hover:opacity-0">
        <YouTubeIcon className="w-[50px] h-[50px]" />
      </div>
      <strong className="group-hover:opacity-0 [transition:.3s_cubic-bezier(.6,.4,0,1)] block text-3xl tracking-[-.035em]">
        YouTube Channel
      </strong>
      <a className="text-[#e50000] group-hover:top-[0] group-hover:text-[1.2em] absolute w-full h-full flex justify-center items-center rounded-[5px] font-bold top-full [transition:all_.3s_cubic-bezier(.6,.4,0,1)]"
        href="https://www.youtube.com/@jordan_cyber_club"
        target="_blank"
      >Subscribe</a>
    </div>
  );
}

function TelegramCard() {
  return (
    <div className="text-gray-800 w-[300px] h-[200px] text-center bg-[#F49D04] p-[1.5em] rounded-[5px] relative overflow-hidden [transition:.3s_cubic-bezier(.6,.4,0,1),transform_.15s_ease] flex flex-col justify-center items-center gap-[1em] group hover:bg-[#c6e2ff]">
      <div className="icon [transition:.3s_cubic-bezier(.6,.4,0,1)] group-hover:opacity-0">
        <TelegramIcon className="w-[50px] h-[50px]" />
      </div>
      <strong className="group-hover:opacity-0 [transition:.3s_cubic-bezier(.6,.4,0,1)] block text-3xl tracking-[-.035em]">
        Telegram 
      </strong>
      <a className="text-[#028dbb] group-hover:top-[0] group-hover:text-[1.2em] absolute w-full h-full flex justify-center items-center rounded-[5px] font-bold top-full [transition:all_.3s_cubic-bezier(.6,.4,0,1)]"
        href="https://t.me/JordanCyberClub"
        target="_blank"
      >Subscribe</a>
    </div>
  );
}
