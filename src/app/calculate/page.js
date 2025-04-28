import StartCalculusSection from "@/components/StartCalculusSection";
import Header from "@/components/Header";
import InformativeSection from "@/components/InformativeSection";
import LearnSection from "@/components/EducationSection";
import Image from "next/image";
import CountrySection from "@/components/CountrySection";
import CalculationForm from "./components/CalculationForm";

export default function Calculate() {
    return (
        <div>
            <StartCalculusSection />
            <CalculationForm />
            <LearnSection />
        </div>
    )
}