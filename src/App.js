//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import LoaderSpiner from './components/Loader/Loader';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    })); 
  }

  clickOpenModal = e => {
    this.setState({
      largeImageURL: e.target.dataset.source}
  )
    this.onToggleModal();
  }

  scrolImages = () => {
     window.scrollBy({
  top: document.documentElement.clientHeight - 100,
  behavior: 'smooth',
});
  }
 
 
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
      }).finally(() => this.setState({ isLoading: false }));
    
    //this.scrolImages();
  }
  

  render() {
    const { hits, isLoading, showModal, largeImageURL } = this.state;

    return <div>
      <Section>
        {showModal && <Modal onClickModal={this.onToggleModal} largeImageURL={largeImageURL} />}

      <Searchbar onSubmit={this.onChangeQuery}/>
      <ImageGallery hits={hits} clickOpenModal={this.clickOpenModal} />

      {isLoading && <LoaderSpiner/>}
      
      {hits.length > 0 && !isLoading &&
          <Button onButton={this.fetchHits} onScrol={ this.scrolImages()}/>
    }
      </Section>
      
      
    </div>;
  }
}

export default App;
