import React, { Component } from 'react';
import axios from 'axios';

export class CreateAlbum extends Component {
  constructor(props) {
    super(props);
    const redirectRoute = '/albums';
    this.state = {
      album_name: '',
      redirectTo: redirectRoute,
      disabled: true,
    };
  }

  changeValue(e, type) {
    const value = e.target.value;
    const next_state = {};
    next_state[type] = value;
    this.setState(next_state);
  }

    addAlbum(e) {
      e.preventDefault();

      $.post('http://localhost:5000/create-album',
              this.state,
              (response) => console.log(response))
    }

    render() {
      return (
        <form>
          <input type='text' placeholder='Album Name' onChange={(e) => this.changeValue(e, 'name')}/>
          <input type='submit' onClick={(e) => this.addAlbum(e)}/>
        </form>
      );
    }
}
