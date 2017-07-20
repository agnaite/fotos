import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

export class Albums extends Component {
    render() {
        return (
          <div className="container">
            <Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox}/>
          </div>
        );
    }
}

const PHOTO_SET = [
  {
    src: '../images/1.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    alt: 'image 1',
  },
  {
    src: '../images/2.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    alt: 'image 1',
  },
  {
    src: '../images/3.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    alt: 'image 1',
  }
];
