import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import cake from '../../assets/cake.png';
import coaching from '../../assets/coaching.png';
import hotel from '../../assets/hotel.png';
import netflix from '../../assets/netflix.png';
import burger from "../../assets/burger.png";
import './projects.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="projectCard">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <div className="projectInfo">
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </a>
  );
}
function Projects() {
  return (
    <section id="projects" className="projects">
      <h1 className="sectionTitle">Projects</h1>
      <Swiper
        pagination={{
          type: "bullets",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper"
      >
        <SwiperSlide>
          <ProjectCard
            src={coaching}
            link="https://coaching-pearl.vercel.app/"
            h3="Coaching"
            p="Teaching App"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            src={cake}
            link="https://cake-web-psi.vercel.app/"
            h3="Cakes"
            p="Restaurant"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            src={hotel}
            link="https://hotel-website-zeta-five.vercel.app/"
            h3="Hotel"
            p="Hotel website"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            src={netflix}
            link="https://netflix-clone-website-mu.vercel.app/"
            h3="Netflix"
            p="Netflix Clone App"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard
            src={burger}
            link="https://efood-burger.vercel.app/"
            h3="Burger"
            p="Fast Food website"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Projects;