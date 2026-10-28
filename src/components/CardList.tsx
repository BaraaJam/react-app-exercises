import Card from "./card.tsx";

export default function CardList() {
    return (
        <section className="w-full max-w-312 mx-auto px-6 my-16">

            {/* Section Header */}
            <div className="mb-8 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-2">
                    Featured Products
                </h2>
                <p className="text-sm sm:text-base text-[#4B5563]">
                    Explore our most popular wholesale items picked for you.
                </p>
            </div>

            {/* Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </section>
    )
}