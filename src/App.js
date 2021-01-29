//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
//import axios from 'axios';
import newApi from './services/api-services';
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
    largeImageURL: '',
    isLoading: false,
    showModal: false,
    error: null,
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

  scrollImages = () => {
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
    this.setState({ searchQuery: query, currentPage: 1, hits: [], error: null, });
    
  }
  
  fetchHits = () => {
    
    const { currentPage, searchQuery } = this.state;
    
    this.setState({ isLoading: true });
  
    const options = { currentPage, searchQuery };
    
    newApi.fetchHitsImages(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }))
      })
      .catch(error => this.setState({error}))
      .finally(() => this.setState({ isLoading: false }));
    
    //this.scrolImages();
  }
  

  render() {
    const { hits, isLoading, showModal, largeImageURL, error } = this.state;

    return <div>
      {error && <h1> Перезавантажте, будь ласка, ще раз сторінку </h1>}
      <Section>
        
        {showModal && <Modal onClickModal={this.onToggleModal} largeImageURL={largeImageURL} />}

      <Searchbar onSubmit={this.onChangeQuery}/>
      <ImageGallery hits={hits} clickOpenModal={this.clickOpenModal} />

      {isLoading && <LoaderSpiner/>}
      
      {hits.length > 0 && !isLoading &&
          <Button onButton={this.fetchHits} onScroll={ this.scrollImages()}/>
    }
      </Section>
      
      
    </div>;
  }
}

export default App;
