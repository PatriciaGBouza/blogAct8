const BlogEntry=require('../models/blogentry.model');

const getAllBlogEntries = async (req, res) => {
    try {
        const [result]= await BlogEntry.selectAll();
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({error:error.message});
    }    
     
}

const getEntryById = async (req, res) => {
    try {
        const [result]= await BlogEntry.selectById(req.params.entry_id);
         if (result.length===0){
            return res.status(400).json({error:'Entrada no encontrada'});
         }
         res.json(result[0]);
    } catch (error) {
        res.status(500).json({error:error.message});
    }    
     
}


const getEntryByAuthor = async (req, res) => {
    try {
        const [result]= await BlogEntry.selectByAuthor(req.params.authorId);
         if (result.length===0){
            return res.status(400).json({error:'Entrada no encontrada'});
         }
         res.json(result[0]);
    } catch (error) {
        res.status(500).json({error:error.message});
    }    
     
}


const createEntry = async (req, res) => {
    try {
        // El req.body me está llegando vacío
        const [result]= await BlogEntry.insert(req.body);
        const [[entry]] = await BlogEntry.selectById(result.entry_id);
        res.json(entry);
    } catch (error) {
        res.status(500).json({error:error.message});
    }    
     
}



module.exports = {
    getAllBlogEntries, getEntryByAuthor, createEntry
}