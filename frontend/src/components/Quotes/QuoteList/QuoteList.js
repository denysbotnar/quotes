import React  from 'react'
import Quote from "../Quote/Quote"
import './QuoteList.css';

const QuoteList = ({quotes, deleteQuote, editQuote}) => {
    return (
        <div className="quotesList">
            <h2>Quotes List</h2>
            {
                quotes && quotes.length > 0 ? quotes.map((quote) => (
                    <Quote key={quote.id} quote={quote} deleteQuote={deleteQuote} editQuote={editQuote} />
                )) : <div className="noQuotes"><p>No quotes</p></div>
            }

        </div>
    )
}

export default QuoteList