import React from 'react'
import "./test.css"
import IM1 from "../../assets/im6.jpeg"

import {  Pagination,  } from 'swiper';

import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/pagination'; 


const data = [
{
  avatar: IM1,
  name: 'Tina Snow',
  review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'},
  
 { avatar: IM1,
   name: 'Shatta Wale',
  review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'},
  
  {
  avatar: IM1,
  name: 'Kwame Despite',
  review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'},
  
  {
  avatar: IM1,
  name: 'Nana Ama McBrown',
   review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimusi?'}
  ]
  
  

const Testimonia = () => {
  return (
    <section id='text'>
   <h5> Review from the client</h5>
   <h2> Testimonials</h2>
   <Swiper className='container testimonial__container'
   // install Swiper modules 
   modules={[Pagination]}

spaceBetween={40}

slides PerView={1}
pagination={{ clickable: true }}

>
   {
    data.map(({avatar,name,review},index)=>{
      return(
        <SwiperSlide key={index}
        className='testimonial'>
        <div className="client__avatar">
          <img src={avatar}  />
         
        </div>
        <h5 className='client__name'> {name}</h5>
          <small className='client__review'>{review}
          </small>
       </SwiperSlide>)
      
    })
   }
</Swiper>

    </section>
  )
}

export default Testimonia