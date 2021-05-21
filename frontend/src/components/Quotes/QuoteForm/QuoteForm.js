import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './QuoteForm.css';

const QuoteForm = ({submitQuote, editValue}) => {
    const [quote, setQuote] = useState({
        id: editValue ? editValue.id : "",
        text: editValue ? editValue.text: "",
        author: editValue ? editValue.author: ""
    })

    const {text, author} = quote;

    const handleChange = (e) => {
        const {name, value} = e.target
        setQuote({...quote, id: uuidv4(), [name]: value})
    }

    return (
        <form method="post" onSubmit={(e) => submitQuote(e, quote, setQuote)}>
            <input type="text" name="text" id="quoteInput" value={text} onChange={e => handleChange(e)} placeholder="Enter a quote text" />
            <input type="text" name="author" id="authorInput" value={author} onChange={e => handleChange(e)} placeholder="Enter an author`s name" />
            <button type="submit" id="saveBtn">Save quote</button>
        </form>
    )
}

export default QuoteForm
