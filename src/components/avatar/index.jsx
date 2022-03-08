import './avatar.css';

export const Avatar = ({ imageAvatar, sizeAvatar }) => {
  return (
    <img
      src={imageAvatar}
      alt="avatar"
      className={`bulet ${sizeAvatar === 'large' ? 'large' : 'small'}`}
    />
  );
};
