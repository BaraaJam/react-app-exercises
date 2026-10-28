import { ArrowRight } from 'lucide-react'

// 1. Interface for the stats
interface StatItem {
    value: string
    label: string
}

// 2. Stats data
const stats: StatItem[] = [
    { value: '1,464+', label: 'Products In Stock' },
    { value: '12,500+', label: 'Happy Customers' },
    { value: '99.8%', label: 'Positive Reviews' },
]

export default function Hero() {
    return (
        // Outer wrapper: matches .hero-wrapper
        <section className="w-full max-w-312 mx-auto px-6">

            {/* Container: dark slate (--hero-bg: #1e293b) + rounded 32px */}
            <div className="bg-[#1e293b] text-white rounded-4xl p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">

                {/* Left Side: Content & Actions */}
                <div className="max-w-135 z-10 text-center lg:text-left">

                    {/* Main Title: 56px bold */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
                        Discover Quality for Every Need
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10">
                        Explore our curated catalog of premium goods at wholesale prices. Fast delivery, trusted quality, and 24/7 dedicated support.
                    </p>

                    {/* Action Buttons: matches .btn-white & .btn-transparent */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <a
                            href="#products"
                            className="bg-white hover:bg-[#8C7351] text-[#1e293b] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-md"
                        >
                            Shop Now
                            <ArrowRight size={18} />
                        </a>

                        <button
                            type="button"
                            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-200"
                        >
                            Explore Deals
                        </button>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                    {stat.value}
                                </h4>
                                <p className="text-xs sm:text-sm text-white/60">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right Side: Modern Glass / Decorative Visual */}
                <div className="relative flex items-center justify-center w-full lg:w-auto">
                    {/* Glowing background blur */}
                    <div className="absolute w-72 h-72 bg-[#A68A64]/20 rounded-full blur-3xl pointer-events-none" />

                    {/* Glass Card Container */}
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-white/3 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col items-center justify-center p-6 text-center">

                        <h3 className="text-xl font-bold text-white mb-2">
                            Wholesale Deals
                        </h3>
                        <p className="text-white/60 text-xs leading-relaxed">
                            Save up to 40% on bulk orders with free worldwide shipping.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}