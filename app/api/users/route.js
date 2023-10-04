import { NextResponse } from 'next/server'

//ROUTE HANDLERS
//Siempre devuelve una respuesta del back al front
export async function GET() {
    //extraer basededatos, consultar, comunicar y etc
    //query database
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    
    
    return NextResponse.json(data)
}

//Request Body
export async function POST(request) {
    //Postman
    const data = await request.json()
    console.log(data)
    
    return NextResponse.json({
        message: "Creando datos"
    })
}

export function PUT() {

    return NextResponse.json({
        message: "Actualizando datos"
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "Borrando datos"
    })
}

