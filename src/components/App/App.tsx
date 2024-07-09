import { useState } from 'react';
import QuoteBox from '../QuoteBox/QuoteBox';
import quotes from '../../constants/quotes';
import { colors, colorPalette } from '../../constants/colors';
import './App.scss';

function App() {
  const findNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
  };
  const findNewColor = () => {
    const randomColor = colorPalette[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  const [quote, setQuote] = useState(findNewQuote());
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [color, setColor] = useState(findNewColor());

  const handleClick = () => {
    setColor(findNewColor());
    setIsFadingOut(true);
    setTimeout(() => {
      setQuote(findNewQuote());
      setIsFadingOut(false);
    }, 500);
  };

  const boxStyle = {
    width: '500px',
    padding: '40px 50px',
    backgroundColor: '#f8efed',
    borderRadius: '5px',
    border: 'none',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: color.color,
    transition: 'background-color 1s ease',
  };

  return (
    <div className="App">
      <div id="box-container" style={containerStyle}>
        <div id="quote-box" style={boxStyle}>
          <QuoteBox
            color={color}
            quote={quote}
            isFadingOut={isFadingOut}
            handleClick={handleClick}
          />
        </div>
        <div id="footer">
          <p style={{ color: '#f8efed', fontSize: '0.75em', marginTop: '8px' }}>
            by{' '}
            <a
              href="https://github.com/louis-stintzy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#f8efed',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              lstz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
