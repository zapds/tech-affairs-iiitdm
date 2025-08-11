import React from 'react';
import SocietyPageTemplate from '../../components/SocietyPageTemplate';

const clubData = {
  name: 'ASME Student Section',
  logo: '/societies/ASMEStudentSection/logo.png',
  description: `The ASME Student Section at IIITDM Kancheepuram is a student chapter of the American Society of Mechanical Engineers (ASME), dedicated to promoting innovation, learning, and professional growth in the field of mechanical engineering.\nThe section provides a platform for students to explore core and emerging areas such as mechanical design, thermal systems, manufacturing processes, robotics, and sustainable technologies. It encourages members to deepen their technical understanding, develop engineering solutions, and stay connected with global trends in mechanical engineering.\nBy fostering peer learning and engagement with the broader ASME community, the section helps students prepare for challenges in modern mechanical industries and encourages them to contribute to advancements in engineering technology.`,
  core: [
    {
      name: 'Rahul Kumar',
      role: 'Section Chair',
      image: '/images/team/rahul-kumar.jpg',
      email: 'rahul.kumar@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/rahulkumar',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical Engineering',
      roll: 'me23b2001'
    },
    {
      name: 'Priya Sharma',
      role: 'Vice Chair',
      image: '/images/team/priya-sharma.jpg',
      email: 'priya.sharma@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/priyasharma',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical Engineering',
      roll: 'me23b2002'
    }
  ],
  team: [
    {
      name: 'Amit Patel',
      role: 'Technical Coordinator',
      image: '/images/team/amit-patel.jpg',
      email: 'amit.patel@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/amitpatel',
      year: 'B.Tech 2nd Year',
      department: 'Mechanical Engineering',
      roll: 'me23b2003'
    },
    {
      name: 'Sneha Reddy',
      role: 'Events Coordinator',
      image: '/images/team/sneha-reddy.jpg',
      email: 'sneha.reddy@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/snehareddy',
      year: 'B.Tech 2nd Year',
      department: 'Mechanical Engineering',
      roll: 'me23b2004'
    }
  ],
  links: {
    website: 'https://asme.iiitdm.ac.in',
    instagram: 'https://instagram.com/asme_iiitdm',
    github: 'https://github.com/asme-iiitdm'
  }
};

function ASMEStudentSection() {
  return <SocietyPageTemplate {...clubData} />;
}

export default ASMEStudentSection; 