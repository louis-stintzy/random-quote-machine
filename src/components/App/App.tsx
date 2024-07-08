import { useState } from 'react';
import QuoteBox from '../QuoteBox/QuoteBox';
import quotes from '../../constants/quotes';
import colors from '../../constants/colors';
import './App.scss';

function App() {
  const findNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
  };
  const findNewColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  const [quote, setQuote] = useState(findNewQuote());
  const [color, setColor] = useState(findNewColor());

  const handleClick = () => {
    setQuote(findNewQuote());
    setColor(findNewColor());
  };

  const boxStyle = {
    width: '500px',
    height: '250px',
    padding: '20px',
    backgroundColor: '#f8efed',
    borderRadius: '5px',
    border: 'none',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: color,
    transition: 'background-color 0.75s ease',
  };

  return (
    <div className="App">
      <div id="box-container" style={containerStyle}>
        <div id="quote-box" style={boxStyle}>
          <QuoteBox color={color} quote={quote} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
