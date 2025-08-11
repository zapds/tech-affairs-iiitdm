import React from 'react';
import ClubPageTemplate from '@/components/ClubPageTemplate';

const clubData = {
  name: 'Robotics Club',
  logo: '/clubs/robotics/logo.png',
  description: `The Robotics Club at IIITDM Kancheepuram is a student-driven community dedicated to exploring and advancing the field of robotics and automation. The club provides hands-on experience in designing, building, and programming autonomous robots and automated systems, encouraging members to apply their theoretical knowledge in practical scenarios.\nStudents work on interdisciplinary projects involving embedded systems, computer vision, control systems, and mechanical design, developing solutions for real-world applications such as industrial automation, intelligent vehicles, and smart systems.\nThe club actively participates in national and international robotics competitions and conducts workshops, hackathons, and technical sessions to nurture a culture of innovation, teamwork, and problem-solving within the robotics domain.`,
  core: [
    {
      name: 'Dhanvanth Saravanan',
      role: 'Club Lead',
      image: '/clubs/robotics/headcores/dhanvanth.jpg',
      email: 'ec23b1097@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/dhanvanth-saravanan-366956288',
      roll: 'ec23b1097',
    },
    {
      name: 'Hemachandra K S',
      role: 'Software Lead',
      image: '/images/team/jane-smith.jpg',
      email: 'me23b2020@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/hemachandra-k-s-323382332',
      roll: 'me23b2020',
    },
  ],
  links: {
    website: '#',
    instagram: '#',
    github: '#'
  }
};

function RoboticsClub() {
  return <ClubPageTemplate {...clubData} />;
}

export default RoboticsClub;