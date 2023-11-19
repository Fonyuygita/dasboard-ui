import mongoose from "mongoose";
export const connectToDB=async()=>{
// object to verify if user is already conected or not
const connection={};

try {
    if(connection.isConnected) return
    const db=await mongoose.connect(process.env.MONGO_URI);
    if(db.connect()){
        console.log("connected");
    }

    else{
        console.log("not connected")
    }
    connection.isConnected=db.Connections[0].readyState;

} catch (err) {
console.log(err)
    
}
}