import PropTypes from "prop-types";
import style from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={style.friendName}>{name}</p>
      <p className={`status ${isOnline ? style.online : style.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
