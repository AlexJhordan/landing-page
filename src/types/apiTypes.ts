export interface GetMenu {
  id: number
  category: string
  name: string
  topping?: string[]
  price: number
  img: { src: string; alt: string }
}
