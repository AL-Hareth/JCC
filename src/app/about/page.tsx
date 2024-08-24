"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto overflow-hidden mb-12">
      <h1 className="text-5xl text-center font-extrabold leading-normal mb-12 text-gray-200">Our Leaders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-7">
        <Person description="A seasoned expert and dedicated researcher in cybersecurity, with extensive experience in developing advanced strategies and solutions to protect digital infrastructures from emerging threats." fullName="Ayham Khamees" name="ayham" role="Founder & CEO" />
        <Person description="A university student with a strong command of public speaking and certified management expertise, continuously enhancing her academic and professional skills." fullName="Huda Hazem" name="huda" role="HR Manager" />
        <Person description="" fullName="Karam Al-Omari" name="karam" role="COO & Leader Events" />
        <Person description="A versatile professional, known for her impactful work as a researcher, advertiser, and speaker, making significant contributions across various platforms and events." fullName="Tabrak Al-Qaisi" name="tabarak" role="Content Team Leader" />
        <Person description="An accomplished Cyber Security Trainer, holding multiple international certifications, and has successfully coached over 800 students while conducting numerous workshops in universities and leading companies." fullName="Waleed Shawawreh" name="waleed" role="Partnerships Coordinator" />
        <Person description="A motivated university student and skilled Full Stack Web Developer, who shares his knowledge by teaching programming and development skills to a broad audience on YouTube." fullName="Alhareth Turab" name="alhareth" role="Development Team Leader" />
        <Person description="A distinguished graduate with a diploma in Cybersecurity from Middle East University, recognized globally for securing third place in the prestigious Copernicus competition." fullName="Yousef Al-Rawahneh" name="yousef" role="Leader For Schools" />
      </div>
    </div>
  );
}

function Person({ name, role, fullName, description }: { name: string; role: string, fullName: string, description: string }) {
  return (
    <div className="relative w-[300px] h-[300px] bg-[linear-gradient(-45deg,_#FFCC1F_0%,_#F29504_100%_)] rounded-[10px] flex items-center justify-center overflow-hidden [transition:all_0.6s_cubic-bezier(0.23,_1,_0.320,_1)] hover:scale-110 hover:[box-shadow:0_10px_20px_rgba(0,_0,_0,_0.2)] group">
      <div className="absolute bottom-0 fill-[#333] [transition:all_0.6s_cubic-bezier(0.23,_1,_0.320,_1)]">
        <Image src={`/images/Leaders/${name}.png`} 
          alt={name} 
          width={250} 
          height={250} 
          className="inline" 
        />
      </div>
      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-full h-full p-[20px] box-border bg-[#101010] opacity-0 [transition:all_0.6s_cubic-bezier(0.23,_1,_0.320,_1)] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-[1.07] group-hover:opacity-100">
        <p className="m-0 text-[24px] text-[#fff] font-bold">{fullName}</p>
        <p className="mt-[10px] mx-[0] mb-[0] text-[14px] text-[#ccc] leading-[1.4]">{role}</p>
        <p className="mt-[10px] mx-[0] mb-[0] text-[14px] text-[#ccc] leading-[1.4]">{description}</p>
      </div>
    </div>
  );
}
