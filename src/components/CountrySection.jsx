'use client'

import { useEffect, useState } from 'react'

export default function CountrySection() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            const res = await fetch('/api')
            const data = await res.json()
            setCountries(data)
        }

        fetchCountries()
    }, [])

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Países</h1>
            <ul>
                {countries.map((c) => (
                    <li key={c.country_id}>{c.country_name}</li>
                ))}
            </ul>
        </div>
    )
}
