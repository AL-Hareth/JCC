"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";

const products = [
  {
    title: "IEEE Day",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_jcc-cybersecurity-innovation-activity-7254544951194066944-6ndG?utm_source=share&utm_medium=member_desktop",
    thumbnail: "https://utfs.io/f/uZMi2O88N3z2GpTQSeaWJLfw5akXx7pqQSiC3UnRKBj1NMu4",
  },
  {
    title: "Podcast",
    link: "https://youtu.be/-r_JgeMkmyU?si=zAIPnAuZMLuQlvf0",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2QugQ85E09gKc2VlPEGD7NUdOQoXHmZBhJRWa",
  },
  {
    title: "Next Step",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_jcc-cybersecurity-graduatesconference2024-activity-7246219284866031616-aRHV?utm_source=share&utm_medium=member_desktop",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2YLJvarNuqgSDJZejuN9UPhC7L1ABQHYV2k4K",
  },

  {
    title: "Web Hub Day",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_jcc-webhubday-cybersecurity-activity-7277715203062947842-67M8?utm_source=share&utm_medium=member_desktop",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z25qOq8o6kMtY0bTyszrPDnFgOZCuIaSAGxvoW",
  },
  {
    title: "الاسبوع العالمي للدراية الاعلامية والمعلوماتي",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDk5OTgyMzkzNDM1MDAz?story_media_id=3489729583952103941&igsh=OTh5enYzNmgwcXlh",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2wLNCcqHRobulWqzKgLfOaC3mU96r04hSHcVe",
  },
  {
    title: "مشاركتنا مع نادي SEC في جامعه اربد الاهلية",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_jcc-cybersecurity-innovation-activity-7254884155677646848-IuTm?utm_source=share&utm_medium=member_ios",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z29Cfnu3lg38CkOXoGRVmDjSAULirlcTzfp95s",
  },

  {
    title: "ورشة Blue team مع الرائد المهندس علي البطوش",
    link: "https://www.instagram.com/reel/DBRcRC3I_dO/?igsh=MTE0ZmxpNWhwbjQ1",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2RhBmSVIbiZ6D02tWIMqOVJBudmsgEYf4chHP",
  },
  {
    title: "توقيع اتفاقية تعاون مع شركة pmc",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_universityofjordan-activity-7240373690394165251-uIID?utm_source=share&utm_medium=member_ios",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2Olv4vjnxhczLWg5tvIderp1PCQxEwHiq7yuY",
  },
  {
    title: "IEEE Day",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_jcc-cybersecurity-innovation-activity-7254544951194066944-6ndG?utm_source=share&utm_medium=member_ios",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2a65kMkr2Eetb354syDMU0XFuvNSnVclj71h2",
  },
  {
    title: "Introduction to Linux @ Zarqa University",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_jcc-bracken-activity-7261790170998321152-qWOZ?utm_source=share&utm_medium=member_desktop",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2lJkHirBHw0zscLIYbrTSjZF1CGpXOKqEkAW2",
  },
  {
    title: "JCC x Al-Nashama",
    link: "https://www.instagram.com/reel/DCUwYcAAVVg/?igsh=MTdycGY4bTl1ZDBrYw==",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2CZKxxu4IEPdbg4pHzQukxSm7OyfalqRe5AjL",
  },
  {
    title: "توقيع اتفاقية تعاون مع شركة pmc",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_universityofjordan-activity-7240373690394165251-uIID",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2xoa2Eh9Ly5uUHBJV9o1Y7Qa3j8vWpxKenMFO",
  },
  {
    title: "Next Step Jo (مؤتمر الخريجين)",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_jcc-cybersecurity-graduatesconference2024-activity-7246219284866031616-aRHV?utm_source=share&utm_medium=member_desktop",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2ULoXhyOi94tO1sChN7A0TxYeEkXpMznDU6mS",
  },
  {
    title: "SOFEX",
    link: "https://www.linkedin.com/posts/jordan-cyber-club_sofex2024-sofex2024-jordancyberclub-activity-7238946520237064192-BrrT?utm_source=share&utm_medium=member_desktop",
    thumbnail:
    "https://utfs.io/f/uZMi2O88N3z2GcIzCKaWJLfw5akXx7pqQSiC3UnRKBj1NMu4",
  },
  {
    title: "At the Yarmok University Robot Day",
    link: "https://web.facebook.com/profile.php?id=61561579136900",
    thumbnail:
      "https://utfs.io/f/uZMi2O88N3z2CZKxxu4IEPdbg4pHzQukxSm7OyfalqRe5AjL",
  },
];

export default function Hero() {
  return <HeroParallax products={products} />;
}


