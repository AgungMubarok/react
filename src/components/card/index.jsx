import { Avatar } from '../avatar';
import './card.css';
export const Card = ({ textCard, avatarPicture, locationText }) => {
  return (
    <div className="wrapper">
      <h1 className={locationText === 'right' ? 'right' : 'left'}>
        {textCard}
      </h1>
      <Avatar imageAvatar={avatarPicture} sizeAvatar="large" />
    </div>
  );
};
