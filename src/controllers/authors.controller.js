const getAllAuthors = (req, res) => {
    res.send ('Recuperamos los autores');
}

const createAuthor = (req, res) => {
    res.send ('Creamos autor');
}


module.exports = {
    getAllAuthors, createAuthor
}