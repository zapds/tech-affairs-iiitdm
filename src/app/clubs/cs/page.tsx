import React from 'react';
import NewClubPageTemplate from '@/components/NewClubPageTemplate';

const clubData = {
  name: 'CS Club',
  logo: '/clubs/csclub/logo.png',
  introduction: `The CS Club of IIITDM Kancheepuram is a student-led community that aims to foster interest, learning, and collaboration in the field of computer science. It serves as a platform where students can enhance their technical skills, explore various domains such as competitive programming, software development, and open-source contributions, and engage in meaningful learning experiences beyond the classroom. The club organizes workshops, coding contests, and speaker sessions, while also encouraging students to participate in national and international competitions. By facilitating peer-to-peer learning and collaboration, the CS Club strives to build a strong and active technical community within the institute and to create opportunities for students to grow as innovators, developers, and problem solvers.`,
  timeline: [
    { year: 2022, event: 'Club Foundation', description: 'The CS Club was founded by a group of passionate students.' },
    { year: 2023, event: 'First Workshop', description: 'Hosted a successful workshop on web development basics.' },
    { year: 2023, event: 'Hackathon Winners', description: 'A team from the club won the inter-college hackathon.' },
    { year: 2024, event: 'AI Seminar', description: 'Organized a seminar on the latest trends in Artificial Intelligence.' },
  ],
  projects: [
    { name: 'Project Phoenix', description: 'A new campus-wide event management platform.', image: '/teams/astra/logo.png', members: ['Alice', 'Bob', 'Charlie'], technologies: ['React', 'Next.js', 'Material-UI'], themeColor: '#4A90E2' },
    { name: 'Project Griffin', description: 'A mobile app for tracking college bus schedules.', image: '/teams/mars/logo.png', members: ['David', 'Eve', 'Frank'], technologies: ['Flutter', 'Firebase'], themeColor: '#50E3C2' },
    { name: 'Project Hydra', description: 'A machine learning model for predicting student performance.', image: '/teams/nira/logo.jpg', members: ['Grace', 'Heidi', 'Ivan'], technologies: ['Python', 'TensorFlow', 'scikit-learn'], themeColor: '#F5A623' },
  ],
  gallery: [
    { src: '/teams/revolt/logo.png', caption: 'Our team at the national robotics competition.' },
    { src: '/societies/ASMEStudentSection/logo.png', caption: 'A snapshot from our weekly coding session.' },
    { src: '/societies/Ecell/logo.png', caption: 'Guest lecture by a renowned software engineer.' },
    { src: '/societies/IEEE/logo.png', caption: 'Celebrating our victory at the hackathon.' },
    { src: '/societies/OpticaStudentChapter/logo.jpg', caption: 'The team that started it all.' },
  ],
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
  links: {
    website: 'https://csclub.netlify.app/',
    instagram:'https://www.instagram.com/cs.club.iiitdm/',
    github: 'https://github.com/cs-iiitdm'
  }
};

function CSClub() {
  return <NewClubPageTemplate {...clubData} />;
}

export default CSClub;
