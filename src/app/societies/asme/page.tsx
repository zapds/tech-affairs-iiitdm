import React from "react";
import SocietyPageTemplate from "../../../components/SocietyPageTemplate";

const clubData = {
  name: "ASME Student Section",
  logo: "/societies/ASMEStudentSection/logo.webp",
  description: `A global community of engineers with the aim of gaining
  practical knowledge beyond the classroom through
  workshops, competitions, and networking with industry
  professionals. Enhance your technical and soft skills, and
  connect with a worldwide network of engineering leaders.
  Step into the future of engineering with us!`,
  core: [
    {
      name: "Vikas K A",
      role: "Chairperson",
      image: "/societies/ASMEStudentSection/vikas.png",
      email: "me22b1021@iiitdm.ac.in",
      linkedin: "https://in.linkedin.com/in/vikas2004",
      year: "B.Tech 3rd Year",
      department: "Mechanical Engineering",
      roll: "me22b1021",
    },
    {
      name: "Prahaladh A R",
      role: "Vice Chairperson",
      image: "/societies/ASMEStudentSection/prahalad.png",
      email: "priya.sharma@iiitdm.ac.in",
      linkedin: "https://in.linkedin.com/in/prahaladh-a-r",
      year: "B.Tech 3rd Year",
      department: "Mechanical Engineering",
      roll: "me22b1022",
    },
  ],
  links: {
    website: "#",
    instagram: "#",
    github: "#",
  },
};

function ASMEStudentSection() {
  return <SocietyPageTemplate {...clubData} />;
}

export default ASMEStudentSection;
