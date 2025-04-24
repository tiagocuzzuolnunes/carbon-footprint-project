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
            <h1 className="text-xl font-bold">Which country are you from?</h1>
            <select>
                {countries.map((c) => (
                    <option key={c.country_id}>{c.country_name}</option>
                ))}
            </select>
        </div>
    )
}
