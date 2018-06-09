import React from 'react';
import PropTypes from 'prop-types';

const Credits = ({ members, label = null, creditsLength = 3 }) => (
  <div className="credits">
    <h2>{label}</h2>
    <div className="members">
      {members.slice(0, creditsLength).map((member, index) => (
        <div>
          <img
            src={
              members[index].profile_path === null
                ? 'https://fakeimg.pl/200x300/515151/f2f2f2/?text=No Image'
                : `https://image.tmdb.org/t/p/w300${
                    members[index].profile_path
                  }`
            }
            alt={members[index].name}
          />
          <p>{members[index].name}</p>
        </div>
      ))}
    </div>
    <style jsx>
      {`
        .credits {
          display: flex;
          flex-flow: column;
        }
        .credits .members {
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;
        }

        .credits .members p {
          width: 20px;
        }

        .credits img {
          height: 200px;
        }
        @media (max-width: 425px) {
          .credits {
            display: flex;
            flex-flow: column;
          }
          .credits .members {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            width: inherit;
          }
          .credits img {
            box-sizing: border-box;
            align-self: center;
          }
      `}
    </style>
  </div>
);

Credits.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
  })),
  label: PropTypes.string,
  creditsLength: PropTypes.number.isRequired,
};

Credits.defaultProps = {
  members: [],
  label: null,
};
export default Credits;
