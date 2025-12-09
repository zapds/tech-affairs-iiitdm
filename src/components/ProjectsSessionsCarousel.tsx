"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProjectCard from './ProjectCard'; // Make sure the path is correct

const projectsOrSessions = [
  {
    name: 'Project Alpha - AI in Education',
    image: '/grids-dark.svg',
    themeColor: '#8A2BE2', // Example theme color
  },
  {
    name: 'Session on Web Development',
    image: '/grids-light.svg',
    themeColor: '#00BFFF', // Example theme color
  },
  {
    name: 'Project Beta - Robotics Challenge',
    image: '/grids-dark.svg',
    themeColor: '#FF4500', // Example theme color
  },
  {
    name: 'Session on Machine Learning Basics',
    image: '/grids-light.svg',
    themeColor: '#32CD32', // Example theme color
  },
];

export default function ProjectsSessionsCarousel() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{paddingBottom: '60px'}}
      >
        {projectsOrSessions.map((item, index) => (
          <SwiperSlide key={index} style={{
            width: '400px',
            height: '400px'
          }}>
            <ProjectCard 
              name={item.name} 
              image={item.image} 
              themeColor={item.themeColor} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}