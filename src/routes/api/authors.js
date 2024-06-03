const router=require('express').Router();

const {getAllAuthors, createAuthor}= require ('../../controllers/authors.controller');

router.get('/', getAllAuthors);

router.post('/', createAuthor);

module.exports=router;
