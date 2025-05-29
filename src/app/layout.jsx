import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const InstrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-instrument-serif"
})

export const metadata = {
  title: "CQ Webs",
  description: "Start your digital journey with CQ Webs",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${InstrumentSerif.className} antialiased overflow-x-hidden bg-black`}>
        {children}
      </body>
    </html>
  );
}
