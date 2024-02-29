import { dehydrate } from '@tanstack/query-core';
import Head from 'next/head';

import { queryClient } from '@/pages/_app';

import { gqlClient } from '@/services/config';
import { useAllProductsQuery } from '@/services/generated';

import { ProductCard } from '@/entities';

export default function IndexPage() {
    const { data } = useAllProductsQuery(gqlClient);

    return (
        <>
            <Head>
                <title>E-Commence | Products</title>
            </Head>
            <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>Latest Products</h2>
                <ul className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                    {data?.products?.map((product) => (
                        <li key={product.id} className='w-full'>
                            <ProductCard
                                {...product}
                                category={product.product_categories?.[0]?.categories_id?.category_name}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    await queryClient.prefetchQuery(useAllProductsQuery.getKey(), useAllProductsQuery.fetcher(gqlClient));

    const dehydrateQueries = dehydrate(queryClient);

    return {
        props: {
            dehydrateQueries,
        },
    };
};
