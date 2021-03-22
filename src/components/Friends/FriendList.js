import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './Friends.css';

const FriendList = ({ friends }) => (
    <ul className="friendList">
        {friends.map(({ id, avatar, name, isOnline }) => (
            
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
           
        )
        )}
    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            
        })
    ).isRequired,
};

export default FriendList;
