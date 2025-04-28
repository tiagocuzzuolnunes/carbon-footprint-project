'use client'

import Button from "@/components/Button.jsx"
import Link from "next/link"

export default function LearnTop() {

    return (
        <section className="grid place-items-center p-5">
            <div className="w-[90%]">
                <h1 className="pt-5 text-center md:text-left text-3xl font-medium text-colorForText">Learn More About Our Calculator</h1>
                <p className="pt-5"><span className="font-bold">EcoTrack</span>'s carbon footprint calculator use extense scientific work to calculate your business enviromental impact as precise as possible.</p>
                <p>We use the Greenhouse Gas Protocol (GGP) approach to calculate, which is basically divided in three scopes:</p>
                <div className="pt-4">
                    <p className="pt-4"><span className="font-bold">Scope 1 – </span>emissions created directly by your organisation through actions such as running climate systems and fuelling company vehicles.<br /></p>
                    <p className="pt-4"><span className="font-bold">Scope 2 – </span>indirect emissions caused by your company, such as energy bought from external sources.<br /></p>
                    <p className="pt-4"><span className="font-bold">Scope 3 – </span>indirect emissions that occur because of your business activity, such as transportation of office supplies or employees travelling to and from work.<br /></p>
                </div>
                <h2 className="pt-9 pb-5 text-center md:text-left text-3xl font-medium text-colorForText">
                    How we calculate your scope 1 and 2 corporate carbon footprint
                </h2>
                <p>
                    To calculate your <span className="font-bold">scope 1</span> and <span className="font-bold">scope 2</span> carbon footprint, you first need to gather records pertaining to energy consumption over the course of an allocated time span, usually a year.
                    Your records should comprise all utility bills including water, electricity, and gas as well as travel data such as plane and train tickets and fuel receipts for company vehicles.
                </p>
                <div>
                    <ul className="pt-4">Measurements:
                        <li className="py-2">- Energy such as gas and electricity is measured in kilowatt-hours – this should be on your utility bills.</li>
                        <li className="py-2">- Water in cubic metres and the totals should be listed on utility bills.</li>
                        <li className="py-2">- Car travel in kilometres - if you haven't kept track of distances travelled by car throughout the year, add together the monetary totals from all your fuel receipts and enter this amount into a fuel calculator website.</li>
                        <li className="py-2">- Rail or boat travel in kilometres per passenger (pkm) - this simply means that if two employees made a 1,000-mile round trip, the pkm figure for this trip would be 2,000.</li>
                        <li className="py-2">- Air travel in pkm is calculated in the same way as rail or boat travel.</li>
                    </ul>

                </div>
                <p className="italic pt-3 text-lighterText">PKM stands for passenger-kilometers, a unit of measurement in transportation that represents the transport of one passenger over one kilometer. It's used to quantify the total distance traveled by passengers in a specific mode of transport (e.g., road, rail, air). For example, if one passenger travels 20 kilometers, that's 20 passenger-kilometers</p>

                <div className="pt-8 flex flex-col gap-3 w-full">
                    <Link href="/calculate"><Button isMain={true} type='button' content='Start Now' /></Link>
                </div>
            </div>
        </section>
    )
}