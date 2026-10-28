import {Heart, ShoppingBag} from 'lucide-react'

// 1. Interface for our navigation links
interface NavItem {
    label: string
    href: string
}

// 2. Navigation items array
const navItems: NavItem[] = [
    {label: 'Home', href: '#'},
    {label: 'Products', href: '#'},
    {label: 'About', href: '#'},
    {label: 'Contact', href: '#'},
]

export default function Header() {
    return (
        // Outer floating sticky wrapper
        <header className="sticky top-8 z-50 w-full px-6 flex justify-center pointer-events-none">

            {/* Floating pill container with surface color and border */}
            <div
                className="pointer-events-auto w-full max-w-250 h-17.5 px-8 bg-white border border-[#E5E7EB] rounded-[25px] shadow-lg shadow-black/5 flex justify-between items-center">

                {/* Brand Logo with Earthy Brown Accent */}
                <a href="#" className="text-2xl font-bold flex items-center text-[#111827]">
                    Super<span className="text-[#A68A64]">Store</span>
                </a>

                {/* Dynamic Navigation Links */}
                <nav className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-[15px] font-semibold text-[#4B5563] hover:text-[#A68A64] transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Right side: Login Button + Icons */}
                <div className="flex items-center gap-3">
                    {/* Brand Accent Login Button */}
                    <button
                        type="button"
                        className="bg-[#A68A64] hover:bg-[#8C7351] text-white text-sm font-semibold px-5 py-2.5 rounded-[15px] transition-colors cursor-pointer"
                    >
                        Login
                    </button>

                    {/* Favorite Icon */}
                    <button
                        type="button"
                        aria-label="Favorite"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#111827] transition-colors cursor-pointer"
                    >
                        <Heart size={20}/>
                    </button>

                    {/* Cart Icon with Brown Badge */}
                    <button
                        type="button"
                        aria-label="Shopping Cart"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#111827] transition-colors relative cursor-pointer"
                    >
                        <ShoppingBag size={20}/>
                        <span
                            className="absolute -top-1 -right-1 bg-[#A68A64] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
                    </button>
                </div>

            </div>
        </header>
    )
}