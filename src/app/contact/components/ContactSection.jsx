'use client'

import Button from "@/components/Button.jsx"
import Link from "next/link"

export default function ContactSection() {

    return (
        <section className="grid place-items-center p-5">
            <div className="w-[90%]">
                <h1 className="pt-5 text-center md:text-left text-3xl font-medium text-colorForText">Contact EcoTrack!</h1>
                <form className="grid bg-lighterText px-8 py-6 mt-6 rounded-xl" action="/submit" method="POST">
                    <label className="pb-2" htmlFor="name">Name:</label>
                    <input className="bg-background rounded-md px-2 py-1" type="text" id="name" name="name" required />

                    <label className="pt-5 pb-2" htmlFor="email">Email:</label>
                    <input className="bg-background rounded-md px-2 py-1" type="email" id="email" name="email" required />

                    <label className="pt-5 pb-2" htmlFor="company">Company:</label>
                    <input className="bg-background rounded-md px-2 py-1" type="text" id="company" name="company" required />

                    <label className="pt-5 pb-2" htmlFor="message">Message:</label>
                    <textarea className="bg-background rounded-md px-2 py-1" id="message" name="message" rows="5" cols="30" required></textarea>

                    <div className="pt-6 w-[70%] justify-self-center">
                        <Button isMain={true} type='submit' content='Send' />
                    </div>
                </form>
                
                <div className="pt-5">
                    <ul className="pt-4">
                        <h3 className="font-bold text-xl pb-3">
                            Reach us in our social media:
                        </h3>
                        <div className="grid md:grid-cols-4">

                        <li className="py-4 hover:underline">
                            <a className="flex flex-row flex-nowrap items-center gap-2" href="https://www.linkedin.com/in/tiago-tiradentes" target="_blank" rel="noopener noreferrer">
                                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 0.25H1.24609C0.558594 0.25 0 0.816406 0 1.51172V16.4883C0 17.1836 0.558594 17.75 1.24609 17.75H16.25C16.9375 17.75 17.5 17.1836 17.5 16.4883V1.51172C17.5 0.816406 16.9375 0.25 16.25 0.25ZM5.28906 15.25H2.69531V6.89844H5.29297V15.25H5.28906ZM3.99219 5.75781C3.16016 5.75781 2.48828 5.08203 2.48828 4.25391C2.48828 3.42578 3.16016 2.75 3.99219 2.75C4.82031 2.75 5.49609 3.42578 5.49609 4.25391C5.49609 5.08594 4.82422 5.75781 3.99219 5.75781ZM15.0117 15.25H12.418V11.1875C12.418 10.2188 12.3984 8.97266 11.0703 8.97266C9.71875 8.97266 9.51172 10.0273 9.51172 11.1172V15.25H6.91797V6.89844H9.40625V8.03906H9.44141C9.78906 7.38281 10.6367 6.69141 11.8984 6.69141C14.5234 6.69141 15.0117 8.42188 15.0117 10.6719V15.25Z" fill="black" />
                                </svg>
                                LinkedIn
                            </a>
                        </li>

                        <li className="py-4 hover:underline">
                            <a className="flex flex-row flex-nowrap items-center gap-2" href="https://www.github.com/tiagocuzzuolnunes" target="_blank" rel="noopener noreferrer">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="lighterText"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 0.2975C5.37 0.2975 0 5.6675 0 12.2975C0 17.5675 3.438 22.0175 8.205 23.6275C8.805 23.7375 9.025 23.3875 9.025 23.0875C9.025 22.8175 9.015 22.0975 9.01 21.1175C5.6725 21.8175 4.9675 19.4375 4.9675 19.4375C4.4225 18.0375 3.6325 17.6675 3.6325 17.6675C2.545 16.9175 3.7175 16.9325 3.7175 16.9325C4.9225 17.0175 5.555 18.1725 5.555 18.1725C6.6375 20.0575 8.455 19.4975 9.14 19.1975C9.245 18.4175 9.555 17.8675 9.9 17.5675C7.21 17.2675 4.39 16.2175 4.39 11.5675C4.39 10.2575 4.845 9.1975 5.61 8.3775C5.49 8.0775 5.1 6.8175 5.715 5.1175C5.715 5.1175 6.705 4.7975 8.995 6.3975C9.935 6.1375 10.935 6.0075 11.935 6.0025C12.935 6.0075 13.935 6.1375 14.875 6.3975C17.165 4.7975 18.155 5.1175 18.155 5.1175C18.77 6.8175 18.38 8.0775 18.26 8.3775C19.025 9.1975 19.48 10.2575 19.48 11.5675C19.48 16.2275 16.655 17.2625 13.955 17.5575C14.375 17.9175 14.755 18.6375 14.755 19.7375C14.755 21.3275 14.74 22.6775 14.74 23.0875C14.74 23.3875 14.96 23.7425 15.57 23.6225C20.33 22.0075 23.765 17.5625 23.765 12.2975C23.765 5.6675 18.395 0.2975 11.765 0.2975H12Z" />
                                </svg>
                                GitHub
                            </a>
                        </li>

                        <li className="py-4 hover:underline">
                            <a className="flex flex-row flex-nowrap items-center gap-2" href="mailto:email@tiagotiradentes.com">
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.75 1.8125C1.50937 1.8125 1.3125 2.00937 1.3125 2.25V2.8543L6.0293 6.72617C6.59531 7.19102 7.40742 7.19102 7.97344 6.72617L12.6875 2.8543V2.25C12.6875 2.00937 12.4906 1.8125 12.25 1.8125H1.75ZM1.3125 4.55234V9.25C1.3125 9.49063 1.50937 9.6875 1.75 9.6875H12.25C12.4906 9.6875 12.6875 9.49063 12.6875 9.25V4.55234L8.80469 7.74062C7.75469 8.60195 6.24258 8.60195 5.19531 7.74062L1.3125 4.55234ZM0 2.25C0 1.28477 0.784766 0.5 1.75 0.5H12.25C13.2152 0.5 14 1.28477 14 2.25V9.25C14 10.2152 13.2152 11 12.25 11H1.75C0.784766 11 0 10.2152 0 9.25V2.25Z" fill="black" />
                                </svg>
                                Email
                            </a>
                        </li>

                        <li className="py-4 hover:underline"><a href="https://www.tiagotiradentes.com" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
                        </div>
                        
                    </ul>

                </div>


            </div>
        </section>
    )
}