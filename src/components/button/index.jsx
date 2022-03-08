import './button.css';

export const ButtonBuatan = ({ tittleButton, backgroundColor }) => {
  return (
    <button className={`button ${backgroundColor === 'red' ? 'red' : 'green'}`}>
      {tittleButton}
    </button>
  );
};
