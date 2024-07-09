import { useState } from 'react';
import QuoteBox from '../QuoteBox/QuoteBox';
import quotes from '../../constants/quotes';
import { colors, colorPalette } from '../../constants/colors';
import './App.scss';
import Footer from '../Footer/Footer';

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
        <QuoteBox
          color={color}
          quote={quote}
          isFadingOut={isFadingOut}
          handleClick={handleClick}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
