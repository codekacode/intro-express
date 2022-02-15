import mongoose from "mongoose"

export const createDbConnection = (dbURL: string) => {
    
    mongoose.connect(dbURL)
    .then(() => {console.log("base de datos conectada")})
    .catch((err) => {console.log("error")})
}