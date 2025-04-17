import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Tiago&Livia2801',
    database: 'ecotrack'
})

export default db