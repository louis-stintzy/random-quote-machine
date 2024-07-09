import { useState } from 'react';

interface ButtonsProps {
  color: { color: string; lightenedColor: string };
  quote: { key: number; quote: string; citation: string; author: string };
  language: string;
  setLanguage: (value: string) => void;
  handleClick: () => void;
}

function Buttons({
  color,
  quote,
  language,
  setLanguage,
  handleClick,
}: ButtonsProps) {
  const [btnIsHovered, setBtnIsHovered] = useState<string | null>(null);

  const handleChangeLanguage = () => {
    if (language === 'en') {
      setLanguage('fr');
    } else {
      setLanguage('en');
    }
  };

  const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
    `${language === 'en' ? quote.quote : quote.citation} - ${quote.author}`
  )}`;

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const rightButtonsStyle = {
    display: 'flex',
    gap: '10px',
  };

  const buttonStyle = (btn: string | null) => ({
    backgroundColor: btnIsHovered === btn ? color.lightenedColor : color.color,
    color: 'white',
    padding: '10px',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 1s ease',
  });
  return (
    <div id="buttons-container" style={buttonContainerStyle}>
      <div id="left-buttons">
        <a
          href={tweetUrl}
          id="tweet-quote"
          style={{
            ...buttonStyle('tweetBtn'),
            textDecoration: 'none',
            display: 'inline-block',
          }}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setBtnIsHovered('tweetBtn')}
          onMouseLeave={() => setBtnIsHovered(null)}
        >
          <i className="fab fa-twitter" />
          <span style={{ marginLeft: '5px' }}>Tweet</span>
        </a>
      </div>
      <div id="right-buttons" style={rightButtonsStyle}>
        <button
          type="button"
          id="change-language"
          onClick={handleChangeLanguage}
          style={buttonStyle('changeBtn')}
          onMouseEnter={() => setBtnIsHovered('changeBtn')}
          onMouseLeave={() => setBtnIsHovered(null)}
        >
          <i className="fa-solid fa-language" />
          <span style={{ marginLeft: '5px' }}>Change</span>
        </button>
        <button
          type="button"
          id="new-quote"
          onClick={handleClick}
          style={buttonStyle('newBtn')}
          onMouseEnter={() => setBtnIsHovered('newBtn')}
          onMouseLeave={() => setBtnIsHovered(null)}
        >
          <i className="fa-solid fa-plus" />
          <span style={{ marginLeft: '5px' }}>
            {language === 'en' ? 'New' : 'Nouvelle'}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
