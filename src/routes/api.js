const router=require('express').Router();

router.use ('/blogentries', require ('./api/blogentries'));
router.use ('/authors', require ('./api/authors'));

module.exports=router;