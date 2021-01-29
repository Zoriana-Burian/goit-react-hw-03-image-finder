import React, { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)   
        }

    componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    }
 
    handleKeyDown = e => {
        if (e.code === 'Escape') { 
                this.props.onClickModal();
            }}

    handleBackdrop = e => {
        if (e.currentTarget === e.target) {
            this.props.onClickModal();
        }
    }
    render() {
        return createPortal(
            <div className={s.Overlay} onClick={this.handleBackdrop}>
                <div><img className={s.Modal} src={this.props.largeImageURL} alt='' /></div>
            </div>,
            modalRoot
        );
    }
}

Modal.propTypes = {
    onClickModal: PropTypes.func.isRequired,
}

export default Modal;