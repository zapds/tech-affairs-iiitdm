import React from 'react';
import TeamPageTemplate from '../../../../components/TeamPageTemplate';

const teamInfo = {
  name: 'Team Astra',
  club: 'SAE Club',
  logo: '/teams/astra/logo.png',
  description: `Team Astra is the official Aero Design team of IIITDM Kancheepuram, operating under the SAE Club. The team represents the institute at esteemed platforms such as the SAE Aero Design Competition and the SAE Collegiate Design Series, where student engineers from across the globe showcase their skills in aerospace innovation. Specializing in the design, construction, and flight of radio-controlled aircraft, Team Astra develops systems capable of executing mission-specific tasks such as payload delivery and performance-based challenges. The team blends core knowledge in aerodynamics, structural engineering, and flight control to create efficient, high-performing aircraft. With a strong emphasis on practical learning and technical excellence, Team Astra continues to push the boundaries of aerial mobility, proudly reflecting the institute’s commitment to innovation in aerospace engineering.`,
  achievements: [
    {
      title: 'IIT Roorkee Autonomous Drone Challenge',
      description: 'Top 4 position nationally among top institutions across India.The team successfully completed the assigned autonomous mission, showcasing real-time drone decision-making and navigation',
      year: '2024',
      highlight: true
    },
    {
      title: 'SAE Aerothon',
      description: `Qualified in Phase I among Top 20 teams out of 81+ participants and successfully executed both autonomous and manual operations in Phase II`,
      year: '2024',
      highlight: false
    },
    {
      title: 'ISRO IROC-U',
      description: 'Successfully qualified for Round 2 of ISRO robotics Challenge, competition, showcasing our capability in drone-based autonomous missions',
      year: '2025',
      highlight: true
    }
  ],
  members: [
    {
      name: 'Abhishek Sen',
      role: 'Captain',
      image: '/teams/astra/members/lead.jpg',
      email: 'team.lead@iiitdm.ac.in',
      linkedin: 'https://www.linkedin.com/in/abhishek-sen-aab105259/',
      year: 'B.Tech 3rd Year',
      department: 'Aerospace Engineering',
      roll: 'ec22b1098'
    },
    {
      name: 'Neshanth R',
      role: 'Vice-Captain',
      image: '/teams/astra/members/tech-lead.jpg',
      email: 'tech.lead@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/tech-lead',
      year: 'B.Tech 3rd Year',
      department: 'Mechanical Engineering',
      roll: 'me22b2030'
    },
  ],
  website: '#', // Add the actual website if available
};

function SAEAerothon() {
  return <TeamPageTemplate {...teamInfo} />;
}

export default SAEAerothon; 
