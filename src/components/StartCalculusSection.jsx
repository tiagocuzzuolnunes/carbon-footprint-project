'use client'

import Button from "./Button"
import GET from '@/api/users/route.js'
import POST from '@/api/users/route.js'

export default function StartCalculusSection() {

    return (
        <section className="flex flex-col items-center p-5">
            <h1 className="pt-5 text-center text-3xl text-colorForText">Start Calculating!</h1>
            <p className="py-5 text-center text-md text-colorForText">Fill in the form carefully, take your time so you can put the most data possible!</p>
            <form>
                <input type="text"></input>
            </form>
        </section>
    )
}