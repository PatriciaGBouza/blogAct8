const router=require('express').Router();

const {getAllBlogEntries,getEntryByAuthor,createEntry}= require ('../../controllers/blogentries.controller');

router.get('/', getAllBlogEntries);
router.get('/:authorId', getEntryByAuthor);

router.post('/', createEntry);

module.exports=router;
