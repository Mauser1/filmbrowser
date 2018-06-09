import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loading from 'react-loading-animation';
import Search from '../../components/search';
import Meta from '../../components/meta';
import Credits from './Credits';


const { API_KEY } = process.env;

export default class extends Component {
  static propTypes = {
    filmData: PropTypes.shape({
      genres: PropTypes.arrayOf(PropTypes.string),
      credits: PropTypes.shape({
        cast: PropTypes.arrayOf(PropTypes.string),
        crew: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
    url: PropTypes.string.isRequired,
  };
  state = {
    filmData: {
      genres: [],
      credits: {
        cast: [],
        crew: [],
      },
      spoken_languages: [],
    },
  };
  componentWillMount() {
    this.setState({ path: this.props.url.asPath.split('/')[2] });
  }
  componentDidMount() {
    this.fetchData();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.filmData !== this.state.filmData) {
      this.fetchData();
    }
  }
  fetchData() {
    const id = this.state.path;
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`).then((response) => {
      if (response.status !== 200) {
        return;
      }
      this.setState({ filmData: response.data });
    });
  }
  renderFilm() {
    const { filmData } = this.state;
    if (!filmData.title) {
      return <Loading />;
    }
    if (filmData) {
      return (
        <div className="film-container">
          <img
            src={
              filmData.poster_path === null
                ? `https://fakeimg.pl/330x450/515151/f2f2f2/?text=${
                    filmData.title
                  }%0A ${filmData.release_date}%0A (No image) &font_size=22`
                : `https://image.tmdb.org/t/p/w300${filmData.poster_path}`
            }
            alt={filmData.title}
          />

          <p>
            <b>Name:</b> {filmData.title}{' '}
          </p>
          <p>
            <b>Created by:</b>{' '}
            {filmData.credits.crew
              .slice(0, 1)
              .map((member, index) => `${member.name}`)}
          </p>
          <p>
            <b>Year:</b> {filmData.release_date}{' '}
          </p>
          <p>
            <b>Genre: </b>{' '}
            {filmData.genres.map((genre, index) => {
              if (index === filmData.genres.length - 1) {
                return `${genre.name}`;
              }
              return `${genre.name}, `;
            })}
          </p>
          <p>
            <b> Runtime: </b>
            {filmData.runtime} minutter
          </p>
          <p>
            <b>Spoken Lang: </b>
            {filmData.spoken_languages.map((lang, index) => {
              if (index === filmData.spoken_languages.length - 1) {
                return `${lang.name}`;
              }
              return `${lang.name}, `;
            })}
          </p>
          <p>
            <b>Description:</b> {filmData.overview}
          </p>
          <Credits
            label="Starring"
            members={this.state.filmData.credits.cast}
            creditsLength="7"
          />
          <div className="container" />
          <style jsx>{`
            .film-container {
              background: #333;
              color: white;
              display: inline;
              margin-left: 40px;
              display: block;
              padding: 0 35px 35px 35px;
              width: 88%;
              display: inline-block;
              margin-bottom: 35px;
              transition: width 0.7s ease 0.125s;
            }

            .film-container img {
              float: left;
              display: inline-block;
              padding: 15px;
              position: relative;
            }

            @media (max-width: 425px) {
              .film-container {
                margin: 0 auto;
                padding: 0px;
                width: 100%;
                text-align: center;
                display: flex;
                flex-flow: column;
              }
              .film-container img {
                height: auto;
                box-sizing: border-box;
                align-self: center;
              }
            }
          `}
          </style>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="film-page">
        <Meta />
        <Search />
        {this.renderFilm()}
      </div>
    );
  }
}
