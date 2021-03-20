import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li>
        <span>{isOnline}</span>
        <img src={avatar} alt="Аватар пользователя" width="48" />
        <p>{name}</p>
    </li>
   
)

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;