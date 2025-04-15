import Logo from "@/components/Logo.jsx"
import HamburgerMenu from "./HamburgerMenu"
import LanguageIcon from "./LanguageIcon"

export default function Header() {
    return (<header className="w-full h-[70px] items-center justify-between flex flex-row flex-nowrap px-5 shadow-md">
        <div className="flex items-center justify-between gap-2">
            <Logo />
            <p className="text-primary font-bold">EcoTrack</p>
        </div>
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center justify-between gap-1">
                <LanguageIcon />
                <p>EN</p>
            </div>
            <HamburgerMenu />
        </div>
    </header>
    )
}