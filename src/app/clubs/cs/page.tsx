import React from 'react';
import ClubPageTemplate from '@/components/ClubPageTemplate';

const clubData = {
  name: 'CS Club',
  logo: '/clubs/csclub/logo.png',
  description: `The CS Club of IIITDM Kancheepuram is a student-led community that aims to foster interest, learning, and collaboration in the field of computer science. It serves as a platform where students can enhance their technical skills, explore various domains such as competitive programming, software development, and open-source contributions, and engage in meaningful learning experiences beyond the classroom. The club organizes workshops, coding contests, and speaker sessions, while also encouraging students to participate in national and international competitions. By facilitating peer-to-peer learning and collaboration, the CS Club strives to build a strong and active technical community within the institute and to create opportunities for students to grow as innovators, developers, and problem solvers.`,
  core: [
    {
      name: 'Avinaash A',
      role: 'Head Core',
      image: '/clubs/csclub/headcores/avinaash.jpeg',
      email: 'cs22b1064@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/avinaash-a-7955a1289',
      roll: 'cs22b1064',
    },
    {
      name: 'Nivedh Biju P',
      role: 'Technical Lead',
      image: '/clubs/csclub/headcores/nivedh.png',
      email: 'cs22b1021@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/nivedh-biju-b7b11b292',
      roll: 'cs22b1021',
    }
  ],
  team: [
    {
      name: 'Alice Johnson',
      role: 'Team Member',
      image: '/images/team/alice-johnson.jpg',
      email: 'alice.johnson@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/alicejohnson',
      year: 'B.Tech 2nd Year',
      department: 'Computer Science Engineering',
      roll: 'cs23b1003'
    },
    {
      name: 'Bob Wilson',
      role: 'Team Member',
      image: '/images/team/bob-wilson.jpg',
      email: 'bob.wilson@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/bobwilson',
      year: 'B.Tech 2nd Year',
      department: 'Computer Science Engineering',
      roll: 'cs23b1004'
    }
  ],
  links: {
    website: 'https://csclub.netlify.app/',
    instagram:'https://www.instagram.com/cs.club.iiitdm/',
    github: 'https://github.com/cs-iiitdm'
  }
};

function CSClub() {
  return <ClubPageTemplate {...clubData} />;
}

export default CSClub; 