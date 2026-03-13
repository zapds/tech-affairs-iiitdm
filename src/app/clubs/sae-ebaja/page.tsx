import React from 'react';
import NewClubPageTemplate from '@/components/NewClubPageTemplate';

const clubData = {
  name: 'SAE eBaja Club – Revolt Racers',
  logo: '/teams/revolt/logo.webp',
  introduction: `The SAE eBaja Club – Revolt Racers 1.0, established in 2024, is a student-driven team at IIITDM Kancheepuram focused on the design and development of electric all-terrain vehicles for SAE eBAJA competitions. It brings together students interested in automotive engineering and provides a hands-on platform to apply theoretical concepts to real-world challenges. The club aims to build competent engineers capable of designing efficient electric off-road vehicles through practical learning and innovation. Members work across key areas such as vehicle dynamics, powertrain systems, brakes, chassis design, electronics and manufacturing, gaining exposure to the complete vehicle development process. What sets the club apart is its focus on end-to-end product development, where students are involved from initial design to final testing.`,
  timeline: [
    { year: 2024, event: 'Club Formation', description: 'The club was established with a team of around 25 members, aiming to design and build an electric ATV for SAE eBAJA.' },
    { year: 2025, event: 'SAE eBAJA Participation', description: 'The team reached Phase 3 of the competition but was eliminated after failing the Mechanical Technical Inspection.' },
    { year: 2026, event: 'SAE eBAJA 2026', description: 'Cleared all safety scrutiny tests and participated in both static and dynamic events. Successfully completed the endurance event. Achieved All India Rank 36, Tamil Nadu Rank 7, and CFTI Rank 2.' },
    { year: 2026, event: 'Static Events Performance', description: 'CAE Event – Rank 12, Sustainability – Rank 16, Cost Event – Rank 21, Sales Event – Rank 26, Design Event – Rank 34.' },
    { year: 2026, event: 'Dynamic Events Performance', description: 'Sled Pull – Rank 18, Endurance Event – Rank 34. Acceleration and maneuverability were attempted but not ranked due to time limits.' },
  ],
  projects: [
    {
      name: 'SAE eBAJA 2026 Vehicle',
      description: 'Designed and built an electric all-terrain vehicle that cleared all safety scrutiny tests and successfully completed the endurance event at SAE eBAJA 2026. Achieved All India Rank 36, TN Rank 7, and CFTI Rank 2.',
      image: '/teams/revolt/logo.webp',
      technologies: ['Vehicle Dynamics', 'Powertrain', 'Chassis Design', 'CAE', 'SolidWorks', 'ANSYS'],
      themeColor: '#F44336',
    },
    {
      name: 'SAE eBAJA 2027 Preparation',
      description: 'Currently working on open house and ignition for recruiting new members for the 2027 SAE eBAJA team. Internal training sessions conducted on CAD, SolidWorks, and ANSYS. Planning the next iteration of the vehicle based on documented performance data.',
      image: '/teams/revolt/logo.webp',
      technologies: ['CAD', 'SolidWorks', 'ANSYS', 'Manufacturing'],
      themeColor: '#FF9800',
    },
  ],
  gallery: [
    { src: '/clubs/sae-ebaja/Screenshot from 2026-03-05 19-06-00.webp', caption: 'Team photo after clearing the technical inspection.' },
    { src: '/clubs/sae-ebaja/Screenshot from 2026-03-05 19-06-15.webp', caption: 'Group photo after participating in dynamic events.' },
    { src: '/clubs/sae-ebaja/Screenshot from 2026-03-05 19-06-40.webp', caption: 'The vehicle (E34) at the endurance race.' },
    { src: '/clubs/sae-ebaja/Screenshot from 2026-03-05 19-06-55.webp', caption: 'The vehicle chassis during manufacturing.' },
  ],
  core: [
    {
      name: 'Harish N',
      role: 'Team Captain',
      image: '/teams/revolt/captain.webp',
    },
    {
      name: 'Gurubaran V',
      role: 'Vice Captain',
      image: '/teams/revolt/vice-captain.webp',
    },
    {
      name: 'Keshavprasad',
      role: 'Manager',
      image: '/teams/revolt/manager.webp',
    },
    {
      name: 'Shricharan R G',
      role: 'Joint Manager',
      image: '/teams/revolt/joint-manager.webp',
    },
  ],
  links: {
    instagram: 'https://www.instagram.com/revolt_racers_iiitdm/',
  }
};

function SAEeBaja() {
  return <NewClubPageTemplate {...clubData} />;
}

export default SAEeBaja;
