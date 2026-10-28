export default function Newsletter() {
    return (
        // Outer section matching .container + margin
        <section className="w-full max-w-312 mx-auto px-6">

            {/* Newsletter card: warm cream background (--newsletter-bg: #F5F1EB) */}
            <div className="bg-[#F5F1EB] border border-[#E5E7EB] rounded-3xl p-8 sm:p-14 text-center max-w-200 mx-auto">

                {/* Title: matches .newsletter-title */}
                <h2 className="text-2xl sm:text-[28px] font-bold text-[#111827] mb-3">
                    Subscribe to Our Newsletter & Get 30% Off
                </h2>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-[#4B5563] max-w-120 mx-auto mb-8">
                    Stay up to date with the latest wholesale deals, new arrivals, and special promotions directly in your inbox.
                </p>

                {/* Form: matches .newsletter-form */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col sm:flex-row gap-3 max-w-125 mx-auto"
                >
                    {/* Email Input: matches .newsletter-input */}
                    <input
                        type="email"
                        placeholder="Enter your email address..."
                        className="flex-1 px-6 py-3.5 bg-white text-[#111827] rounded-[15px] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#A68A64] text-sm"
                        required
                    />

                    {/* Primary Action Button */}
                    <button
                        type="submit"
                        className="bg-[#A68A64] hover:bg-[#8C7351] text-white font-semibold px-8 py-3.5 rounded-[15px] transition-colors text-sm cursor-pointer shrink-0"
                    >
                        Subscribe
                    </button>
                </form>

            </div>
        </section>
    )
}