const selectAll = () => {
    return db.query('SELECT * FROM posts');
}

const selectById= (id) => {
    return db.query('SELECT * FROM posts where id_post=?', [id]);
}

const selectByAuthor= (authorId) => {
    return db.query('SELECT * FROM posts where authorId=?', [authorId]);
}

const insert= ({title,description,categoryId,authorId}) => {
    return db.query('insert into posts (`title`,`description`,`categoryId`,`authorId`,`creation_date`) values (?,?,?,?,currentDate())', [title,description,categoryId,authorId]);
}


module.exports={
    selectAll, selectById, selectByAuthor, insert
}