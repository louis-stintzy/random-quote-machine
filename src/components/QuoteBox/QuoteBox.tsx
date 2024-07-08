import { useState } from 'react';

interface QuoteBoxProps {
  color: string;
  quote: { key: number; quote: string; citation: string; author: string };
  handleClick: () => void;
}

function QuoteBox({ color, quote, handleClick }: QuoteBoxProps) {
  const [language, setLanguage] = useState('en');
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

  const textStyle = {
    color,
    fontSize: '1.75em',
    textAlign: 'center' as const,
    fontWeight: '500',
    marginBottom: '10px',
    transition: 'color 0.75s ease',
  };

  const authorStyle = {
    color,
    fontSize: '1.25em',
    textAlign: 'right' as const,
    fontWeight: '400',
    marginBottom: '20px',
    transition: 'color 0.75s ease',
  };

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

  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '10px',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.75s ease',
  };

  return (
    <div>
      {/* //----- Text ----- */}
      <div id="text" style={textStyle}>
        <i className="fa fa-quote-left" style={{ marginRight: '10px' }} />
        <span>{language === 'en' ? quote.quote : quote.citation} </span>
      </div>
      {/* //----- Author ----- */}
      <div id="author" style={authorStyle}>
        - {quote.author}
      </div>
      {/* //----- Buttons ----- */}
      <div id="buttons-container" style={buttonContainerStyle}>
        <div id="left-buttons">
          <a
            href={tweetUrl}
            id="tweet-quote"
            style={{
              ...buttonStyle,
              textDecoration: 'none',
              display: 'inline-block',
            }}
            target="_blank"
            rel="noopener noreferrer"
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
            style={buttonStyle}
          >
            <i className="fa-solid fa-language" />
            <span style={{ marginLeft: '5px' }}>Change</span>
          </button>
          <button
            type="button"
            id="new-quote"
            onClick={handleClick}
            style={buttonStyle}
          >
            <i className="fa-solid fa-plus" />
            <span style={{ marginLeft: '5px' }}>
              {language === 'en' ? 'New' : 'Nouvelle'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
