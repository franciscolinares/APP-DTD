import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async  function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //const data = req.body
  console.log('req: ',req)
  //res.status(200).json()  
  console.log('res: ',res)
}