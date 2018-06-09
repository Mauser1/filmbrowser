import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ results, handlePageChange }) => {
  if (results.length === 0) {
    return null;
  }
  return (
    <ul className="results">
      {results.map((film, index) => (
        <li
          className="film-preview"
          key={index}
          onClick={() => handlePageChange(`/film/${results[index].id}`)}
        >
          <img
            src={
              results[index].poster_path === null
                ? `https://fakeimg.pl/200x300/515151/f2f2f2/?text=${
                    results[index].title
                  } %0A ${
                    results[index].release_date
                  }%0A (No image) &font_size=22`
                : `https://image.tmdb.org/t/p/w200${results[index].poster_path}`
            }
            alt={results[index].title}
          />
          <div className="content">
            <b>{results[index].title}</b>
            <p>{`Originalt sprog: ${results[index].original_language}`}</p>
            <p>{results[index].release_date}</p>
          </div>
        </li>
      ))}
      <style jsx>{`
        .results {
          color: white;
          position: absolute;
          list-style-type: none;
          background-color: grey;
          z-index: 999;
          text-align: left;
          margin: 0 auto;
          text-align: center;
          transition: width 0.7s ease 0.125s;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
          background: rgb(30, 87, 153);
          min-height: 1000px;
          /* Old browsers */
          background: -moz-linear-gradient(
            left,
            rgba(30, 87, 153, 1) 0%,
            rgba(44, 44, 44, 1) 0%,
            rgba(51, 51, 51, 1) 25%,
            rgba(51, 51, 51, 1) 25%,
            rgba(51, 51, 51, 1) 75%,
            rgba(44, 44, 44, 1) 100%
          );
          /* FF3.6-15 */
          background: -webkit-linear-gradient(
            left,
            rgba(30, 87, 153, 1) 0%,
            rgba(44, 44, 44, 1) 0%,
            rgba(51, 51, 51, 1) 25%,
            rgba(51, 51, 51, 1) 25%,
            rgba(51, 51, 51, 1) 75%,
            rgba(44, 44, 44, 1) 100%
          );
          /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(
            to right,
            rgba(30, 87, 153, 1) 0%,
            rgba(44, 44, 44, 1) 0%,
            rgba(51, 51, 51, 1) 25%,
            rgba(51, 51, 51, 1) 25%,
            rgba(51, 51, 51, 1) 75%,
            rgba(44, 44, 44, 1) 100%
          );
          /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#2c2c2c', GradientType=1);
          /* IE6-9 */
        }
        .results li {
          float: left;
        }
        .results a {
          text-decoration: none;
        }

        .film-preview {
          position: relative;
        }

        .film-preview .content {
          position: absolute;
          transition: 0.5s ease;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 0.5s ease;
          background-color: #333;
          cursor: pointer;
        }

        .film-preview img {
          height: 300px;
        }

        .film-preview:hover .img {
          opacity: 0.3;
        }

        .film-preview:hover .content {
          opacity: 1;
        }

        .film-preview {
          height: 300px;
        }
      `}
      </style>
    </ul>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    popularity: PropTypes.number,
    vote_count: PropTypes.number,
    vote_average: PropTypes.number,
    video: PropTypes.bool,
  })),
  handlePageChange: PropTypes.func.isRequired,
};
SearchResults.defaultProps = {
  results: [],
};

export default SearchResults;
