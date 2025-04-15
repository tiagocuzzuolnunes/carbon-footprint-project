import Button from "./Button"

export default function CtaSection() {
    return(
        <section className="flex flex-col items-center p-5">
            <img src="/banner.jpg" alt="Picture of futuristic nature harmony with society" className="w-full rounded-xl" />
            <h1 className="pt-5 text-center text-3xl text-colorForText">Calculate Your Business Carbon Footprint</h1>
            <p className="py-5 text-center text-md text-colorForText">Make your business sustainable and eco- friendly</p>
            <Button isMain={true} type='button' content='Start Now' />
            <Button isMain={false} type='button' content='Learn More' />
        </section>
    )
}