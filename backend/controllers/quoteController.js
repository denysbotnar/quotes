const Quote = require("../models/Quote")

exports.getAllQuotes = async (req, res, next) => {
    try{
        const quotes = await Quote.find().select("-_id -__v")

        if(!quotes){
            return res.status(404).json({
                message: "No quotes found"
            })
        }

        res.status(200).json({
            quotes
        })
    }catch(err){
        res.status(500).json({
            error: "Server error"
        })
    }
}

exports.createQuote = async (req, res, next) => {
    const {id, text, author} = req.body

    try{
        const quote = new Quote({
            id,
            text,
            author
        })

        const savedQuote = await quote.save()

        if(!savedQuote){
            return res.status(500).json({
                error: "Cannot save quote"
            })
        }

        const newQuote = {
            id: savedQuote.id,
            text: savedQuote.text,
            author: savedQuote.author
        }

        return res.status(201).json({
            quote: newQuote,
        })
    }catch(err){
        res.status(500).json("Server error")
    }
}

exports.updateQuoteById = async (req, res, next) => {
    const {text, author} = req.body

    try{
        await Quote.updateOne({ id: req.params.id }, { text: text, author: author }, function(err, res) {
            
        });

        res.status(200).json({
            message: "Quote has been updated"
        })
    }catch(err){
        res.status(500).json("Server error")
    }
}

exports.deleteQuoteById = async (req, res, next) => {
    try{
        await Quote.deleteOne({id: req.params.id})

        res.status(200).json({
            message: "Quote has been deleted"
        })
    }catch(err){
        res.status(500).json("Server error")
    }
}


exports.deleteAllQuotes = async (req, res, next) => {
    try{
        await Quote.deleteMany({})

        res.status(200).json({
            message: "Quotes has been deleted"
        })
    }catch(err){
        res.status(500).json("Server error")
    }
}
