import React from 'react';
import SocietyPageTemplate from '../../components/SocietyPageTemplate';

const clubData = {
  name: 'IEEE Student Branch',
  logo: '/societies/IEEE/logo.png',
  description: `The IEEE Student Branch at IIITDM Kancheepuram is the official chapter of the Institute of Electrical and Electronics Engineers (IEEE), dedicated to promoting learning, research, and innovation in electrical and electronics engineering, robotics, and emerging technologies.\nThe branch focuses on helping students build technical expertise in fields such as IoT, artificial intelligence, renewable energy systems, and embedded technologies. It encourages participation in IEEE conferences, exploration of research opportunities, and the development of innovative projects that solve real-world challenges.\nThrough its growing activities, the student branch aims to organize technical workshops, robotics challenges, and research symposiums, creating a platform for collaborative learning and technical growth.`,
  core: [
    {
      name: 'Arjun Singh',
      role: 'Branch Chair',
      image: '/images/team/arjun-singh.jpg',
      email: 'arjun.singh@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/arjunsingh',
      year: 'B.Tech 3rd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b3001'
    },
    {
      name: 'Kavya Iyer',
      role: 'Vice Chair',
      image: '/images/team/kavya-iyer.jpg',
      email: 'kavya.iyer@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/kavyaiyer',
      year: 'B.Tech 3rd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b3002'
    }
  ],
  team: [
    {
      name: 'Vikram Malhotra',
      role: 'Technical Secretary',
      image: '/images/team/vikram-malhotra.jpg',
      email: 'vikram.malhotra@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/vikrammalhotra',
      year: 'B.Tech 2nd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b3003'
    },
    {
      name: 'Ananya Das',
      role: 'Events Secretary',
      image: '/images/team/ananya-das.jpg',
      email: 'ananya.das@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/ananyadas',
      year: 'B.Tech 2nd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b3004'
    }
  ],
  links: {
    website: 'https://ieee.iiitdm.ac.in',
    instagram: 'https://instagram.com/ieee_iiitdm',
    github: 'https://github.com/ieee-iiitdm'
  }
};

function IEEE() {
  return <SocietyPageTemplate {...clubData} />;
}

export default IEEE; 