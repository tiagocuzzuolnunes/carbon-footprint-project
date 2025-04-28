'use client'


import Logo from "@/components/Logo.jsx"
import HamburgerMenu from "./HamburgerMenu"
import LanguageIcon from "./LanguageIcon"
import Button from "./Button"
import Link from "next/link"

export default function Header() {

    return (<header className="w-full h-[70px] md:h-[85px] items-center justify-between flex flex-row flex-nowrap px-5 shadow-md">
        <Link href="/">
            <div className="flex items-center justify-between gap-2">
                <Logo />
                <p className="text-primary font-bold">EcoTrack</p>
            </div>
        </Link>
        <div className="flex items-center justify-between gap-4">
            <div className="hidden md:flex px-4">
                <ul className="flex gap-6 items-center">
                <Link href="/learnmore" onClick={() => setIsClicked(prev => prev == 1 ? 0 : 1)}><li className="py-2 hover:text-lighterText">Learn More</li></Link>
                <Link href="/contact" onClick={() => setIsClicked(prev => prev == 1 ? 0 : 1)}><li className="py-2 hover:text-lighterText">Contact</li></Link>
                {/* <Link href="/educate" onClick={() => setIsClicked(prev => prev == 1 ? 0 : 1)}><li className="py-2 hover:text-lighterText">Education</li></Link> */}
                <Link href="/calculate" onClick={() => setIsClicked(prev => prev == 1 ? 0 : 1)}><li className="py-2 hover:text-lighterText"><Button type="submit" content='Start Now' isMain={true}></Button></li></Link>
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