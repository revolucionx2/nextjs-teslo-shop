import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    return res.status(404).json({
        message: 'Debe de especificar el queery de búsqueda'
    })
}