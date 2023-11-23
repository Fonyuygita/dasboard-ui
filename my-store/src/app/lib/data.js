
import { Users } from "./models"
import { connectToDB } from "./utils"

// fetcch our data here
export const fetchUser=async(q, page)=>{
    // use regex to get one character at a time,and case insesnsitive
    
  const ITEM_PER_PAGE = 4;
    const regex=new RegExp(q, "i");

    try {
        // connect to db first
        connectToDB()
        // count the number of pages and and fetch users base on the user search and return it to be used in the users aand product pages
        const count = await Users.find({ username: { $regex: regex } }).count();
        console.log(count)
        const users = await Users.find({ username: { $regex: regex } })
          .limit(ITEM_PER_PAGE)
          .skip(ITEM_PER_PAGE * (page - 1));
return {count, users}
        
        
    } catch (err) {

        console.log("error occured and was not able to fetch data")
        
    }
}