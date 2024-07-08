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

  const textStyle = {
    color,
    fontSize: '1.75em',
    fontWeight: '500',
    marginBottom: '10px',
    transition: 'color 0.75s ease',
  };

  const authorStyle = {
    color,
    fontSize: '1.25em',
    fontWeight: '400',
    marginBottom: '10px',
    transition: 'color 0.75s ease',
  };

  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '10px',
    borderRadius: '3px',
    border: 'none',
    heigh: '38px',
    cursor: 'pointer',
    transition: 'background-color 0.75s ease',
  };

  return (
    <div>
      <div id="text" style={textStyle}>
        {language === 'en' ? quote.quote : quote.citation}
      </div>
      <div id="author" style={authorStyle}>
        {quote.author}
      </div>
      <div id="buttons">
        <button
          type="button"
          id="new-quote"
          onClick={handleClick}
          style={buttonStyle}
        >
          New Quote
        </button>
        <button
          type="button"
          id="change-language"
          onClick={handleChangeLanguage}
          style={buttonStyle}
        >
          {language === 'en' ? 'Français' : 'English'}
        </button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" style={buttonStyle}>
          TWEET
        </a>
      </div>
    </div>
  );
}

export default QuoteBox;
