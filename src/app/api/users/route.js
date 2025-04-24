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

export async function POST() {
    try {
        const { name, company, email, pais } = await req.json()

        if (!name || !company || !email || !pais ) {
            return new Response(
                JSON.stringify({ erro: 'Todos os campos são obrigatórios' }),
                { status: 400 }
            )
        }
        
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

