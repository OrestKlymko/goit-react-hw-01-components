import PropTypes from 'prop-types';
import cssFriend from './friendsList.module.css';
import { FriendItem } from './friendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={cssFriend.list} key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

PropTypes.PropTypes = {
  friends: PropTypes.array,
};
