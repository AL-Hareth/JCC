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
      designation: "HR Manager",
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
        "As a senior year student at the University of Jordan. Additionally, my experience as a junior penetration tester has provided me with valuable hands-on experience, allowing me to apply my knowledge to real-world security challenges.",
      name: "Yahia Ahmad",
      designation: "Technical Team",
      src: "/images/leaders/yahia.jpg",
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
        "No Quote Yet",
      name: "Karam Al-Omari",
      designation: "COO & Leader Events",
      src: "/images/leaders/karam.jpg",
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
