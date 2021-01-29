import React, { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = {
        query: '',
    }

    handlerChange = event => {
        this.setState({ query: event.currentTarget.value });
    };

    handleSubmit = e => {
       e.preventDefault();

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }

    render() {
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
    </button>

         <input
       onChange={this.handlerChange}
      className={s.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired, 
}

export default Searchbar;