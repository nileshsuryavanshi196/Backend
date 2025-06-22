import dotenv from  'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config(
    {path:'./env'}
)

connectDB()
.then( () => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`server is running on port: http://localhost:${process.env.PORT} `)
    })
})
.catch((err) => {
    console.log("MONGO db connection error", err)
})



// ( async () => {
//     try{
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERROR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT , () => {
//             console.log(`listen on http://localhost:${process.env.PORT}`);
//         })

//     }catch(error){
//         console.error("ERROR:", error)
//         throw err
//     }
// })()