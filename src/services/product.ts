import productsJSON from './products.json'
import { Product } from '../types/products.js'

const products: Product[] = productsJSON as Product[]

export const getProducts = (): Product[] =>
  products.map(({ id, price, title, category, description, ranking }) => ({
    id,
    price,
    title,
    category,
    description,
    ranking
  }))
