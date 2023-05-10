import React from 'react'
import { MdWorkOutline } from 'react-icons/md'
import {BsCheck} from 'react-icons/bs'
import {TbAward} from 'react-icons/tb'
import {HiOutlineLanguage} from 'react-icons/hi2'
import {GiHobbitDwelling} from 'react-icons/gi'
import {TbCertificate} from 'react-icons/tb'
import "./services.css"
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Service = () => {
  return (
    <section id='service'>
      <h5>My certificates</h5>
      <h2>My Achievement's</h2>
      <Swiper className="container certificate_container"
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
      >
        <SwiperSlide className='cetificate'>
          <div className="certificate_icon">
            <h2>Intenship's</h2>
            <MdWorkOutline />
          </div>
          <div className="certificate_data">
            <ul>
              <li>
                <BsCheck /> 
                I Completed a six month's Certificate internship as a "Fullstack Developer" At Edureka With having a skills on both Frontend and Backend technologies.technologies i used in this internship are Node js , React js, Mongo db , Html, css , Bootstrap . I  Also designed some website in this internship.
              </li>
              <li>
                <BsCheck /> 
                I Completed a certificate  internship as a Campus Ambassador in "IIT Delhi-Rendezvous" Through internshala.
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className='cetificate'>
          <div className="certificate_icon">
            <h2>Achievement's</h2>
            <TbAward />
          </div>
          <div className="certificate_data">
            <ul>
              <li>
                <BsCheck /> 
               I Got an Super Intern Certificate as Full Stack Developer from Edureka For building a fully-featured web product in internship.
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className='cetificate'>
          <div className="certificate_icon">
            <h2>Certificate's</h2>
            <TbCertificate />
          </div>
          <div className="certificate_data">
            <ul>
              <li>
                <BsCheck /> 
               I Have a Certificate in FullStack Web Deleopment Offred by Edureka
              </li>
              <li>
                <BsCheck /> 
               I Completed a Certification Workshop on "Embedded Systems" offred by the JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY,KAKINADA.
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className='cetificate'>
          <div className="certificate_icon">
            <h2>Languages's</h2>
            <HiOutlineLanguage />
          </div>
          <div className="certificate_data">
            <ul>
              <li>
                <BsCheck /> English
              </li>
              <li>
                <BsCheck /> Hindi
              </li>
              <li>
                <BsCheck /> Telugu
              </li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className='cetificate'>
          <div className="certificate_icon">
            <h2>Hobbie's</h2>
            <GiHobbitDwelling />
          </div>
          <div className="certificate_data">
            <ul>
              <li>
                <BsCheck />
               Watching Movies/Series
              </li>
              <li>
                <BsCheck />
               Web Designing
              </li>
              <li>
                <BsCheck />
               Playing Game's
              </li>
              <li>
                <BsCheck />
               Rading Bike's
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Service
