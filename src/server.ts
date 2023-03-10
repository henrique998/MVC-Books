import express from "express"
import "./db/runMigrations"

import { bookRoutes } from "./routes/books"
import { userRoutes } from "./routes/users"

const app = express()

app.use(express.json())

app.use(userRoutes)
app.use(bookRoutes)

app.listen(3333, () => console.log('Server is running at: http://localhost:3333'))