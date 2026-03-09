import app from "./app.js"

const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT,  () => {
    console.log(`Server Runnig on ${HOST}:${PORT}`)
})