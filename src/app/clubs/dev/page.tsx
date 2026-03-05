import React from 'react';
import ClubPageTemplate from '@/components/ClubPageTemplate';

const clubData = {
  name: 'Developers Club',
  logo: '/clubs/devclub/logo.jpg',
  description: `The Developers Club at IIITDM Kancheepuram is a student-led community focused on cultivating a strong foundation in software development, problem-solving, and open-source contributions. The club brings together students passionate about coding, product development, and technology innovation.\nThrough workshops, hackathons, coding sessions, and hands-on projects, the club equips its members with the skills needed to build impactful software solutions. Whether exploring web development, mobile apps, DevOps, or modern software practices, Developers Club fosters a collaborative environment where students learn by doing.\nThe club’s core mission is to:\nEncourage innovation through practical, real-world projects.\n\nFoster collaboration among students from diverse technical backgrounds.\n\nPromote open-source culture, encouraging contributions to global tech communities.\n\nBy bridging classroom learning with industry-relevant technologies, Developers Club empowers students to grow as creators, contributors, and changemakers in the tech world.`,
  core: [
    {
      name: 'Sai Pranav',
      role: 'Head Core',
      image: '/clubs/devclub/headcores/Sai Pranav.jpg',
      email: 'cs22b1027@iiitdm.ac.in',
      roll: 'cs22b1027',
    },
    {
      name: 'Sainath Reddy',
      role: 'Vice Head Core',
      image: '/clubs/devclub/headcores/sainath.jpg',
      email: 'cs22b1005@iiitdm.ac.in',
      roll: 'cs22b1005',
    },
  ],
  links: {
    website: 'https://devclub.iiitdm.ac.in',
    instagram: 'https://www.instagram.com/dev.club.iiitdm/',
    github: 'https://github.com/dev-iiitdm'
  }
};

function DevClub() {
  return <ClubPageTemplate {...clubData} />;
}

export default DevClub; 
