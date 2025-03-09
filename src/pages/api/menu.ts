import type { NextApiRequest, NextApiResponse } from 'next'

const PIZZA_APP_BASE_API_URL = 'https://private-anon-8ab6ff3859-pizzaapp.apiary-mock.com/restaurants'
const DEFAULT_RESTAURANT_ID = '23'

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Foto de Pinar Kucuk na Unsplash',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1653184733587-8a49b65e20e6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Foto de Desirae Hayes-Vitor na Unsplash',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1566843972063-21b936128515?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Foto de Getúlio Moraes na Unsplash',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1592892111425-15e04305f961?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Foto de Ayesha Ch na Unsplash',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Foto de ABHISHEK HAJARE na Unsplash',
  },
]

const getImageById = (id: number) => images.find((image) => image.id === id) || null

const pizzaMenu = async (req: NextApiRequest, res: NextApiResponse) => {
  const restaurantId = req.query.id || DEFAULT_RESTAURANT_ID

  try {
    const response = await fetch(`${PIZZA_APP_BASE_API_URL}/${restaurantId}/menu`)

    if (!response.ok) throw new Error(`Erro na API externa: ${response.status} ${response.statusText}`)

    const data = await response.json()

    const dataWithImages = data.map((item: { id: number }) => ({
      ...item,
      img: getImageById(item.id),
    }))

    res.status(200).json(dataWithImages)
  } catch (error) {
    console.log('Erro na API do Next:', error)
    res.status(500).json({ erro: 'Erro ao buscar menu' })
  }
}

export default pizzaMenu
