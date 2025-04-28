'use client'

import Button from "@/components/Button.jsx"
import Link from "next/link"

export default function CalculationForm() {

    return (
        <section className="grid place-items-center p-5">
            <form className="grid gap-4" action="/submit" method="POST">
                <label htmlFor="country">Which country are you from?</label>
                <select name="country" id="country">
                    <option value="">Choose a country</option>
                    <option value="ÍS">Ísland</option>
                    <option value="NZ">New Zealand</option>
                    <option value="BR">Brasil</option>
                    <option value="US">United States</option>
                </select>
                <label htmlFor="name">What is your full name?</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="company">What is your company's name?</label>
                <input type="text" name="company" id="company" />
                <label htmlFor="company">What is your company's name?</label>
                <input type="text" name="company" id="company" />
                
                <input type="radio" id="hasVehicles" name="hasVehicles" value="Yes"/>
                    <label for="html">HTML</label>
                    <input type="radio" id="hasNoVehicles" name="hasNoVehicles" value="No"/>
                        <label for="css">CSS</label>
                    </form>
                </section>
                )
}