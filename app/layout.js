import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LWS - Dev News",
  description: "Latest developer news from the world of web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-10 h-80 w-80 rounded-full"></div>
            <div className="absolute right-0 top-52 h-72 w-72 rounded-full"></div>
            <div className="noise absolute inset-0"></div>
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <Header />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
