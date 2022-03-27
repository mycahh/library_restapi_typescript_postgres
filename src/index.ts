import express from "express"
import { bookRoutes } from "./routes"

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/book', bookRoutes)

app.listen(3000)