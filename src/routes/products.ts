import express from 'express'
import { getProducts } from '../services/product'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(getProducts())
})

export default router
