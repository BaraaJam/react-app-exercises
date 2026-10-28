// 1. Interface for Quick Links
interface FooterLink {
    label: string
    href: string
}

// 2. Data array typed with the interface
const quickLinks: FooterLink[] = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
]

// 3. Contact details array
const contactDetails: string[] = [
    'Bredaryd, Sweden',
    'info@superstore.com',
    '+946 70 000 0000',
]

export default function Footer() {
    return (
        // 1. Give the outer footer a max-width and center it, with a bottom margin
        <footer className="w-full max-w-312 mx-auto px-6 mt-16">

            {/* 2. Put the dark background and rounded corners on the card */}
            <div className="bg-[#1e293b] text-white rounded-t-4xl pt-16 pb-10 px-10 shadow-xl">

                {/* Inner grid constrained so columns don't stretch too far */}
                <div className="max-w-250 mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
                        {/* Column 1: About */}
                        <div>
                            <h4 className="text-xl font-bold mb-4 flex items-center">
                                Super<span className="text-[#A68A64]">Store</span>
                            </h4>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed">
                                Your trusted marketplace for premium quality products. We offer high standards, fast shipping, and exceptional customer service.
                            </p>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                Quick Links
                            </h4>
                            <ul className="space-y-3 text-sm">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-[#9CA3AF] hover:text-[#A68A64] transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Contact */}
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                Contact Us
                            </h4>
                            <div className="space-y-2 text-sm text-[#9CA3AF]">
                                {contactDetails.map((detail) => (
                                    <p key={detail}>{detail}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom / Copyright */}
                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-[#9CA3AF]">
                        <p>© {new Date().getFullYear()} SuperStore. All rights reserved.</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}