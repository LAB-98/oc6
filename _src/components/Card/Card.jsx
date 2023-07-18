import React from 'react';
import './Card.scss';

const Card = ({ id, title, cover }) => (
  <div className='card'>
    <img src={cover} alt={title} className='card_img' />
    <h2 className='card_title'>{title}</h2>
  </div>
);

export default Card;
