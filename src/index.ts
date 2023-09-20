// // const name: string = 'Le Xuan Phu'
// // console.log(name)
// import dotenv from 'dotenv'
// dotenv.config()

// import express from 'express'
// const port = process.env.PORT || 4000

// const app = express()

// app.get('/', (req, res) => {
//   res.status(200).json({ mess: 'hello' })
// })

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

// src/server.ts
import { log } from 'console'
import express, { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import { register } from './components/controller/register'
import { login } from './components/controller/login'

const app = express()
const port = 3000

app.use(express.json())

// Kết nối tới MongoDB
// mongoose
//   .connect("mongodb://localhost:27017/test.users", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//   });

const uri = 'mongodb+srv://lexuanphugt:phu30024061@cluster0.exe0qlf.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log('connected to mongodb')
  } catch (error) {
    console.error(error)
  }
}

connect()

app.post('/register', register)
app.post('/login', login)

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
