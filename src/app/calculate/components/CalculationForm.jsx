'use client'

import Button from "@/components/Button.jsx"
import Link from "next/link"

const divInputBaseStyle = "flex flex-col justify-center bg-primary rounded-xl p-4";

const InputBoxBaseStyle = "bg-detail rounded-md border-1 text-colorForText p-1 mt-1";

const InputTitle = "text-xl text-colorForText font-extrabold";


export default function CalculationForm() {

    return (
        <section className="grid place-items-center p-5">

            <form className="grid gap-8" action="/submit" method="POST">

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="country">Which country are you from?</label>

                    <select className={`${InputBoxBaseStyle}`} name="country" id="country">
                        <option value="">Choose a country...</option>
                        <option value="ÍS">Ísland</option>
                        <option value="NZ">New Zealand</option>
                        <option value="BR">Brasil</option>
                        <option value="US">United States</option>
                    </select>

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="name">What is your full name?</label>

                    <input className={`${InputBoxBaseStyle}`} placeholder="Your name..." type="text" name="name" id="name" />

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="company">What is your company's name?</label>

                    <input className={`${InputBoxBaseStyle}`} placeholder="Your company's name..." type="text" name="company" id="company" />

                </fieldset>


                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="hasVehicles">Does your company use vehicles? (self-owned and third-party)</label>

                    <select className={`${InputBoxBaseStyle}`} name="hasVehicles" id="hasVehicles">
                        <option value="">Choose a option...</option>
                        <option value="YesVehicles">Yes</option>
                        <option value="NoVehicles">No</option>
                    </select>

                </fieldset>


                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>Which types of vehicles does your company have?</label>

                    <div>
                        <input type="checkbox" id="groundSmall" name="groundSmall" />

                        <label className="ml-2" htmlFor="groundSmall">Ground Small (motorcycles, cars, vans)</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="groundSmallMileage">What is the total mileage? (in kilometers)</label>

                        <input className={`${InputBoxBaseStyle}`} placeholder="Ex: 12 km" type="text" id="groundSmallMileage" name="groundSmallMileage" />

                    </div>

                    <div>

                        <input type="checkbox" id="groundBig" name="groundBig" />

                        <label className="ml-2" htmlFor="groundBig">Ground Big (buses, trucks)</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="groundBigMileage">What is the total mileage? (in kilometers)</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="groundBigMileage" name="groundBigMileage" />

                    </div>

                    <div>

                        <input type="checkbox" id="groundSpecial" name="groundSpecial" />

                        <label className="ml-2" htmlFor="groundSpecial">Special Ground Vehicles (tractors, excavators, maintenence)</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="groundSpecialMileage">What is the total mileage? (in kilometers)</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="groundSpecialMileage" name="groundSpecialMileage" />

                    </div>

                    <div>

                        <input type="checkbox" id="airVehicles" name="airVehicles" />

                        <label className="ml-2" htmlFor="airVehicles">Air Vehicles (planes, helicopters)</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="airVehiclesMileage">What is the total mileage? (in kilometers)</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="airVehiclesMileage" name="airVehiclesMileage" />

                    </div>

                    <div>

                        <input type="checkbox" id="waterVehicles" name="waterVehicles" />

                        <label className="ml-2" htmlFor="waterVehicles">Water Vehicles (boats, ships)</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="waterVehiclesMileage">What is the total mileage? (in kilometers)</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="waterVehiclesMileage" name="waterVehiclesMileage" />

                    </div>

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>Which types of fuels does your company's vehicles run on?</label>

                    <div>

                        <input type="checkbox" id="gasoline" name="gasoline" />

                        <label className="ml-2" htmlFor="gasoline">Gasoline</label>

                    </div>

                    <div>

                        <input type="checkbox" id="ethanol" name="ethanol" />

                        <label className="ml-2" htmlFor="ethanol">Ethanol</label>

                    </div>

                    <div>

                        <input type="checkbox" id="diesel" name="diesel" />

                        <label className="ml-2" htmlFor="diesel">Diesel</label>

                    </div>

                    <div>

                        <input type="checkbox" id="CNG" name="CNG" />

                        <label className="ml-2" htmlFor="CNG">CNG</label>

                    </div>

                    <div>

                        <input type="checkbox" id="evs" name="evs" />

                        <label className="ml-2" htmlFor="evs">EVs</label>

                    </div>

                    <div>

                        <input type="checkbox" id="hybrid" name="hybrid" />

                        <label className="ml-2" htmlFor="hybrid">Hybrid</label>

                    </div>

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>What kind of transportation do your employees use to get to work?</label>

                    <div>

                        <input type="checkbox" id="gasCar" name="gasCar" />

                        <label className="ml-2" htmlFor="gasCar">Car (run on gas)</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="gasCarNum">How many?</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="gasCarNum" name="gasCarNum" />

                    </div>

                    <div>

                        <input type="checkbox" id="evCar" name="evCar" />

                        <label className="ml-2" htmlFor="evCar">Car (electric)</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="evCarNum">How many?</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="evCarNum" name="evCarNum" />

                    </div>

                    <div>

                        <input type="checkbox" id="hybridCar" name="hybridCar" />

                        <label className="ml-2" htmlFor="hybridCar">Car (Hybrid)</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="hybridCarNum">How many?</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="hybridCarNum" name="hybridCarNum" />

                    </div>

                    <div>

                        <input type="checkbox" id="motorcycle" name="motorcycle" />

                        <label className="ml-2" htmlFor="motorcycle">Motorcycle</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="motorcycleNum">How many?</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="motorcycleNum" name="motorcycleNum" />

                    </div>

                    <div>

                        <input type="checkbox" id="publicTransport" name="publicTransport" />

                        <label className="ml-2" htmlFor="publicTransport">Public Transportation</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="publicTransportNum">How many?</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="publicTransportNum" name="publicTransportNum" />

                    </div>

                    <div>

                        <input type="checkbox" id="bike" name="bike" />

                        <label className="ml-2" htmlFor="bike">Bycicle</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="bikeNum">How many?</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="bikeNum" name="bikeNum" />

                    </div>

                    <div>

                        <input type="checkbox" id="remote" name="remote" />

                        <label className="ml-2" htmlFor="remote">Remote Work</label>

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="remoteNum">How many?</label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="remoteNum" name="remoteNum" />

                    </div>

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>How much electricity does your company usually uses in a month (kWh)?</label>

                    <input className={`${InputBoxBaseStyle}`} placeholder="Ex: 9 kWh" type="text" name="electrictyUse" id="electricityUse" />

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>What is(are) the generation method(s) of the eletricity used in your company?</label>

                    <div>

                        <input type="checkbox" id="hydropower" name="hydropower" />

                        <label className="ml-2" htmlFor="hydropower">Hydropower</label>

                    </div>

                    <div>

                        <input type="checkbox" id="thermoelectric" name="thermoelectric" />

                        <label className="ml-2" htmlFor="thermoelectric">Thermoelectric</label>

                    </div>

                    <div>

                        <input type="checkbox" id="wind" name="wind" />

                        <label className="ml-2" htmlFor="wind">Wind</label>

                    </div>

                    <div>

                        <input type="checkbox" id="solar" name="solar" />

                        <label className="ml-2" htmlFor="solar">Solar</label>

                    </div>

                    <div>

                        <input type="checkbox" id="nuclear" name="nuclear" />

                        <label className="ml-2" htmlFor="nuclear">Nuclear</label>

                    </div>

                    <div>

                        <input type="checkbox" id="geothermal" name="geothermal" />

                        <label className="ml-2" htmlFor="geothermal">Geothermal</label>

                    </div>

                </fieldset>

                <fieldset>

                    <div className={`${divInputBaseStyle}`}>

                        <label className={`${InputTitle}`}>How much water does your company usually uses in a month (m³)?</label>

                        <input className={`${InputBoxBaseStyle}`} placeholder="Ex: 33 m³" type="text" name="waterUse" id="waterUse" />

                    </div>

                </fieldset>

                <fieldset>

                    <div className={`${divInputBaseStyle}`}>

                        <label className={`${InputTitle}`} htmlFor="hasTravel">Do you or your employees go on business trips for your company?</label>

                        <select className={`${InputBoxBaseStyle}`} name="hasTravel" id="hasTravel">
                            <option value="">Choose a option...</option>
                            <option value="YesTravel">Yes</option>
                            <option value="NoTravel">No</option>
                        </select>

                    </div>

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>How many kilometers in travel do you and/or your employees have? (pkm)</label>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="groundTravel">Ground travel: </label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="groundTravel" name="groundTravel" />

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="airTravel">Air travel: </label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="airTravel" name="airTravel" />

                    </div>

                    <div className={`${divInputBaseStyle}`}>

                        <label htmlFor="waterTravel">Water travel: </label>

                        <input className={`${InputBoxBaseStyle}`} type="text" id="waterTravel" name="waterTravel" />

                    </div>

                </fieldset>

                <fieldset>

                    <div className={`${divInputBaseStyle}`}>

                        <label className={`${InputTitle}`} htmlFor="wasteDestination">What is the destination of your company's waste?</label>

                        <select className={`${InputBoxBaseStyle}`} name="country" id="country">
                            <option value="">Choose a option...</option>
                            <option value="landfill">Landfill</option>
                            <option value="incineration">Incineration</option>
                            <option value="recycling">Recycling</option>
                            <option value="composting">Composting</option>
                            <option value="reuse">Reuse</option>
                            <option value="hazard">Hazard waste</option>
                            <option value="other">Other</option>
                        </select>

                    </div>

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>Which one of these materials does your company in it's regular purchases?</label>

                    <div>

                        <input type="checkbox" id="paper" name="paper" />

                        <label className="ml-2" htmlFor="paper">Paper</label>

                    </div>

                    <div>

                        <input type="checkbox" id="plastic" name="plastic" />

                        <label className="ml-2" htmlFor="plastic">Plastic</label>

                    </div>

                    <div>

                        <input type="checkbox" id="metal" name="metal" />

                        <label className="ml-2" htmlFor="metal">Metal</label>

                    </div>

                    <div>

                        <input type="checkbox" id="glass" name="glass" />

                        <label className="ml-2" htmlFor="glass">Glass</label>

                    </div>

                    <div>

                        <input type="checkbox" id="wood" name="wood" />

                        <label className="ml-2" htmlFor="wood">Wood</label>

                    </div>

                </fieldset>

                <input className={`${divInputBaseStyle} text-white font-extrabold`} type="submit" />

            </form>
        </section>
    )
}