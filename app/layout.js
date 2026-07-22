import {
  Quicksand,
  Playfair_Display,
  Mochiy_Pop_One
} from "next/font/google";

import "./globals.css";

import Header from "../components/header"
import Footer from "../components/Footer"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const mochiy = Mochiy_Pop_One({
  subsets: ["latin"],
  weight: "400",
});


export { quicksand, playfair, mochiy };


export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={quicksand.className}>
        <Header />
        {children}
      <Footer />
      </body>

    </html>

  );

}