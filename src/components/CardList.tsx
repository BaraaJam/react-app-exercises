import Card, {type CardProps } from './card'

// 1. Interface extending CardProps with a unique id for the React key
interface ProductItem extends CardProps {
    id: number
}

// 2. 4 Products Data
const products: ProductItem[] = [
    {
        id: 1,
        title: 'Wireless Studio Headphones',
        description: 'Active noise cancellation with 40 hours of crystal-clear acoustic playback.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        category: 'Electronics',
        price: 129.99,
    },
    {
        id: 2,
        title: 'Minimalist Ceramic Vase',
        description: 'Handcrafted matte finish organic vase designed for modern Nordic interiors.',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&q=80',
        category: 'Home Decor',
        price: 45.50,
    },
    {
        id: 3,
        title: 'Ergonomic Desk Chair',
        description: 'Breathable mesh back with multi-level adjustable lumbar and armrest support.',
        image: 'https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?w=500&q=80',
        category: 'Furniture',
        price: 219.00,
    },
    {
        id: 4,
        title: 'Premium Roasted Coffee Beans',
        description: 'Single-origin Arabica beans with tasting notes of hazelnut, cocoa, and caramel.',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80',
        category: 'Beverages',
        price: 24.00,
    },
]

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

            {/* Grid: maps over the products array */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        category={product.category}
                        price={product.price}
                    />
                ))}
            </div>

        </section>
    )
}