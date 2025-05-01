const mongoose=require('mongoose')
async function dbCom(){
    const conn=await mongoose.connect('mongodb+srv://mahima:root@cluster0.ztbtbkh.mongodb.net/Crud-live?retryWrites=true&w=majority&appName=Cluster0');
    if (conn){
        console.log("databse connected successfully")
    }
    else{
        console.log("databse not connected")
    }
}
module.exports=dbCom
