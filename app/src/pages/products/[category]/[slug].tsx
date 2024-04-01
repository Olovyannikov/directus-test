import { useState } from 'react';
import { dehydrate } from '@tanstack/query-core';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { queryClient } from '@/pages/_app';
import { ASSETS_URL } from '@/shared/constants';

import { gqlClient } from '@/services/config';
import { AllProductsQuery, useAllCategoriesQuery, useAllProductsQuery, useGetProductQuery } from '@/services/generated';
import { useProduct } from '@/services/ProductService/useProduct';

export default function ProductPage() {
    const { query } = useRouter();
    const slug = query.slug?.toString();
    const { product } = useProduct({ slug: slug ?? '' });

    const [colorValue, setColorValue] = useState<string | null>(null);
    const [sizeShortTitle, setSizeShortTitle] = useState<string | null>(null);

    const PRODUCT_IMAGE = product?.product_image?.id;
    const PRODUCT_IMAGE_URL = `${ASSETS_URL}/${PRODUCT_IMAGE}`;

    return (
        <section className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <Head>
                <title>{product?.product_name}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='md:flex'>
                <div className=''>
                    {PRODUCT_IMAGE && (
                        <Image
                            alt='Image'
                            width={385}
                            height={385}
                            className='w-full object-center object-cover group-hover:opacity-75'
                            src={`${PRODUCT_IMAGE_URL}?width=385&height=385`}
                        />
                    )}
                </div>
                <div className='mt-2 md:ml-4'>
                    <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 '>{product?.product_name}</h2>
                    {product?.show_coloes && (
                        <div className='mt-4'>
                            <p className='mb-4 font-bold'>Choose a color</p>
                            <div className='flex'>
                                {product?.available_colors?.map((color) => (
                                    <div key={color?.product_colors_id?.id}>
                                        <label className='inline-flex items-center cursor-pointer'>
                                            <input
                                                type='radio'
                                                value={color?.product_colors_id?.color_value?.toString()}
                                                className='absolute opacity-0 h-0 w-0 peer'
                                                name='colors'
                                                onChange={(e) => setColorValue(e.target.value)}
                                            />
                                            <span
                                                className='w-8 h-8 peer-checked:shadow-[0_0_0_2px_rgba(204,204,204)] rounded-2xl mr-2 border-white border-2'
                                                style={{
                                                    background: color?.product_colors_id?.color_value?.toString(),
                                                }}
                                            ></span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {product?.show_sizes && (
                        <div className='mt-4'>
                            <p className='mb-4 font-bold'>Choose a size</p>
                            <div className='flex'>
                                {product?.available_sizes?.map((size) => (
                                    <div key={size?.product_sizes_id?.id}>
                                        <label className='inline-flex items-center cursor-pointer'>
                                            <input
                                                type='radio'
                                                value={size?.product_sizes_id?.short_title?.toString()}
                                                className='mr-2 absolute opacity-0 h-0 w-0 peer'
                                                name='sizes'
                                                onChange={(evt) => setSizeShortTitle(evt.target.value)}
                                            />
                                            <span className='w-8 h-8 peer-checked:bg-black peer-checked:text-white peer-checked:border-black rounded mr-2 border-gray-300 border-2 flex items-center justify-center'>
                                                {size?.product_sizes_id?.short_title}
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <button className='mt-8 bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-700'>
                        Add to cart
                    </button>
                </div>
            </div>
        </section>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    await queryClient.prefetchQuery(useAllProductsQuery.getKey(), useAllProductsQuery.fetcher(gqlClient));
    await queryClient.prefetchQuery(useAllCategoriesQuery.getKey(), useAllCategoriesQuery.fetcher(gqlClient));

    const dehydrateQueries = dehydrate(queryClient);

    const data = dehydrateQueries.queries[0].state.data as AllProductsQuery;
    const products = data?.products;
    const paths = products.map(
        (el) => '/products/' + el.product_categories?.[0]?.categories_id?.category_name?.toLowerCase() + '/' + el.slug
    );

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    await queryClient.prefetchQuery(
        useGetProductQuery.getKey(),
        useGetProductQuery.fetcher(gqlClient, {
            product_slug: params?.slug as string,
        })
    );

    const dehydrateQueries = dehydrate(queryClient);

    return {
        props: { dehydrateQueries },
    };
};
