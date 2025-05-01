// const express=require('express');
// const cors=require('cors');
// const fs=require('fs/promises');
// const app=express();
// const port=3000;
// let books=[]
// app.use(express.json())
// app.use(cors())

// const readdata=async ()=>{
//     books=JSON.parse(await fs.readFile('./data.json','utf8'))
// }
// const writedata=async ()=>{
//    await fs.writeFile('./data.json',JSON.stringify(books))
// }
// app.get('/books',async(req,res)=>{
//     res.json(books)
// }) 

// app.post('/books',async(req,res)=>{
//     const newbook={
//         id:books.length+1,
//         name:req.body.name,
//         price:req.body.price,
//     }
//     users.push(newuser)
//     await writedata();
//     res.status(201).json({message:"data save successfully"})

// })

// app.listen(port,()=>{
//     console.log(`app is run at ${port}`)
// })
