import React from 'react';
import TeamPageTemplate from '../../../components/TeamPageTemplate';

const teamInfo = {
  name: 'Team Tad',
  club: 'TAD Club',
  logo: '/teams/tad/logo.png',
  description: `The Talpade Aero Design (TAD) team at IIITDM Kancheepuram is a vibrant and fast-growing student organization dedicated to advancing the field of aeronautical design and engineering. Bringing together passionate and curious engineering minds, the club focuses on the design, construction, and optimization of high-performance RC planes.\nWith a strong emphasis on precision engineering and innovation, TAD Club builds aircraft that compete in national-level aeromodeling competitions, where students apply their skills in aerodynamics, structural design, propulsion, and control systems. The club serves as a collaborative platform for like-minded individuals who are driven to push the boundaries of RC plane design and aerial vehicle development.\nThrough hands-on projects, workshops, and competitions, TAD Club nurtures technical excellence, teamwork, and creativity, inspiring the next generation of aerospace innovators.`,
  achievements: [
    {
      title: 'IIT Bombay Competition',
      description: `TAD participated with two teams and both of the teams sucessfully cleared the abstract round and they made into the top 50's out of 500 teams by flying RC planes with payload`,
      year: '2024',
      highlight: true
    },
    {
      title: 'IIT Madras-Boeing National Aeromodelling Competition',
      description: 'TAD participated with six teams comprising one senior team and five junior teams and all these teams sucessfully cleared the abstract round',
      year: '2024',
      highlight: false
    },
    {
      title: 'IAC-Conference by ASoI',
      description: 'TAD won RUNNER-UP at the Industrial Academia Conclave 2024 by ASoI, for designing a docking mechanism to charge electric-hybrid UAVs, supporting sustainable aviation in India',
      year: '2024',
      highlight: true
    }
  ],
  members: [
    {
      name: 'Vamsi J S',
      role: 'Team Lead',
      image: '/teams/tad/lead.jpg',
      email: 'team.lead@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/team-lead',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical Engineering',
      roll: 'me22b1031'
    },
    {
      name: 'S Deerajprasanth',
      role: 'Manager',
      image: '/teams/tad/manager1.jpg',
      email: 'tech.lead@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Electronics',
      roll: 'ec23b1066'
    },
      {
      name: 'Sannala Mithil Reddy',
      role: 'Manager',
      image: '/teams/tad/manager2.jpg',
      email: 'tech.lead@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Electronics',
      roll: 'ec23b1105'
    },
      {
      name: 'Madhamshetty Sathvika',
      role: 'PR&O Lead',
      image: '/teams/tad/pr&o-lead.jpg',
      email: 'tech.lead@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Electronics',
      roll: 'ec23b1105'
    },
     {
      name: 'Sanjay D G',
      role: 'DSA Lead',
      image: '/teams/tad/SANJAY_D_G_DSA_LEAD.jpg',
      email: 'tech.lead@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical',
      roll: 'me23b1012'
    },
    {
      name: 'Goriparthi Thanmaya',
      role: 'DSA Lead',
      image: '/teams/tad/GORIPARTHI_THANMAYA_DSA_LEAD.jpg',
      email: 'tech.lead@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Electronics',
      roll: 'ec23b1125'
    },
    {
      name: 'Jagadeesh B',
      role: 'Control Systems Lead',
      image: '/teams/tad/JAGADEESH_B_CONTROLS_LEAD.jpg',
      email: 'ec23b1062@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Electrical',
      roll: 'ec23b1062'
    },
     {
      name: 'Lingamsetty Sai Ram',
      role: 'Control Systems Lead',
      image: '/teams/tad/leadcontrols.jpg',
      email: 'ec23b1106@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Electrical',
      roll: 'ec23b1106'
    },

     {
      name: 'Dinesh Kumaran K',
      role: 'Software Lead',
      image: '/teams/tad/software-lead.jpg',
      email: 'tech.lead@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Computer Science',
      roll: 'cs23b2057'
    },
     {
      name: 'Tirumala Sai Raghava Sreekar',
      role: 'Software Lead',
      image: '/teams/tad/software-lead2.jpg',
      email: 'tech.lead@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Computer Science',
      roll: 'cs23i1034'
    },
     

  ],
  website: 'https://tad.iiitdm.ac.in'
};

function TalpadeAeroDesign() {
  return <TeamPageTemplate {...teamInfo} />;
}

export default TalpadeAeroDesign;
