

import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const goPoppins = Poppins({
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

const goMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "EcoTrack",
  description: "Calculate your company's carbon footprint",
};
console.log("testing")

export default function RootLayout({ children, params }) {

 
  return (
    <html lang="en">
      <body
        className={`${goPoppins.variable} ${goMontserrat.variable} antialiased`}
      >
        
          <Header />
          {children}
          <Footer />
       </body>
    </html>
  );
}
