//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';


class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
  };
 

  onChangeQuery = query => {
   // console.log(query)
    axios.get(`https://pixabay.com/api/?key=19054407-f71c417dea239df63beb23abd&q=${query}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
      //  console.log(response.data.hits);
        this.setState({
          hits: response.data.hits,
        })
      });
    }
  

  render() {
    const { hits } = this.state;
    return <div>
      <Searchbar onSubmit={this.onChangeQuery}/>
      <ul className="ImageGallery">
        {hits.map(({ id, webformatURL, largeImageURL }) => <li key={id}>
         <a href={webformatURL}><img src={largeImageURL} alt=''></img></a>
  </li>)}
</ul>

      <button type='button'>Load more</button>
    </div>;
  }
}

export default App;
