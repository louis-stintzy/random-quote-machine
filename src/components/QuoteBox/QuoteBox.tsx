import { useState } from 'react';
import QuoteAndAuthor from '../QuoteAndAuthor/QuoteAndAuthor';
import Buttons from '../Buttons/Buttons';

interface QuoteBoxProps {
  color: { color: string; lightenedColor: string };
  quote: { key: number; quote: string; citation: string; author: string };
  isFadingOut: boolean;
  handleClick: () => void;
}

function QuoteBox({ color, quote, isFadingOut, handleClick }: QuoteBoxProps) {
  const [language, setLanguage] = useState('en');

  const boxStyle = {
    width: '500px',
    padding: '40px 50px',
    backgroundColor: '#f8efed',
    borderRadius: '5px',
    border: 'none',
  };

  return (
    <div id="quote-box" style={boxStyle}>
      <QuoteAndAuthor
        color={color}
        quote={quote}
        isFadingOut={isFadingOut}
        language={language}
      />
      <Buttons
        color={color}
        quote={quote}
        language={language}
        setLanguage={setLanguage}
        handleClick={handleClick}
      />
    </div>
  );
}

export default QuoteBox;
