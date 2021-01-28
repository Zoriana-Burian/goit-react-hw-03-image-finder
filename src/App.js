//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';


class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
  };
 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, hits: [] });
    
  }
  
  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    this.setState({ isLoading: true });
    axios.get(`https://pixabay.com/api/?key=19054407-f71c417dea239df63beb23abd&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
      //  console.log(response.data.hits);
        this.setState(prevState => ({
          hits: [...prevState.hits, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }))
      }).finally(() => this.setState({isLoading: false}));
  }
  

  render() {
    const { hits, isLoading } = this.state;
    return <div>
      <Searchbar onSubmit={this.onChangeQuery}/>
      
      <ul className="ImageGallery">
        {hits.map(({ id, webformatURL, largeImageURL }) => <li key={id}>
         <a href={webformatURL}><img src={largeImageURL} alt=''></img></a>
  </li>)}
      </ul>

      {isLoading && <h1>Завантаження...</h1>}
      
      {hits.length > 0 && !isLoading &&
        <button type='button' onClick={this.fetchHits}>Load more</button>
    }
      
    </div>;
  }
}

export default App;
