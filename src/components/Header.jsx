import Logo from "@/components/Logo.jsx"
import HamburgerMenu from "./HamburgerMenu"
import LanguageIcon from "./LanguageIcon"

export default function Header() {
    return (<header className="w-full h-[70px] items-center justify-between flex flex-row flex-nowrap px-4">
        <div className="flex items-center justify-between gap-2">
            <Logo />
            <p>EcoTrack</p>
        </div>
        <div className="flex items-center justify-between gap-2">
            <LanguageIcon />
            <HamburgerMenu />
        </div>
    </header>
    )
}