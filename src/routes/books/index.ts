import { Router } from 'express'
import { getListBooks, getBook, createBook, updateBook, deleteBook } from '../../controllers/books'

const router = Router()

router.get('/', getListBooks)
router.get('/:id', getBook)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router
