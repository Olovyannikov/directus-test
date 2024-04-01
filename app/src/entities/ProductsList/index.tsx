import { ProductCard } from './ui';

import type { FilteredProductsQuery } from '@/services/generated';

interface ProductsListProps {
    products: FilteredProductsQuery['products'];
}

export const ProductsList = ({ products }: ProductsListProps) => (
    <ul className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
        {products?.map((product) => (
            <li key={product.id} className='w-full'>
                <ProductCard
                    {...product}
                    slug={product.product_categories?.[0]?.categories_id?.slug + '/' + product.slug}
                    category={product.product_categories?.[0]?.categories_id?.category_name}
                />
            </li>
        ))}
    </ul>
);
