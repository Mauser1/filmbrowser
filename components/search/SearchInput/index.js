import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ query, handleChange, handleSubmit }) => (
  <form className="search" onSubmit={handleSubmit}>
    <input
      value={query}
      onChange={handleChange}
      type="text"
      placeholder="Search for movie"
      required
    />
    <style jsx>{`
      .search {
        align-items: center;
        width: 100%;
        display: flex;
        justify-content: center;
        pointer-events: none;
        font-style: bold;
        color: white;
      }

      .search input {
        font-weight: 300;
        font-size: 14px;
        height: 37px;
        width: 200px;
        background: white;
        color: black;
        border: 0;
        outline: none;
        padding: 0 10px;
        pointer-events: all;
        transition: width 0.7s ease 0.125s;
        margin: 20px;
      }

      .search input:focus {
        width: 400px;
      }
      .search input::placeholder {
        color: black;
      }
    `}
    </style>
  </form>
);
SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
