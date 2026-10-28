import { useState } from 'react'
import { Heart, ShoppingBag } from 'lucide-react'

export default function Card() {
    const [qty, setQty] = useState(1)
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="group bg-white border border-[#E5E7EB] rounded-3xl p-5 flex flex-col relative transition-all duration-200 hover:shadow-xl">

            {/* 1. Favorite Heart Button */}
            <button
                type="button"
                onClick={() => setIsFavorite(!isFavorite)}
                aria-label="Add to favorites"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
                <Heart
                    size={18}
                    className={isFavorite ? 'fill-[#ff4757] text-[#ff4757]' : 'text-[#4B5563] hover:text-[#ff4757]'}
                />
            </button>

            {/* 2. Image Area */}
            <div className="h-50 w-full bg-[#FAFAFA] rounded-2xl overflow-hidden flex items-center justify-center mb-5">
                <img
                    src="https://placehold.co/400x300/E5E7EB/A68A64?text=Product+Item"
                    alt="Product item"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* 3. Product Info */}
            <div className="flex flex-col flex-1 justify-between">
                <h3 className="text-lg font-semibold text-[#111827] mb-4">
                    Premium Ceramic Lamp
                </h3>

                {/* Bottom Row: Price + Quantity + Add Button */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#E5E7EB]">
                    {/* Price */}
                    <div className="text-xl font-bold text-[#111827]">
                        $89.00
                    </div>

                    {/* Controls: Quantity Pill + Add Button */}
                    <div className="flex items-center gap-2">
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-1.5 bg-[#FAFAFA] border border-[#E5E7EB] rounded-full px-2 py-1 text-sm">
                            <button
                                type="button"
                                onClick={() => setQty((q) => Math.max(1, q - 1))}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-[#111827] hover:bg-[#E5E7EB] font-bold cursor-pointer"
                            >
                                -
                            </button>
                            <span className="w-5 text-center font-semibold text-[#111827]">
                {qty}
              </span>
                            <button
                                type="button"
                                onClick={() => setQty((q) => q + 1)}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-[#111827] hover:bg-[#E5E7EB] font-bold cursor-pointer"
                            >
                                +
                            </button>
                        </div>

                        {/* Circular Add Button */}
                        <button
                            type="button"
                            aria-label="Add to cart"
                            className="w-10 h-10 rounded-full bg-[#A68A64] hover:bg-[#8C7351] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-md cursor-pointer shrink-0"
                        >
                            <ShoppingBag size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}