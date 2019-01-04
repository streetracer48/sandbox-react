const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');

const cloudinary = require('cloudinary')

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE)

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser())

cloudinary.config({
     cloud_name: process.env.CLOUD_NAME,
     api_key: process.env.CLOUD_API_KEY,
     api_secret: process.env.CLOUD_API_SECRET
})

//Models

const {Brand} = require('./model/brand');
const {Wood} = require('./model/wood');
const {Product} = require('./model/product');
//Midlleware





//=====================
//      BRAND
//======================


//GET BRANDS LIST

app.get('/api/apartment/citys',(req,res) => {
      Brand.find({}, (err, brands) => {
            if(err) {
                  return res.status(400).send(err);
            }
            res.status(200).send(brands) 
      })
})


//=====================
//      WOOD
//======================



//GET WOODS LISTS

app.get('/api/product/woods', (req,res) => {

     Wood.find({}, (err, woods) => {
           if(err) return res.status(400).send(err);

           return res.status(200).send(woods)
     })


});


//=====================
//     PRODUCT
//======================

//ADD PRODUCT


//GET PRODUCTS LIST

app.get('/api/products', (req, res) => {

     Product.find({}, (err,products) => {
          if(err) {
                return res.status(400).json({
                      success:false,
                      err
                })
          }
          res.status(200).json({
               success:true,
               products

          }) 


     })

})


//GET PRODUCTS BY ID
// /api/product/by_id?id=HSHSHSKSK,JSJSJSJS,SDSDHHSHDS,JSJJSDJ&type=array or single
app.get('/api/apartment/by_id', (req, res) => {
     let type = req.query.type;
     let items = req.query.id;
 
     if(type === "array"){
         let ids = req.query.id.split(',');
         items = [];
         items = ids.map(item=>{
             return mongoose.Types.ObjectId(item)
         })
     }
 
     Product.
     find({ '_id':{$in:items}}).
     populate('brand').
     populate('wood').
     exec((err,docs)=>{
         return res.status(200).send(docs)
     })


});

// BY ARRIVAL
// /articles?sortBy=createdAt&order=desc&limit=4

// BY SELL
// /articles?sortBy=sold&order=desc&limit=100&skip=5



//=================================
//             PRODUCTS TO SHOW
//=================================

app.post('/api/apartment/home', (req,res) => {

     let order = req.body.order ? req.body.order : "desc";
     let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
     let limit = req.body.limit ? parseInt(req.body.limit):100;
     let skip = parseInt(req.body.skip);
     let findArgs= {};

     for (let key in req.body.filters) {
          if(req.body.filters[key].length > 0) {
               if(key === 'price') 
               {
                    findArgs[key] = {
                         $gte:req.body.filters[key][0],
                         $lte:req.body.filters[key][1]
                    }

               }
               else {
                    findArgs[key]=req.body.filters[key]
               }
          }
                    
     }
     findArgs['publish'] = true;

     Product.find(findArgs).
     populate('brand').
     populate('wood').
     sort([[sortBy,order]]).
     skip(skip).
     limit(limit).
     exec((err, articles) => {
          if(err) return res.status(400).send(err);
          res.status(200).json({
               size:articles.length,
               articles
          })
     })

});

//=================================
// IMAGE FILE UPLOADING IN CLOUDINARY 
//=================================



app.post('/api/users/addToCart',(req, res) => {

     User.findOne({_id:req.user._id},(err, doc) => {
          let duplicate = false

          doc.cart.forEach((item) => {
               if(item.id == req.query.productId){
                    duplicate = true;
                }
          })

          if(duplicate)
          {
               User.findOneAndUpdate(
                    {_id: req.user._id, "cart.id":mongoose.Types.ObjectId(req.query.productId)},
                    { $inc: { "cart.$.quantity":1 } },
                    { new:true },
                    ()=>{
                        if(err) return res.json({success:false,err});
                        res.status(200).json(doc.cart)
                    }
                )
              
          }

          else {
               User.findOneAndUpdate(
                   {_id:req.user._id},
                   {$push:{cart:{
                        id:mongoose.Types.ObjectId(req.query.productId),
                        quantity:1,
                        date:Date.now()
                   }}},
                   {new:true} ,
                   (err,doc)=>{
                    if(err) return res.json({success:false,err});
                    res.status(200).json(doc.cart)
                }
               )
          }


     })


})





const port = process.env.PORT || 3002;

app.listen(port, () => {
     console.log(`Server Lising on port ${port}`);
})