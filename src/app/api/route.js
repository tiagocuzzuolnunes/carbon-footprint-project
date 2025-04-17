// import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//     return NextResponse.json({
//         hello: "world",
//     })
// }

import db from '@/lib/db'

export async function GET() {
    try {
        const [rows] = await db.query('SELECT * FROM Countries')
        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        return new Response(JSON.stringify({ erro: error.message }), {
            status: 500
        })
    }
}
