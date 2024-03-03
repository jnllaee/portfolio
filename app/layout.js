import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "./provider";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "jm. :)",
    description: "Portfolio created with NextJS and Tailwind CSS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} flex flex-col items-center py-10 lg:py-16 px-5 lg:px-0`}
            >
                <Providers>
                    <Navbar />
                    <main className="flex flex-row items-center justify-center w-full lg:max-w-2xl">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
