import './QuoteAndAuthor.scss';

interface QuoteAndAuthorProps {
  color: { color: string; lightenedColor: string };
  quote: { key: number; quote: string; citation: string; author: string };
  isFadingOut: boolean;
  language: string;
}

function QuoteAndAuthor({
  color,
  quote,
  isFadingOut,
  language,
}: QuoteAndAuthorProps) {
  const textContainerStyle = {
    opacity: isFadingOut ? '0' : '1',
    transition: 'opacity 0.5s ease',
  };

  const textStyle = {
    color: color.color,
    // fontSize: '1.75em',
    textAlign: 'center' as const,
    fontWeight: '500',
    marginBottom: '10px',
    transition: 'color 1s ease',
  };

  const authorStyle = {
    color: color.color,
    // fontSize: '1.25em',
    textAlign: 'right' as const,
    fontWeight: '400',
    marginBottom: '20px',
    transition: 'color 1s ease',
  };
  return (
    <div id="text-container" style={textContainerStyle}>
      {/* //----- Text ----- */}
      <div id="text" style={textStyle}>
        <i className="fa fa-quote-left" style={{ marginRight: '10px' }} />
        <span>{language === 'en' ? quote.quote : quote.citation} </span>
      </div>
      {/* //----- Author ----- */}
      <div id="author" style={authorStyle}>
        - {quote.author}
      </div>
    </div>
  );
}

export default QuoteAndAuthor;
