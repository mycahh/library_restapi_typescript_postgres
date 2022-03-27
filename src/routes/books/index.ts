import { Router } from 'express'
import { getListBooks, getBookById, createBook, updateBook, deleteBook } from '../../controllers/books'

const router = Router()

router.get('/', getListBooks)
router.get('/:id', getBookById)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router
