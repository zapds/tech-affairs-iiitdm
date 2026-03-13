import React from 'react';
import ClubPageTemplate from '@/components/ClubPageTemplate';

const clubData = {
  name: 'E-Cell',
  logo: '/societies/Ecell/logo.webp',
  description: `The E-Cell at IIITDM Kancheepuram is dedicated to fostering entrepreneurial spirit and innovation among students. The club provides a platform for aspiring entrepreneurs to learn, collaborate, and transform ideas into viable business ventures. Through workshops, mentorship, and networking events, E-Cell empowers students to develop essential skills in business planning, leadership, and creative problem-solving.`,
  core: [
    {
      name: 'Asmit',
      role: 'Head Core',
      image: '/societies/Ecell/headcores/asmit.webp',
      email: '',
      linkedin: '',
      roll: ''
    },
    {
      name: 'Vishal Singh',
      role: 'Vice Head Core',
      image: '/societies/Ecell/headcores/vishal.webp',
      email: '',
      linkedin: '',
      roll: ''
    }
  ],
  team: [
    {
      name: 'Alice Johnson',
      role: 'Team Member',
      image: '/images/team/alice-johnson.webp',
      email: 'alice.johnson@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/alicejohnson',
      year: 'B.Tech 2nd Year',
      department: 'Computer Science Engineering',
      roll: 'cs23b1003'
    },
    {
      name: 'Bob Wilson',
      role: 'Team Member',
      image: '/images/team/bob-wilson.webp',
      email: 'bob.wilson@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/bobwilson',
      year: 'B.Tech 2nd Year',
      department: 'Computer Science Engineering'
    }
  ],
  links: {
    website: 'https://iiitdmk-ecell.vercel.app/',
    instagram: 'https://www.instagram.com/ecell_iiitdm/',
    github: '#'
  }
};

function ECell() {
  return <ClubPageTemplate {...clubData} />;
}

export default ECell;