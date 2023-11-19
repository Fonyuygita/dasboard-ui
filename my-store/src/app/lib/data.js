
import { Users } from "./models"
import { connectToDB } from "./utils"

// fetcch our data here
export const fetchUser=async()=>{
    try {
        // connect to db first
        connectToDB()
        const users=Users.find()

        return users
        
    } catch (err) {

        console.log("error occured and was not able to fetch data")
        
    }
}