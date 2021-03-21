import React from 'react';
import PropTypes from 'prop-types';
import './Friends.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className="friend-item">
        <span className="status">{isOnline}</span>
        <img className="friend-avatar" src={avatar} alt="Аватар пользователя" width="48" />
        <p className="name">{name}</p>
    </li>
   
)

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;