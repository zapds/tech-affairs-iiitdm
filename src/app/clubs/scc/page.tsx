import React from 'react';
import ClubPageTemplate from '@/components/ClubPageTemplate';

const clubData = {
  name: 'System Coding Club (SCC)',
  logo: '/clubs/SCC/logo.png',
  description: `The Systems Coding Club (SSC) at IIITDM Kancheepuram is dedicated to empowering students with practical skills in hardware-level programming and system design. The club focuses on teaching and applying Verilog, Embedded Systems, and MATLAB, preparing students to tackle real-world industrial challenges in electronics and automation.\nSSC encourages students to take on hands-on projects in these areas, fostering a deep understanding of how software interacts with hardware. The club also supports students in accessing and understanding research articles relevant to electronics, embedded design, and digital systems.`,
  core: [
    {
      name: 'A.Nikhileswar',
      role: 'Core',
      image: '/clubs/scc/headcores/nikhileswar.jpg',
      email: 'ec23b1021@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/johndoe',
      roll: 'ec23b1021'
    },
    {
      name: 'Tarun Vignesh',
      role: 'Project Lead',
      image: '/clubs/scc/headcores/vignesh.jpg',
      email: 'ec23b1047@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/janesmith',
      roll: 'ec23b1047'
    }
  ],
  links: {
    website: '#',
    instagram: 'https://www.instagram.com/systemcodingclub_iiitdm/',
    github: '#'
  }
};

function SCC() {
  return <ClubPageTemplate {...clubData} />;
}

export default SCC; 