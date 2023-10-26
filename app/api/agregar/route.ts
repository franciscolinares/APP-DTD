import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from '@prisma/client';

/*export async function POST(NextRequest) {
  const data = await NextRequest.json()
  //const data = {hola: "Mundo"}//await res.json()
  console.log('route',data)
  return NextResponse.json({ data })
}*/

export async function POST(NextRequest) {
  const prisma = new PrismaClient();   
  const body = await NextRequest.json()
  console.log('route',body.data)
    const newData = await prisma.tareas.create({
      //data : {nombre : data.data.name} ,      
      data : body.data ,
  })
  return NextResponse.json(newData)
}
