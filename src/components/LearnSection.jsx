import Button from "./Button"

export default function LearnSection() {
    return (
        <section className=" flex flex-col px-5 py-12">
            <img src="/learn2.png" alt="Picture of person holding plant" className="w-full rounded-xl" />
            <h1 className="pt-5 text-left text-3xl text-colorForText">Learn & Grow</h1>
            <p className="py-5 text-left text-md text-colorForText">Access our educational resources to become a sustainable business leader</p>
            <Button isMain={true} type='button' content='View Resources' />
        </section>
    )
}