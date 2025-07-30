'use client'

import { useState } from "react";

const divInputBaseStyle = "flex flex-col justify-center bg-primary rounded-xl p-4";

const InputBoxBaseStyle = "bg-detail rounded-md border-1 text-colorForText p-1 mt-1";

const InputTitle = "text-xl text-colorForText font-extrabold";

const countries = [
    {
        name: "ísland",
        code: "IS",
        id: 1
    },
    {
        name: "New Zealand",
        code: "NZ",
        id: 2
    },
    {
        name: "Brasil",
        code: "BR",
        id: 3
    },
    {
        name: "United States",
        code: "US",
        id: 4
    }
];

let name = "";

let company;

let companyHasVehicles;

const fuelTypes = [
    {
        type: "Gasoline",
        id: 1
    },
    {
        type: "Ethanol",
        id: 2
    },
    {
        type: "Diesel",
        id: 3
    },
    {
        type: "CNG",
        id: 4
    },
    {
        type: "EVs",
        id: 5
    },
    {
        type: "Hybrid",
        id: 6
    }
];

const companyVehicles = [
    {
        type: "Ground Small",
        example: "(motorcycles, cars, vans)",
        id: 1,
        // number: 0
    },
    {
        type: "Ground Big",
        example: "(buses, trucks)",
        id: 2
    },
    {
        type: "Special Ground Vehicles",
        example: "(tractors, excavators)",
        id: 3
    },
    {
        type: "Air Vehicles",
        example: "(planes, helicopters)",
        id: 4
    },
    {
        type: "Water Vehicles",
        example: "(boats, ships)",
        id: 5
    }
];

const employeeTransport = [
    {
        type: "Gas car",
        id: 1,
        // number: 0
    },
    {
        type: "Car (electric)",
        id: 2
    },
    {
        type: "Car (Hybrid)",
        id: 3
    },
    {
        type: "Motorcycle",
        id: 4
    },
    {
        type: "Public Transport",
        id: 5
    },
    {
        type: "Bike",
        id: 6
    },
    {
        type: "Remote",
        id: 7
    }
];

const electricityGenerationTypes = [
    {
        type: "Hydropower",
        id: 1
        // kwh?
    },
    {
        type: "Thermoelectric",
        id: 2
        // kwh?
    },
    {
        type: "Wind",
        id: 3
        // kwh?
    },
    {
        type: "Solar",
        id: 4
        // kwh?
    },
    {
        type: "Nuclear",
        id: 5
        // kwh?
    },
    {
        type: "Geothermal",
        id: 6
        // kwh?
    }
];

let hasTravel = false;

const travelTypes = [
    {
        type: "Ground",
        id: 1
        // km?
    },
    {
        type: "Air",
        id: 2
    },
    {
        type: "Water",
        id: 3
    }
]

const wasteDestination = [
    {
        type: "Landfill",
        id: 1
        // km?
    },
    {
        type: "Incineration",
        id: 2
    },
    {
        type: "Recycling",
        id: 3
    },
    {
        type: "Composting",
        id: 4
    },
    {
        type: "Reuse",
        id: 5
    },
    {
        type: "Hazard waste",
        id: 6
    },
    {
        type: "Other",
        id: 7
    }
]



export default function CalculationForm() {

    return (
        <section className="grid place-items-center p-5">

            <form className="grid gap-8">

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="country">Which country are you from?</label>

                    <select className={`${InputBoxBaseStyle}`} name="country" id="country" >
                        <option value="">Choose a country...</option>
                        {countries.map((country, index) => (
                            <option value={country.code} key={index}>{country.name}</option>
                        ))}
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

                    <select className={`${InputBoxBaseStyle}`} name="hasVehicles" id="hasVehicles" >
                        <option value="">Choose a option...</option>
                        <option value="YesVehicles">Yes</option>
                        <option value="NoVehicles">No</option>
                    </select>

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>Which types of fuels does your company's vehicles run on?</label>

                    {fuelTypes.map((fuel, index) => (
                        <div key={index}>
                            <input type="checkbox" id={fuel.type} name={fuel.type} />
                            <label className="ml-2" htmlFor={fuel.type}>{fuel.type}</label>
                        </div>
                    ))}

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>Which types of vehicles does your company use?</label>

                    {companyVehicles.map((vehicle, index) => (
                        <div key={index}>
                            <input type="checkbox" id={vehicle.type} name={vehicle.type} />
                            <label className="ml-2" htmlFor={vehicle.type}>{vehicle.type} {vehicle.example}</label>

                            <div className={`${divInputBaseStyle}`}>

                                <label htmlFor="groundSmallMileage">What is the total mileage? (in kilometers)</label>

                                <input className={`${InputBoxBaseStyle}`} placeholder="Ex: 12 km" type="text" id="groundSmallMileage" name="groundSmallMileage" />

                            </div>
                        </div>
                    ))}


                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>What kind of transportation do your employees use to get to work?</label>

                    {employeeTransport.map((transport, index) => (
                        <div key={index}>
                            <input type="checkbox" id={transport.type} name={transport.type} />
                            <label className="ml-2" htmlFor={transport.type}>{transport.type}</label>

                            <div className={`${divInputBaseStyle}`}>
                                <label htmlFor={transport.type}>How many?</label>
                                <input className={`${InputBoxBaseStyle}`} type="text" id="gasCarNum" name="gasCarNum" />
                            </div>
                        </div>
                    ))}

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>What is(are) the generation method(s) of the eletricity used in your company?</label>

                    {electricityGenerationTypes.map((electricity, index) => (
                        <div key={index}>
                            <input type="checkbox" id={electricity.type} name={electricity.type} />
                            <label className="ml-2" htmlFor={electricity.type}>{electricity.type}</label>

                            <div className={`${divInputBaseStyle}`}>
                                <label htmlFor={electricity.type}>How many kWh?</label>
                                <input className={`${InputBoxBaseStyle}`} type="text" id="gasCarNum" name="gasCarNum" />
                            </div>
                        </div>
                    ))}
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

                        <select className={`${InputBoxBaseStyle}`} name="hasTravel" id="hasTravel" >
                            <option value="">Choose a option...</option>
                            <option value="YesTravel">Yes</option>
                            <option value="NoTravel">No</option>
                        </select>

                    </div>

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`}>How many kilometers in travel do you and/or your employees have? (pkm)</label>

                    {travelTypes.map((travel, index) => (
                        <div className={`${divInputBaseStyle}`} key={index}>
                            <label htmlFor={travel.type}>{travel.type} travel: </label>
                            <input className={`${InputBoxBaseStyle}`} type="text" id={travel.type} name={travel.type} />
                        </div>
                    ))}

                </fieldset>

                <fieldset>

                    <div className={`${divInputBaseStyle}`}>

                        <label className={`${InputTitle}`} htmlFor="wasteDestination">What is the destination of your company's waste?</label>

                        <select className={`${InputBoxBaseStyle}`} name="wasteDestination" id="wasteDestination" >
                            <option value="">Choose a option...</option>
                            {wasteDestination.map((waste, index) => (
                                <option key={index} value={waste.type}>{waste.type}</option>
                            ))}
                        </select>

                    </div>

                </fieldset>

                <input className={`${divInputBaseStyle} text-white font-extrabold`} type="submit" />

            </form>
        </section>
    )
}