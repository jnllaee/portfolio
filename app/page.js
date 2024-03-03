import Hero from "./components/hero";

export default function Home() {
    return (
        <main className="flex flex-col pt-10 lg:pt-20 items-center justify-center max-h-screen overflow-y-hidden">
            <Hero />
        </main>
    );
}
