import React from 'react';
import Profile from './components/Profile';
import userProfile from './user.json';

import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/FriendList';
import friends from './friends.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';


const App = () => {
    return (
        <div>
            
            <Profile
                url={userProfile.avatar}
                name={userProfile.name}
                tag={userProfile.tag}
                location={userProfile.location}
                followers={userProfile.stats.followers}
                views={userProfile.stats.views}
                likes={userProfile.stats.likes}
            />
     
            <Statistics
                title="Upload stats"    
                stats={statisticalData}
            />

            <Statistics stats={statisticalData} />

            <FriendList friends={friends} />

            <TransactionHistory items={transactions} />
            
        </div>
    );
};
    
export default App;
