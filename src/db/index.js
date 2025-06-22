import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
import dotenv from  'dotenv'
dotenv.config(
    {path:'./env'}
)


const connectDB = async () => {
    try{
        console.log("mongo db connection link",process.env.MONGODB_URI)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
           console.log(`\n MongonDB connect !! DB HOST:${connectionInstance.connection.host}`)
            // console.log("check connectionInstatance", connectionInstance) 
    }catch(error){
        console.log("connection DB Error", error)
        process.exit(1)
    }
 
}

export default connectDB