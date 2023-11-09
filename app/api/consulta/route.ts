import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from '@prisma/client';


export async function GET() {
  const prisma = new PrismaClient();   
const newData = await prisma.tareas.findMany()
  return NextResponse.json(newData)
}
