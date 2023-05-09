import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__item__image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This Is  The Portfolio Items Title</h3>
          <div className="portfolio__items-cta">
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://dribbble.com/Alien_pixel" className='btn btn-primary' target='_blank'></a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item__image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This Is  The Portfolio Items Title</h3>
          <div className="portfolio__items-cta">
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://dribbble.com/Alien_pixel" className='btn btn-primary' target='_blank'></a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item__image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This Is  The Portfolio Items Title</h3>
          <div className="portfolio__items-cta">
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://dribbble.com/Alien_pixel" className='btn btn-primary' target='_blank'></a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item__image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This Is  The Portfolio Items Title</h3>
          <div className="portfolio__items-cta">
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://dribbble.com/Alien_pixel" className='btn btn-primary' target='_blank'></a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item__image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This Is  The Portfolio Items Title</h3>
          <div className="portfolio__items-cta">
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://dribbble.com/Alien_pixel" className='btn btn-primary' target='_blank'></a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item__image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This Is  The Portfolio Items Title</h3>
          <div className="portfolio__items-cta">
          <a href="http://github.com" className='btn' target='_blank'>Github</a>
          <a href="http://dribbble.com/Alien_pixel" className='btn btn-primary' target='_blank'></a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio