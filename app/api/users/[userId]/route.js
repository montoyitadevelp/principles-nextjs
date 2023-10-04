import { NextResponse } from 'next/server'

//Route handle params
export async function GET(request, {params}) {
    //searchParams
    const { searchParams } = new URL(request.url)
    console.log(searchParams)
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await res.json()
    return NextResponse.json(data)
}