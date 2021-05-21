import axios from "axios"

export async function fetchQuotes(){
    try{
      let response = await axios.get("http://localhost:5000/api/quotes/getAllQuotes")

      const data = await response.data

      return data
    }catch(err){
        const errors = err.response.data.errors
  
        if(errors){
            console.log(errors)
        }
    }
  }