'use client'

import { useState } from "react";

const divInputBaseStyle = "flex flex-col justify-center bg-primary rounded-xl p-4";

const InputBoxBaseStyle = "bg-detail rounded-md border-1 text-colorForText p-1 mt-1";

const InputTitle = "text-xl text-colorForText font-extrabold";


export default function CalculationForm() {

    
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [kms, setKms] = useState();
    const [employees, setEmployees] = useState();
    const [kwh, setKwh] = useState();
    const [water, setWater] = useState();

    const [result, setResult] = useState("");
    
    const calculateFootprint = (kms, employees, kwh, water) => {
        kms = Number(kms) || 0;
        employees = Number(employees) || 0;
        kwh = Number(kwh) || 0;
        water = Number(water) || 0;
        
        const footprint = (kms * 0.2) + (employees * 167) + (kwh * 0.6) + (water * 0.5)
        return footprint.toFixed(2)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}\nCompany: ${company}\nKM's: ${kms}\nEmployees: ${employees}\nKWh: ${kwh}\nWater: ${water}`)
        const footprint = calculateFootprint(kms, employees, kwh, water);
        setResult(`Hello, ${name}! Your company ${company} has a carbon footprint of ${footprint} kg CO₂ per month.`);
    
    }

    return (
        <section className="grid place-items-center p-5">

            <form onSubmit={handleSubmit} className="grid gap-8">

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="name">What is your first name?</label>

                    <input className={`${InputBoxBaseStyle}`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name..." type="text" name="name" id="name" />

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="company">What is your company's name?</label>

                    <input className={`${InputBoxBaseStyle}`} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your company's name..." type="text" name="company" id="company" />

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="kms">How many kilometers your company's vehicles run?</label>

                    <input className={`${InputBoxBaseStyle}`} value={kms} onChange={(e) => setKms(e.target.value)} placeholder="How many KM's..." type="text" name="kms" id="kms" />


                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="employees">How many employees does your company have?</label>

                    <input className={`${InputBoxBaseStyle}`} value={employees} onChange={(e) => setEmployees(e.target.value)} placeholder="How many employees..." type="text" name="employees" id="employees" />

                </fieldset>

                <fieldset className={`${divInputBaseStyle}`}>

                    <label className={`${InputTitle}`} htmlFor="kwh">How many KWh does your company usually uses in a month?</label>

                    <input className={`${InputBoxBaseStyle}`} value={kwh} onChange={(e) => setKwh(e.target.value)} placeholder="How many KWh..." type="text" name="kwh" id="kwh" />

                </fieldset>

                <fieldset>

                    <div className={`${divInputBaseStyle}`}>

                        <label className={`${InputTitle}`}>How much water does your company usually uses in a month (m³)?</label>

                        <input className={`${InputBoxBaseStyle}`} value={water} onChange={(e) => setWater(e.target.value)} placeholder="Ex: 33 m³" type="text" name="waterUse" id="waterUse" />

                    </div>

                </fieldset>

                <button onClick={calculateFootprint} className={`${divInputBaseStyle} text-white font-extrabold cursor-pointer`} type="submit">Submit</button>

            </form>

            {result && (
                <div className="mt-8 p-4 bg-green-200 rounded">
                    <p>{result}</p>
                </div>
            )}
        </section>
    )
}