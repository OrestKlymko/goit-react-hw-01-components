import { Profile } from '../components/profile/profile';
import { Statistic } from './statistic/statistic';
import { FriendList } from './friends/friendsList';
import { TransactionHistory } from './transaction/transaction';
///JSON UPLOAD///
import user from '../components/json/user.json';
import data from '../components/json/data.json';
import friends from '../components/json/friends.json';
import transactions from '../components/json/transactions.json';
///Css///

import cssFriend from '../components/friends/friendsList.module.css';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Profile
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
        tag={user.tag}
        username={user.username}
      />
      <Statistic title="Upload stats" data={data} />
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={cssFriend.list} key={id}>
            <FriendList avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
      <TransactionHistory items={transactions} />
    </div>
  );
};
