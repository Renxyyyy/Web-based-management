import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what inside of Rizal Village</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/imagePlayground.jpg'
              text='Enjoy the playground'
              label='Playground'
              path='about'
            />
            <CardItem
              src='images/imageSigns.jpg'
              text='Road Signs that name from the novel'
              label='Roads'
              path='about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/imageCourt.jpg'
              text='Try to play on the court of JFC'
              label='Court'
              path='create'
            />
            <CardItem
              src='images/image2.jpg'
              text='Sign up now to get a chance to reserve a time to the court'
              label='Login'
              path='login'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
