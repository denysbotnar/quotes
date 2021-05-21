const express = require("express")
const router = express.Router()

const QuoteController = require("../controllers/quoteController")

router.get("/getAllQuotes", QuoteController.getAllQuotes)
router.post("/createQuote", QuoteController.createQuote)
router.put("/:id", QuoteController.updateQuoteById)
router.delete("/:id", QuoteController.deleteQuoteById)
// router.delete("/deleteAllQuotes", QuoteController.deleteAllQuotes)


module.exports = router