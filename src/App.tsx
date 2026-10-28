import Header from "./components/Header";
import CardList from "./components/CardList.tsx";
import Footer from "./components/Footer";
import Hero from "./components/Hero.tsx";
import Newsletter from "./components/Newsletter.tsx";

function App() {
    return (
        // 1. Outer wrapper gives the whole page the gray background and min-height
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">

            {/* 2. Header stays at the top, outside of main */}
            <Header />
            <Hero />

            {/* 3. Main contains all the body content and cards */}
            <main className="flex-1">
                <CardList />
                <Newsletter />
            </main>

            {/* 4. Footer will go here later */}
            <Footer />
        </div>
    );
}

export default App;