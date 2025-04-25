
import CtaSection from "@/components/CtaSection";
import Header from "@/components/Header";
import InformativeSection from "@/components/InformativeSection";
import LearnSection from "@/components/EducationSection";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <CtaSection />
      <InformativeSection />
      <LearnSection />
    </div>
  );
}
