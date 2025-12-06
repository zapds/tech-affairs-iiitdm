import React from 'react';
import TeamPageTemplate from '../../../components/TeamPageTemplate';

const teamInfo = {
  name: 'Team Nira',
  club: 'AUV Society',
  logo: '/teams/nira/logo.jpg',
  description: `Team Nira is the official autonomous underwater vehicle (AUV) team of IIITDM Kancheepuram, representing the institute in premier national and international competitions. The team specializes in designing, engineering, and programming self-reliant underwater systems capable of executing complex tasks without human input. At the intersection of mechanical engineering, electronics, computer vision, and control systems, Team Nira brings together a multidisciplinary group of students passionate about pushing the boundaries of underwater robotics. The team’s work reflects a strong commitment to research-driven development, innovation, and technical excellence. Team Nira has proudly participated in esteemed competitions such as the Singapore Autonomous Underwater Vehicle Challenge (SAUVC) and NIOT-SAVe, consistently showcasing its capabilities on competitive global platforms.`,
  achievements: [
      {
      title: 'Aqua Quest',
      description: 'Hosted a Nationwide ROV competition on Feb 2024',
      year: '2024',
      highlight: true
    },
      {
      title: 'Research Paper-5',
      description: 'Optimisation of Visual SLAM for Underwater Robotics using OAK-D Smart Camera OCEANS 2024 ',
      year: '2024',
      highlight: false
    },
    {
      title: 'Singapore AUV Challenge (SAUVC)',
      description: 'Secured 5th position globally in the on-site of the prestigious international competition, out of 41 teams from 13 countries.',
      year: '2025',
      highlight: true
    },
    {
      title: 'AqUaVision-IIT Madras',
      description: 'Secured 2nd place nationally in this competition hosted by IIT Madras, in collaboration with IEEE OES Madras Chapter and NIOT Chennai',
      year: '2025',
      highlight: false
    },
    {
      title: 'International AUV Challenge',
      description: 'Secured 1st place in this nationwide AUV competition hosted by IIT Bombay',
      year: '2025',
      highlight: true
    }
  ],
  members: [
    {
      name: 'Abinav Rajagopal',
      role: 'Team Lead',
      image: '/teams/nira/lead1.jpg',
      email: 'team.lead@iiitdm.ac.in',
      linkedin: 'https://www.linkedin.com/in/abinav-rajagopal-2ba65a286/',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical Engineering',
      roll: 'me23b1001'
    },
    {
      name: 'Shree Mithun N',
      role: 'Team Lead',
      image: '/teams/nira/lead2.jpg',
      email: 'tech.lead@iiitdm.ac.in',
      linkedin: 'https://www.linkedin.com/in/shree-mithun-n-43ba49241/',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical Engineering',
      roll: 'me23b2024'
    },
  ],
  website: '#', // Add the actual website if available
};

function AUV() {
  return <TeamPageTemplate {...teamInfo} />;
}

export default AUV;