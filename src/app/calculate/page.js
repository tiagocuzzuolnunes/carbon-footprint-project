import StartCalculusSection from "@/components/StartCalculusSection";
import Header from "@/components/Header";
import InformativeSection from "@/components/InformativeSection";
import LearnSection from "@/components/LearnSection";
import Image from "next/image";
import CountrySection from "@/components/CountrySection";

export default function Calculate() {
    return (
        <div>
            <StartCalculusSection />
            <CountrySection />
            <LearnSection />
        </div>
    )
}