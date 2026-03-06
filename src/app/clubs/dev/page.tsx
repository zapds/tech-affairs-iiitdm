import React from "react";
import NewClubPageTemplate from "@/components/NewClubPageTemplate";

const clubData = {
  name: "Developers Club",
  logo: "/clubs/devclub/logo.jpg",

  introduction: `Developers Club, formerly known as Google Developers Student Club (GDSC), was rebranded in 2024 to reflect its broader vision and inclusive developer ecosystem. 
The club serves as a dynamic platform for students passionate about technology, enabling them to explore and build across multiple domains such as Web Development, App Development, Artificial Intelligence & Machine Learning, Backend Development, Automation, Open Source, and System Design.

What makes Developers Club stand out is its strong hands-on culture and implementation-driven approach. Through hackathons, sessions, workshops, alumni talks, collaborative projects, and real-world system development, the club emphasizes practical exposure over theoretical learning. It fosters peer-to-peer collaboration, industry readiness, and a vibrant technical community within the institute.`,

  timeline: [
    {
      year: 2024,
      event: "Vashisht Hackathon 2.0",
      description:
        "The flagship event of Developers Club with 1100+ participants and 250+ projects developed during a 48-hour innovation sprint."
    },
    {
      year: 2024,
      event: "RandomWalk.ai Collaboration",
      description:
        "Developers Club collaborated with RandomWalk.ai on AI-focused projects giving students exposure to real-world machine learning applications."
    }
  ],

  projects: [
    {
      name: "Web Scraping using Python",
      description:
        "Introductory session covering data extraction using BeautifulSoup and Requests libraries.",
      image: "/clubs/devclub/events/webscraping.jpg"
    },
    {
      name: "Web Automation",
      description:
        "Session focused on browser automation using Selenium and workflow automation techniques.",
      image: "/clubs/devclub/events/webautomation.jpg"
    },
    {
      name: "Node.js & Express.js",
      description:
        "Backend development session covering REST APIs, middleware, and server architecture.",
      image: "/clubs/devclub/events/nodejs.png"
    },
    
    
events:[
    {
      name: "Gemini API Session",
      description:
        "Hands-on workshop exploring AI integration into applications using Gemini API.",
      image: "/clubs/devclub/events/gemini.png"
    },
    {
      name: "Linux Basics Session",
      description:
        "Introduction to Ubuntu, command line usage, and development environment setup.",
      image: "/clubs/devclub/events/linux.jpg"
    },
    {
      name: "Devember Hackathon",
      description:
        "A competitive hackathon encouraging innovation and real-world solution development.",
      image: "/clubs/devclub/events/devember.jpg"
    },
    {
      name: "Getting Started with App Development",
      image: "/clubs/devclub/events/app-dev.png",
      description: `Conducted by: Krishna Chaitanya
Date: 17th September

Session covering app ideation, development fundamentals, UI basics, and the steps involved in building and deploying an application.`
    },

    {
      name: "Alumni Talk",
      image: "/clubs/devclub/events/alumni-talk.jpg",
      description: `Speaker: Jashwanth Peddisetty
Date: 2nd November

An interactive alumni session sharing industry insights, career guidance, and strategies for technical growth.`
    },

    {
      name: "CODE-A-THON",
      image: "/clubs/devclub/events/codeathon.jpg",
      description: `Conducted in collaboration with the CSE Department and IEEE IIITDMK, this event encouraged competitive coding and collaborative problem-solving among students.`
    },

    {
      name: "Fest Ticket Booking System",
      image: "/clubs/devclub/events/fest-ticket.jpg",
      description: `A web-based platform designed to manage event registrations and ticket distribution efficiently.`
    },

    {
      name: "Doctor Slot Booking System",
      image: "/clubs/devclub/events/doctor-booking.jpg",
      description: `A scheduling system enabling users to book and manage doctor appointments digitally.`
    },

    {
      name: "Dev Club ChatBot",
      image: "/clubs/devclub/events/chatbot.jpg",
      description: `An automated chatbot developed to assist with queries related to club activities, events, and technical resources.`
    }
  ],

  gallery: [
    { src: "/clubs/devclub/gallery/gallery1.png", caption: "" },
    { src: "/clubs/devclub/gallery/gallery2.png", caption: "" },
    { src: "/clubs/devclub/gallery/gallery3.png", caption: "" },
    { src: "/clubs/devclub/gallery/gallery4.png", caption: "" },
    { src: "/clubs/devclub/gallery/gallery5.png", caption: "" },
    { src: "/clubs/devclub/gallery/gallery6.png", caption: "" }
  ],

  core: [
    {
      name: "Sai Pranav",
      role: "Head Core",
      image: "/clubs/devclub/headcores/sai-pranav.jpg",
      email: "cs22b1027@iiitdm.ac.in"
    },
    {
      name: "Sainath Reddy",
      role: "Vice Head Core",
      image: "/clubs/devclub/headcores/sainath.jpg",
      email: "cs22b1005@iiitdm.ac.in"
    }
  ],

  links: {
    website: "",
    instagram: "https://www.instagram.com/dev.club.iiitdm/",
    github: "https://github.com/dev-iiitdm"
  }
};

function DevClub() {
  return <NewClubPageTemplate {...clubData} />;
}

export default DevClub;
