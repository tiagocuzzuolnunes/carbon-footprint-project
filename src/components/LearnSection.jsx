import Button from "./Button"

export default function LearnSection() {
    return (
        <section className="grid md:grid-cols-2 flex-col place-items-center p-5">
            <img src="/learn2.png" alt="Illustration of person studying with a computer" className="md:hidden w-full rounded-xl" />
            <div className="w-[90%]">
                <h1 className="pt-5 text-center text-3xl md:text-3xl/10 text-colorForText"><span className="font-bold">Learn</span><br />&<br /><span className="font-bold">Grow</span></h1>
                <p className="py-5 text-center text-lg text-colorForText">Access our educational resources to become a sustainable business leader</p>
                <div className="pb-8 w-full">
                    <Button isMain={true} type='button' content='View Resources' />
                </div>
            </div>
            <img src="/learn2.png" alt="Illustration of person studying with a computer" className="hidden md:inline w-full rounded-xl" />
        </section>
    )
}