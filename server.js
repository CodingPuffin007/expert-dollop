import express from 'express'
import router from './routes'


const app = express()


app.use('/api',router)

app.get('/', (req,res) => {
    res.send(`<h1>Server is running</h1>`)
})

app.listen(3000, () => {
    console.log('server is running')
})