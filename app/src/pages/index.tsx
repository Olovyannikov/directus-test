import { dehydrate } from '@tanstack/query-core';

import { RootLayout } from '@/layouts';
import { queryClient } from '@/pages/_app';
import { Container } from '@/shared/ui';

import { gqlClient } from '@/services/config';
import { useAllCategoriesQuery, useAllProductsQuery } from '@/services/generated';
import { useProducts } from '@/services/ProductsService/useProducts';

import { PageTitle, ProductsList } from '@/entities';
import { ProductsFilters } from '@/widgets';

export default function IndexPage() {
    const { getSelectedCategories, categories, products } = useProducts();

    return (
        <RootLayout title='E-Commence | Products'>
            <Container>
                <PageTitle>Latest Products</PageTitle>
                {categories && (
                    <ProductsFilters categories={categories} getSelectedCategories={getSelectedCategories} />
                )}
                {products && <ProductsList products={products.products} />}
            </Container>
        </RootLayout>
    );
}

export const getStaticProps = async () => {
    await queryClient.prefetchQuery(useAllProductsQuery.getKey(), useAllProductsQuery.fetcher(gqlClient));
    await queryClient.prefetchQuery(useAllCategoriesQuery.getKey(), useAllCategoriesQuery.fetcher(gqlClient));

    const dehydrateQueries = dehydrate(queryClient);

    return {
        props: {
            dehydrateQueries,
        },
    };
};
