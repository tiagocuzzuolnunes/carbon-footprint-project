'use client'


import Logo from "@/components/Logo.jsx"
import HamburgerMenu from "./HamburgerMenu"
import LanguageIcon from "./LanguageIcon"
import Button from "./Button"

export default function Header() {

    return (<header className="w-full h-[70px] md:h-[85px] items-center justify-between flex flex-row flex-nowrap px-5 shadow-md">
        <div className="flex items-center justify-between gap-2">
            <Logo />
            <p className="text-primary font-bold">EcoTrack</p>
        </div>
        <div className="flex items-center justify-between gap-4">
            <div className="hidden md:flex px-4">
                <ul className="flex gap-6 items-center">
                    <li className="py-2"><a className="hover:text-lighterText" href="#">Learn More</a></li>
                    <li className="py-2"><a className="hover:text-lighterText" href="#">Contact</a></li>
                    <li className="py-2"><a className="hover:text-lighterText" href="#">Education</a></li>
                    <li className="py-2"><a className="hover:text-lighterText" href="#">About</a></li>
                    <li className="py-2"><Button type="submit" content='Start Now' isMain={true}></Button></li>
                </ul>
            </div>
            <div className="flex items-center justify-between gap-1 cursor-pointer">
                <LanguageIcon />
                <select className="cursor-pointer" name="languageOption" id="languageOption">
                    <option value="en">EN</option>
                    <option value="is">IS</option>
                    <option value="pt">PT</option>
                </select>
            </div>

            <HamburgerMenu />
        </div>
    </header>
    )
}