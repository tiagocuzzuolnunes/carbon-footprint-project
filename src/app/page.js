import "@/i18n.js"
import CtaSection from "@/components/CtaSection";
import Header from "@/components/Header";
import InformativeSection from "@/components/InformativeSection";
import LearnSection from "@/components/LearnSection";
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
