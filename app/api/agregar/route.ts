import { NextResponse } from "next/server"

export function POST() {
  
  const data = {hola: "Mundo"}//await res.json()
  console.log(data)
  return NextResponse.json({ data })
}