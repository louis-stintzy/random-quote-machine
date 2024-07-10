import { useState } from 'react';
import QuoteAndAuthor from '../QuoteAndAuthor/QuoteAndAuthor';
import Buttons from '../Buttons/Buttons';

import './QuoteBox.scss';

interface QuoteBoxProps {
  color: { color: string; lightenedColor: string };
  quote: { key: number; quote: string; citation: string; author: string };
  isFadingOut: boolean;
  handleClick: () => void;
}

function QuoteBox({ color, quote, isFadingOut, handleClick }: QuoteBoxProps) {
  const [language, setLanguage] = useState('en');

  return (
    <div id="quote-box">
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
