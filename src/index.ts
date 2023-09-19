// const name: string = 'Le Xuan Phu'
// console.log(name)
// import dotenv from 'dotenv'
// dotenv.config()

import express from 'express'
const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ mess: 'hello' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
