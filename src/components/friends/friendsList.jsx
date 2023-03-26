import PropTypes from 'prop-types';
import css from '../friends/friendsList.module.css';

export const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

PropTypes.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
