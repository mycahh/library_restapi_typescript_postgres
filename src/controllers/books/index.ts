import { Request, Response } from "express"
import { pool } from "../../database"
import { QueryResult } from "pg"
import { getListQuery, getBookByIdQuery, createBookQuery, updateBookQuery, deleteBookQuery } from "../../querys"

export const getListBooks = async (req: Request, res: Response) => {
    try {
        const response:QueryResult = await pool.query(getListQuery)

        return res.status(200).json(response.rows)
    } catch (error) {
        res.status(500).json("Error")
    }
}

export const getBookById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const response:QueryResult = await pool.query(getBookByIdQuery, [id])

    return res.json(response.rows)
}

export const deleteBook = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    await pool.query(deleteBookQuery, [id])
    
    res.json({
        message: 'successfully eliminated'
    })

}

export const updateBook = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const { title, isbn, synopsis, genres, publicationyear } = req.body
    await pool.query(updateBookQuery, [title, isbn, synopsis, genres, publicationyear, id])

    res.json({
        message: 'Successfully updated'
    })
}

export const createBook = async (req: Request, res: Response) => {
    const { title, isbn, synopsis, genres, publicationyear } = req.body
    const response:QueryResult = await pool.query(createBookQuery, [title, isbn, synopsis, genres, publicationyear])

    res.json({
        message: 'Successfully created'
    })
}

