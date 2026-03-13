import React from 'react';
import SocietyPageTemplate from '../../../components/SocietyPageTemplate';

const clubData = {
  name: 'Optica Student Chapter',
  logo: '/societies/OpticaStudentChapter/logo.webp',
  description: `The OPTICA Student Chapter at IIITDM Kancheepuram is a student-led community affiliated with OPTICA (formerly OSA - Optical Society of America), dedicated to promoting interest and research in the fields of optics, photonics, and optical communication technologies.
The chapter aims to cultivate technical knowledge and practical skills in areas such as laser systems, optical sensing, fiber optics, imaging, and photonic devices. By encouraging students to explore both fundamental and applied aspects of light-based technologies, the chapter provides a platform for collaborative learning and research discussions.
The chapter aspires to contribute to the growing global optics community by engaging students in cutting-edge research topics and encouraging innovation in light-driven technologies.`,
  core: [
    {
      name: 'Battu Siddhartha Reddy',
      role: 'Chapter President',
      image: '/societies/OpticaStudentChapter/cores/Battu_Siddhartha_Reddy_Optica_Student_Chapter_President.webp',
      email: '',
      linkedin: '',
      year: '',
      department: '',
      roll: ''
    },
    {
      name: 'Oohitha',
      role: 'Vice President',
      image: '/societies/OpticaStudentChapter/cores/OOHITHA_OPTICA_STUDENT_CHAPTER_VICE_PRESIDENT.webp',
      email: '',
      linkedin: '',
      year: '',
      department: '',
      roll: ''
    },
    {
      name: 'Duggireddy Lingari Raghu Nandan Reddy',
      role: 'Secretary',
      image: '/societies/OpticaStudentChapter/cores/Duggireddy_Lingari_Raghu_Nandan_Reddy_Optica_Student_Chapter_Secretary.webp',
      email: '',
      linkedin: '',
      year: '',
      department: '',
      roll: ''
    },
    {
      name: 'Sanisetty Nithin',
      role: 'Treasurer',
      image: '/societies/OpticaStudentChapter/cores/Sanisetty_Nithin_Optica_Student_Chapter_Treasurer.webp',
      email: '',
      linkedin: '',
      year: '',
      department: '',
      roll: ''
    },
    {
      name: 'Thanmaya',
      role: 'PRO',
      image: '/societies/OpticaStudentChapter/cores/THANMAYA_OPTICA_STUDENT_CHAPTER_PRO.webp',
      email: '',
      linkedin: '',
      year: '',
      department: '',
      roll: ''
    }
  ],
  team: [
    {
      name: 'Zara Khan',
      role: 'Technical Lead',
      image: '/images/team/zara-khan.webp',
      email: 'zara.khan@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/zarakhan',
      year: 'B.Tech 2nd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b4003'
    },
    {
      name: 'Rohan Mehta',
      role: 'Research Coordinator',
      image: '/images/team/rohan-mehta.webp',
      email: 'rohan.mehta@iiitdm.ac.in',
      linkedin: 'https://linkedin.com/in/rohanmehta',
      year: 'B.Tech 2nd Year',
      department: 'Electronics Engineering',
      roll: 'ec23b4004'
    }
  ],
  links: {
    website: 'https://optica.iiitdm.ac.in',
    instagram: 'https://instagram.com/optica_iiitdm',
    github: 'https://github.com/optica-iiitdm'
  }
};

function OpticaStudentChapter() {
  return <SocietyPageTemplate {...clubData} />;
}

export default OpticaStudentChapter;