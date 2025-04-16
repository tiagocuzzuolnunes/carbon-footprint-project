"use client";
import { useState } from "react"
export default function HamburgerMenu() {

    let [isClicked, setIsClicked] = useState(0);

    return (
        

            <div className="relative">
            

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
                onClick={() => setIsClicked(prev => prev == 1 ? 0 : 1)} 
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                
            </svg>
            
                <nav className={`${isClicked === 1 ? "flex rounded-b-xl absolute top-13 flex-nowrap whitespace-nowrap text-right right-[-1rem] bg-white py-4 pl-8 pr-4" : "hidden"}`}>
                    <ul>
                        <li className="py-2"><a href="#">Start Now</a></li>
                        <li className="py-2"><a href="#">Learn More</a></li>
                        <li className="py-2"><a href="#">Contact</a></li>
                        <li className="py-2"><a href="#">Education</a></li>
                        <li className="py-2"><a href="#">About</a></li>
                    </ul>
                </nav>

        </div>
    )
}