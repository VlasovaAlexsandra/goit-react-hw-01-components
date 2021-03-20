import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ url, name, tag, location, followers, views, likes }) => {
    return (

        <div>
            <div>
                <img
                    src={url}
                    alt="Аватар пользователя"
                />
                <p>{name}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>

        <ul>
            <li>
                <span>Followers</span>
                    <span>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                    <span>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                    <span>{likes}</span>
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