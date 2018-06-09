import React, { Component } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const { API_KEY } = process.env;

class Search extends Component {
  state = {
    results: [],
    query: '',
  };
  handlePageChange = (path) => {
    this.setState({ results: [], query: '' });
    window.location.href = path;
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        this.setState({ results: response.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <SearchInput handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <SearchResults handlePageChange={this.handlePageChange} results={this.state.results} />
      </div>
    );
  }
}
export default Search;
