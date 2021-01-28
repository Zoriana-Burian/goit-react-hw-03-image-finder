import Loader from "react-loader-spinner";
import React, { Component } from 'react';
import s from './Loader.module.css';

export default class LoaderSpiner extends Component {
  //other logic
  render() {
      return (
        <div className={s.loader}>
         <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0} //0 secs
      />     
        </div>
      
    );
  }
}