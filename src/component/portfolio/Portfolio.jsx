import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/im1.jpg"
import IMG2 from "../../assets/im2.jpg"
import IMG3 from "../../assets/im3.jpg"
import IMG4 from "../../assets/im4.jpg"
import IMG5 from "../../assets/im6.jpeg"

const Portfolio = () => {
  return (
<section id='portfolio'>
  <h5>My recent Work</h5>
  <h2> Portfolio</h2>

  <div className="container portfolio__container">
    <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG1} alt="" />
      </div>
      <h3>This is portfolio Item Title</h3>
      <a href="https://github.com/darshanbr7/Apm" className='btn' target="_blank">Github</a>
      <a href="https://cdn.dribbble.com/userupload/4151853/file/original-0d41c8037d845b58b6abed8c31ff8fbf.jpg?compress=1&resize=450x338&vertical=top" className='btn btn-primary' target="_blank">Live Demo</a>
    </article>
    <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG2} alt="" />
      </div>
      <h3>This is portfolio Item Title</h3>
      <div className='portfolio__item-cta'>
      <a href="https://github.com/darshanbr7/Apm" className='btn' target="_blank">Github</a>
      <a href="https://cdn.dribbble.com/userupload/4151853/file/original-0d41c8037d845b58b6abed8c31ff8fbf.jpg?compress=1&resize=450x338&vertical=top" className='btn btn-primary' target="_blank">Live Demo</a>
      </div>
    </article>
    <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG3} alt="" />
      </div>
      <h3>This is portfolio Item Title</h3>
      <div className='portfolio__item-cta'>
      <a href="https://github.com/darshanbr7/Apm" className='btn' target="_blank">Github</a>
      <a href="https://cdn.dribbble.com/userupload/4151853/file/original-0d41c8037d845b58b6abed8c31ff8fbf.jpg?compress=1&resize=450x338&vertical=top" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>
    <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG4} alt="" />
      </div>
      <h3>This is portfolio Item Title</h3>
      <div className='portfolio__item-cta'>
      <a href="https://github.com/darshanbr7/Apm" className='btn' target="_blank">Github</a>
      <a href="https://cdn.dribbble.com/userupload/4151853/file/original-0d41c8037d845b58b6abed8c31ff8fbf.jpg?compress=1&resize=450x338&vertical=top" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>
    <article className='portfolio__item'>
      <div className="portfolio__item-image">
      <img src={IMG5} alt="" />
      </div>
      <h3>This is portfolio Item Title</h3>
      <div className='portfolio__item-cta'>
      <a href="https://github.com/darshanbr7/Apm" className='btn' target="_blank">Github</a>
      <a href="https://cdn.dribbble.com/userupload/4151853/file/original-0d41c8037d845b58b6abed8c31ff8fbf.jpg?compress=1&resize=450x338&vertical=top" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>
  </div>
</section>
  )
}

export default Portfolio