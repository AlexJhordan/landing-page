import type { NextApiRequest, NextApiResponse } from 'next'

const RANDOM_USER_BASE_API_URL = 'https://randomuser.me/api/'

const randomUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const queryParams = new URLSearchParams(req.query as Record<string, string>).toString()

    const apiUrl = `${RANDOM_USER_BASE_API_URL}?${queryParams}`

    const response = await fetch(apiUrl)

    if (!response.ok) throw new Error(`Erro na API externa: ${response.status} ${response.statusText}`)

    const data = await response.json()

    res.status(200).json(data)
  } catch (error) {
    console.log('Erro na API do Next:', error)
    res.status(500).json({ error: 'Erro com RandomUser API' })
  }
}

export default randomUser
