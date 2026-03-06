"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTheme } from '@mui/material/styles';
import ProjectCard from './ProjectCard'; // Make sure the path is correct

const projectsOrSessions = [
  {
    name: 'Project Alpha - AI in Education',
    themeColor: '#8A2BE2', // Example theme color
  },
  {
    name: 'Session on Web Development',
    themeColor: '#00BFFF', // Example theme color
  },
  {
    name: 'Project Beta - Robotics Challenge',
    themeColor: '#FF4500', // Example theme color
  },
  {
    name: 'Session on Machine Learning Basics',
    themeColor: '#32CD32', // Example theme color
  },
];

export default function ProjectsSessionsCarousel() {
  const theme = useTheme();
  const gridImage = theme.palette.mode === 'dark' ? '/grids-light.svg' : '/grids-dark.svg';
  const isDarkMode = theme.palette.mode === 'dark';

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
              image={gridImage} 
              themeColor={item.themeColor} 
              isDarkMode={isDarkMode}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
