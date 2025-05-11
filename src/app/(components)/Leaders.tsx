import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";

function LeadersImages() {
  const testimonials = [
    {
      quote:
        "A seasoned expert and dedicated researcher in cybersecurity, with extensive experience in developing advanced strategies and solutions to protect digital infrastructures from emerging threats.",
      name: "Ayham Khamees",
      designation: "CEO & Founder",
      src: "/images/leaders/ayham.jpg",
    },
    {
      quote:
        "A university student with a strong command of public speaking and certified management expertise, continuously enhancing her academic and professional skills.",
      name: "Huda Hazem",
      designation: "Public Relations",
      src: "/images/leaders/huda.jpg",
    },
    {
      quote:
        "A Veteran leader who loves learning and developing in the field of cybersecurity and various sectors, interested in developing social team skills and suppressing opportunities to highlight the team in the best possible way.",
      name: "Rand Wraikat",
      designation: "Events Team",
      src: "/images/leaders/rand.png",
    },
    {
      quote:
        "A versatile professional, known for her impactful work as a researcher, advertiser, and speaker, making significant contributions across various platforms and events.",
      name: "Tabarak Al-Qaisi",
      designation: "Social Media Team",
      src: "/images/leaders/tabarak.jpg",
    },
    {
      quote:
        "A motivated university student and skilled Full Stack Web Developer, who shares his knowledge by teaching programming and development skills to a broad audience on YouTube.",
      name: "Alhareth Turab",
      designation: "Development Team",
      src: "/images/leaders/alhareth.jpg",
    },
    {
      quote:
        "A distinguished graduate with a diploma in Cybersecurity from Middle East University, recognized globally for securing third place in the prestigious Copernicus competition.",
      name: "Yousef Al-Rawahneh",
      designation: "Schools Team",
      src: "/images/leaders/yousef.jpg",
    },
    {
      quote:
        "Machine Learning for threat detection, CTF Player &  Incident resuonse specialist",
      name: "Obada Jaber",
      designation: "CTF",
      src: "/images/leaders/obada.jpeg",
    },
    {
      quote:
        "Co-Founder and COO of Jordan Cyber Club. With expertise in cybersecurity, he leads the club with a focus on innovation, security, and operational efficiency, fostering a collaborative environment that drives success in the tech field.",
      name: "Karam Al-Omari",
      designation: "CO-Founder",
      src: "/images/leaders/karam.jpg",
    },
    {
      quote:
        "Certified Penetration Tester with expertise in cybersecurity, full-stack and desktop development, networking, and protocol design. Passionate about securing systems, and building robust applications.",
      name: "Wesam Mahasneh",
      designation: "CTO",
      src: "/images/leaders/wesam.png",
    },
    {
      quote:
        "A Cybersecurity graduate from Mutah University. I have hands-on experience in incident response and network traffic analysis, and I’m passionate about developing team skills and driving technical excellence.",
      name: "Sally Mousa",
      designation: "Technical Leader",
      src: "/images/leaders/sally.png",
    },
    {
      quote:
        "A recent graduate of Zarqa University (2023) with a strong passion for programming and technology. With a keen interest in continuous learning, she has actively participated in numerous courses across diverse fields to expand her knowledge and skills.",
      name: "Lujain Saleh",
      designation: "HR",
      src: "/images/leaders/lujain.jpeg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}

export default function Leaders() {
  return <div className="mt-5">
    <h1 className="w-2/3 mx-auto text-center text-5xl font-sans">Our Leaders</h1>
    <LeadersImages />
  </div>;
}
