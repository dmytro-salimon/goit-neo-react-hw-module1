import PropTypes from "prop-types";
import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.profileHeader}>
        <img src={image} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li className={style.statsItem}>
          <span className={style.statsItemLabel}>Followers</span>
          <span className={style.statsItemValue}>{stats.followers}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.statsItemLabel}>Views</span>
          <span className={style.statsItemValue}>{stats.views}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.statsItemLabel}>Likes</span>
          <span className={style.statsItemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
