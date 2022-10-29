export type Category = 'electronic' | 'clothing' | 'foods' | 'beauty' | 'cars'
export type Ranking = 1 | 2 | 3 | 4 | 5

export interface Product {
  id: number
  price: number
  title: string
  description: string
  category: Category
  ranking: Ranking
}
