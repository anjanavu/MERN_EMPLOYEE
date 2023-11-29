const express=require('express')
const mongoose=require('mongoose');
const app=new express();
const cors=require('cors')
require('dotenv').config(); 
app.use(express.json());
app.use(cors());
const adminRouter=require('./routes/adminRoute');
app.use('/admin',adminRouter);
const userRouter=require('./routes/userRoute');
app.use('/user',userRouter)
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

  
 const PORT = process.env.PORT || 3033;

  app.listen(PORT,()=>{
    console.log("listening to the port 3033")
})
