import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

export class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }
  componentWillMount = () => {
    $.get("http://localhost:5000/get-albums", (response) => {
      const next_state = {};
      this.setState({albums: response});
    })
  }
  render() {
    const album_list = Object.keys(this.state.albums).map((key) => {
      return (
        <li key={key} className="col-sm-2">
          <a href={'/albums/'+key}>{this.state.albums[key]}</a>
        </li>
      );
    });

    return (
      <div className="container">
        <ul className="row">
          { album_list }
        </ul>
      </div>
    );
  }
}
// <Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox}/>
const PHOTO_SET = [
  {
    src: '../images/1.jpg',
    width: 681,
    height: 1024,
    alt: 'image 1',
  },
  {
    src: '../images/2.jpg',
    width: 760,
    height: 1000,
    alt: 'image 1',
  },
  {
    src: '../images/3.jpg',
    width: 681,
    height: 1024,
    alt: 'image 1',
  }
];
