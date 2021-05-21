import React, {useState, useEffect} from "react"
import './App.css';
import QuoteForm  from "./components/Quotes/QuoteForm/QuoteForm"
import QuoteList from "./components/Quotes/QuoteList/QuoteList"
import axios from "axios"

function App() {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/quotes/getAllQuotes")
        .then(res => {
            setQuotes(res.data.quotes);
        })
        .catch(err => {
            const errors = err.response.data.errors

            if(errors){
                console.log(errors)
            }
        })  
    }, [])


    const deleteQuote = (id) => {
        axios.delete(`http://localhost:5000/api/quotes/${id}`).then(() => {
            const filteredQuotes = quotes.filter(quote => quote.id !== id)
            setQuotes(filteredQuotes)
            
        })

    }

    const editQuote = (id, editedValue) => {
        axios.put(`http://localhost:5000/api/quotes/${id}`,  
        JSON.stringify(editedValue), 
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            const updatedQuote = quotes.map(quote => {
                if (quote.id === id){
                    return {...quote, text: editedValue.text, author: editedValue.author}
                }
    
                return quote;
            })
            setQuotes(updatedQuote)
            
        })
    }

    const submitQuote = async (e, quote, setQuote)=>{
        e.preventDefault()

        try{
            
            await axios.post("http://localhost:5000/api/quotes/createQuote",  
                JSON.stringify(quote), 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            setQuotes([...quotes, quote])
            setQuote({
                id: "",
                text: "",
                author: ""
            })

        }catch(err){
            const errors = err.response.data.errors

            if(errors){
                console.log(errors)
            }
        }
    }


    return (
        <div className="app">
            <QuoteForm submitQuote={submitQuote} />
            <QuoteList quotes={quotes} deleteQuote={deleteQuote} editQuote={editQuote} />
        </div>
    );
}

export default App;
