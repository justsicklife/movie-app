const express = require("express");
const router = express.Router();
const Favorite = require("../models/Favorite.js");


router.post('/add',(req,res) => {

    const favorite = new Favorite(req.body);
    favorite.save((err,favoriteInfo) => {
        console.log(favoriteInfo);
        if(err) return res.send({success: false,error:err});
        return res.send({success:true});
    });

})

router.post('/delete',(req,res) => {

    Favorite.deleteOne(
        {
        userId: req.body.userId,
        movieId: req.body.movieId
        }
        ,(err) => {
        if(err) return res.status(400).send({success: false,error:err});
        return res.status(200).send({success:true});
    })

})

router.post('/number',(req,res) => {


    Favorite.find({
        movieId:req.body.movieId,
    },(err,findFavorite) => {
        console.log(findFavorite);
        if(err) return res.send({success:false,error:err});
        return res.send({success:true,number: findFavorite ? parseInt(findFavorite.length) : 0});
    })
})

router.post('/favorited',(req,res) => {

    Favorite.findOne({
        movieId:req.body.movieId,
        userId: req.body.userId
    },(err,findFavorite) => {
        console.log(findFavorite);
        if(err) return res.send({success:false,favorited:false,error:err});
        if(!findFavorite) return res.send({success:true,favorited:false});
        return res.send({success:true,favorited:true});
    })

})

router.post('/show',(req,res) => {

    Favorite.find({userId: req.body.userId},(err,findFavorite) => {
        if(err) return res.send({success:false,favorited:false,error:err});
        if(!findFavorite.length) return res.send({success:true,favorite:null});
        return res.send({success:true,favorites:findFavorite});
    })

})


module.exports = router;
