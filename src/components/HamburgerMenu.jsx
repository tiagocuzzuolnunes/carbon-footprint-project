"use client";
import { useState } from "react"
import Link from "next/link";

export default function HamburgerMenu() {

    let [isClicked, setIsClicked] = useState(0);

    return (
        

            <div className="relative md:hidden">
            

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
                        <Link href="/calculate" onClick={() => setIsClicked(prev => prev == 1 ? 0 : 1)}><li className="py-2">Start Now</li></Link>
                        <Link href="/learnmore" onClick={() => setIsClicked(prev => prev == 1 ? 0 : 1)}><li className="py-2">Learn More</li></Link>
                        <Link href="/educate" onClick={() => setIsClicked(prev => prev == 1 ? 0 : 1)}><li className="py-2">Education</li></Link>
                        <Link href="/contact" onClick={() => setIsClicked(prev => prev == 1 ? 0 : 1)}><li className="py-2">Contact</li></Link>
                    </ul>
                </nav>

        </div>
    )
}