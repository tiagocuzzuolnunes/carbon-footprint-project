'use client'

import Button from "./Button"
import Link from "next/link"

export default function CtaSection() {

    return (
        <section className="grid md:grid-cols-2 flex-col place-items-center p-5">
            <img src="/banner2.png" alt="Picture of futuristic nature harmony with society" className="w-full rounded-xl" />
            <div className="w-[90%]">
                <h1 className="pt-5 text-center text-3xl font-medium text-colorForText">Calculate Your Business Carbon Footprint</h1>
                <p className="py-5 text-center text-lg text-colorForText">Make your business sustainable and eco-friendly</p>
                <div className="flex flex-col gap-3 w-full">
                    <Link href="/calculate"><Button isMain={true} type='button' content='Start Now' /></Link>
                    <Link href="/learnmore"><Button isMain={false} type='button' content='Learn More' /></Link>
                </div>
            </div>
        </section>
    )
}