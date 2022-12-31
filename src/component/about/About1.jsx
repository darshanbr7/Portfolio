import React from 'react'
import './about.css'
import ME from "../../assets/im4.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {FaFolderPlus} from "react-icons/fa"

const About = () => {
  return (
    <section id='about'> 
    <h5>Get to Know</h5>
    <h2> About Me</h2>
    <div className='container about__container'>
   <div className='about__me'>
      <div className="about__me-image">
        <img src={ME} alt=" About Image" />
      </div>
   </div>
   <div className="about__content">
    <div className="about__cards">
      <article className='about__card'>
        <FaAward  className="about__icon"/>
        <h5> Experence</h5>
        <small> Fresher</small>
      </article>

      <article className='about__card'>
        <FiUsers  className="about__icon"/>
        <h5> Clints</h5>
        <small> All Over</small>
      </article>

      <article className='about__card'>
        <FaFolderPlus  className="about__icon"/>
        <h5> Project</h5>
        <small> 10+ complited</small>
      </article>

    </div>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt doloremque modi sed culpa provident aspernatur eligendi natus quaerat. Iusto voluptatibus quae laborum, consequatur laudantium nemo. Quas, repellendus! Aliquid, sunt?
    </p>
    <a href="#contact" className='btn btn-primary '> Lets talk</a>
   </div>
    </div>
     </section>
  )
}

export default About