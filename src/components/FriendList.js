import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
    <ul>
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
    id: PropTypes.number.isRequired,
}

export default FriendList;
