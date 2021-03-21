import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css'

const Profile = ({ url, name, tag, location, followers, views, likes }) => {
    return (

        <div className="profile">
            <div className="description">
                <img
                    src={url}
                    alt="Аватар пользователя"
                    width="250"
                    className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

        <ul className="stats">
                <li className="stat">
                <span className="prof-label">Followers</span>
                    <span className="quantity">{followers}</span>
            </li>
                <li className="stat">
                    <span className="prof-label">Views</span>
                    <span className="quantity">{views}</span>
            </li>
                <li className="stat">
                    <span className="prof-label">Likes</span>
                    <span className="quantity">{likes}</span>
            </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Profile;