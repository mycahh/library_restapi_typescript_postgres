
// Querys

// Books 
const getListQuery = "SELECT * FROM book LIMIT 10"
const getBookByIdQuery = "SELECT * FROM book WHERE id = $1"
const createBookQuery = "INSERT INTO book(title, isbn, synopsis, genres, publicationyear) VALUES($1, $2, $3, $4, $5)"
const updateBookQuery = "UPDATE book SET title=$1, isbn=$2, synopsis=$3, genres=$4, publicationyear=$5 WHERE id=$6"
const deleteBookQuery = "DELETE FROM book WHERE id=$1"


export { getListQuery, getBookByIdQuery, createBookQuery, updateBookQuery, deleteBookQuery }