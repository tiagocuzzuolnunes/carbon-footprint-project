'use client'

import Button from "@/components/Button.jsx"
import Link from "next/link"

export default function CalculationForm() {

    return (
        <section className="grid place-items-center p-5">
            <form className="grid gap-4" action="/submit" method="POST">

                <fieldset>

                    <label htmlFor="country">Which country are you from?</label>
                    <select name="country" id="country">
                        <option value="">Choose a country</option>
                        <option value="ÍS">Ísland</option>
                        <option value="NZ">New Zealand</option>
                        <option value="BR">Brasil</option>
                        <option value="US">United States</option>
                    </select>

                </fieldset>

                <fieldset>

                    <label htmlFor="name">What is your full name?</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="company">What is your company's name?</label>
                    <input type="text" name="company" id="company" />
                    <label htmlFor="company">What is your company's name?</label>
                    <input type="text" name="company" id="company" />

                </fieldset>

                <fieldset>
                    <label htmlFor="hasVehicles">Does your company use vehicles? (self-owned and third-party)</label>
                    <select name="hasVehicles" id="hasVehicles">
                        <option value="">Choose a option</option>
                        <option value="YesVehicles">Yes</option>
                        <option value="NoVehicles">No</option>
                    </select>

                    <fieldset>
                        <legend>Which types of vehicles does your company have?</legend>
                        <div>
                            <input type="checkbox" id="groundSmall" name="groundSmall" />
                            <label htmlFor="groundSmall">Ground Small (motorcycles, cars, vans)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="groundBig" name="groundBig" />
                            <label htmlFor="groundBig">Ground Big (buses, trucks)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="groundSpecial" name="groundSpecial" />
                            <label htmlFor="groundSpecial">Special Ground Vehicles (tractors, excavators, maintenence)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="airVehicles" name="airVehicles" />
                            <label htmlFor="airVehicles">Air Vehicles (planes, helicopters)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="waterVehicles" name="waterVehicles" />
                            <label htmlFor="waterVehicles">Water Vehicles (boats, ships)</label>
                        </div>

                    </fieldset>

                    <fieldset>
                        <legend>How many vehicles...</legend>
                        <input type="text" name="number of XYZ Vehicles" id="numberXYZvehicles" />

                    </fieldset>
                    <fieldset>
                        <legend>What is the mileage...</legend>
                        <input type="text" name="number of XYZ Vehicles" id="numberXYZvehicles" />

                    </fieldset>

                    <fieldset>

                        <legend>Which types of fuels does your company's vehicles run on?</legend>
                        <div>
                            <input type="checkbox" id="gasoline" name="gasoline" />
                            <label htmlFor="gasoline">Gasoline</label>
                        </div>
                        <div>
                            <input type="checkbox" id="ethanol" name="ethanol" />
                            <label htmlFor="ethanol">Ethanol</label>
                        </div>
                        <div>
                            <input type="checkbox" id="diesel" name="diesel" />
                            <label htmlFor="diesel">Diesel</label>
                        </div>
                        <div>
                            <input type="checkbox" id="CNG" name="CNG" />
                            <label htmlFor="CNG">CNG</label>
                        </div>
                        <div>
                            <input type="checkbox" id="evs" name="evs" />
                            <label htmlFor="evs">EVs</label>
                        </div>
                        <div>
                            <input type="checkbox" id="hybrid" name="hybrid" />
                            <label htmlFor="hybrid">Hybrid</label>
                        </div>

                    </fieldset>

                </fieldset>

                <fieldset>

                    <legend>How much electricity does your company usually uses in a month (kWh)?</legend>
                    <input type="text" name="electrictyUse" id="electricityUse" />

                    <fieldset>

                        <legend>What is(are) the generation method(s) of the eletricity used in your company?</legend>
                        <div>
                            <input type="checkbox" id="hydropower" name="hydropower" />
                            <label htmlFor="hydropower">Hydropower</label>
                        </div>
                        <div>
                            <input type="checkbox" id="thermoelectric" name="thermoelectric" />
                            <label htmlFor="thermoelectric">Thermoelectric</label>
                        </div>
                        <div>
                            <input type="checkbox" id="wind" name="wind" />
                            <label htmlFor="wind">Wind</label>
                        </div>
                        <div>
                            <input type="checkbox" id="solar" name="solar" />
                            <label htmlFor="solar">Solar</label>
                        </div>
                        <div>
                            <input type="checkbox" id="nuclear" name="nuclear" />
                            <label htmlFor="nuclear">Nuclear</label>
                        </div>
                        <div>
                            <input type="checkbox" id="geothermal" name="geothermal" />
                            <label htmlFor="geothermal">Geothermal</label>
                        </div>

                    </fieldset>

                </fieldset>

                <fieldset>

                    <legend>How much water does your company usually uses in a month (m³)?</legend>
                    <input type="text" name="waterUse" id="waterUse" />

                </fieldset>

                <fieldset>
                    <label htmlFor="hasTravel">Do you or your employees go on business trips for your company?</label>
                    <select name="hasTravel" id="hasTravel">
                        <option value="">Choose a option</option>
                        <option value="YesTravel">Yes</option>
                        <option value="NoTravel">No</option>
                    </select>

                    <fieldset>
                        <legend>How many kilometers in travel do you have? (pkm)</legend>
                        <div>
                            <input type="text" id="groundTravel" name="groundTravel" />
                            <label htmlFor="groundTravel">Ground travel: </label>
                        </div>
                        <div>
                            <input type="text" id="airTravel" name="airTravel" />
                            <label htmlFor="airTravel">Air travel: </label>
                        </div>
                        <div>
                            <input type="text" id="waterTravel" name="waterTravel" />
                            <label htmlFor="waterTravel">Water travel: </label>
                        </div>

                    </fieldset>
                </fieldset>

            </form>
        </section>
    )
}