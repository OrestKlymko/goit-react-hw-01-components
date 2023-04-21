import { Profile } from '../components/profile/profile';
import { Statistic } from './statistic/statistic';
import { FriendList } from './friends/friendsList';
import { TransactionHistory } from './transaction/transaction';
///JSON UPLOAD///
import user from '../components/json/user.json';
import data from '../components/json/data.json';
import friends from '../components/json/friends.json';
import transactions from '../components/json/transactions.json';



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
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};
