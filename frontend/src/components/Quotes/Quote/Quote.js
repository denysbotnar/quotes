import React, {useState} from 'react'
import QuoteForm from "../QuoteForm/QuoteForm"
import './Quote.css';

const Quote = ({quote, deleteQuote, editQuote}) => {
    const [edit, setEdit] = useState({
        id: "",
        text: "",
        author: ""
    })

    const updateSubmit = (e, editedValue) => {
        e.preventDefault();

        editQuote(edit.id, editedValue)
        setEdit({
            id: "",
            text: "",
            author: ""
        })
    }

    if(edit.id){
        return <QuoteForm submitQuote={updateSubmit} editValue={edit} />
    }

    return (
        <div className="quoteContainer">
            <div className="quote">
                <cite id="quoteText">"{quote.text}"&nbsp;&nbsp;<strong>-</strong>&nbsp;&nbsp;</cite>
                <cite id="quoteAuthor">{quote.author}</cite>
            </div>
            <div className="actionsButtons">
                <button onClick={() => setEdit({id: quote.id, text: quote.text, author: quote.author})}>Edit</button>
                <button onClick={() => deleteQuote(quote.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Quote
