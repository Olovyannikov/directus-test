import Image from 'next/image';
import Link from 'next/link';

import { ASSETS_URL } from '@/shared/constants';

import type { Maybe, Products } from '@/services/generated';

type ProductCardProps = Pick<Products, 'price' | 'product_name' | 'slug'> & {
    product_image?: Maybe<{ id: string }>;
    category?: Maybe<string>;
};

export const ProductCard = ({ product_name, price, product_image, category, slug }: ProductCardProps) => (
    <Link href={`/products/${slug}`} className='group'>
        <Image
            className='w-full object-center object-cover group-hover:opacity-75'
            width='385'
            height='385'
            src={`${ASSETS_URL}/${product_image?.id}?width=385&height=385`}
            alt={`${product_name}`}
        />
        <div className='px-6 py-4'>
            <h3 className='text-sm text-gray-700 mt-0'>
                {product_name}
                <span className='text-xs text-gray-500 mb-0 rounded-3xl bg-gray-200 px-2 py-1 inline-block ml-2'>
                    {category}
                </span>
            </h3>
            <p className='mt-1 text-lg font-medium text-gray-900'>{price} ₽</p>
        </div>
    </Link>
);
